import { Preference, preferences } from '../../../data/preferences'

const NUMBER_OF_ITEMS = 5

function countUniqueCategories(preferences: Preference[]) {
  const categories = preferences.map((preference) => preference.category)
  return new Set(categories).size
}

function idsAreInOrder(preferences: Preference[]) {
  for (let i = 0; i < preferences.length - 1; i++) {
    if (preferences[i].id !== String(i)) {
      return false
    }
  }
  return true
}

function findDuplicateIds(preferences: Preference[]) {
  const ids = Object.keys(preferences)
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index)
  return Array.from(new Set(duplicates))
}

function findDuplicateEmojis(preferences: Preference[]) {
  const emojiCounts = new Map()
  const duplicateEmojis = new Set()

  preferences.forEach((preference) => {
    const count = emojiCounts.get(preference.emoji) || 0
    emojiCounts.set(preference.emoji, count + 1)
  })

  emojiCounts.forEach((count, emoji) => {
    if (count > NUMBER_OF_ITEMS) {
      duplicateEmojis.add(emoji)
    }
  })

  return Array.from(duplicateEmojis)
}

describe('Preference data: integrity and consistency validation', () => {
  test('The preference map must not have duplicate IDs', () => {
    const duplicateIds = findDuplicateIds(preferences)
    if (duplicateIds.length > 0) {
      console.error('Duplicate IDs found:', duplicateIds)
    }
    expect(duplicateIds).toEqual([])
  })

  test('All items should have id, name, and category properties', () => {
    preferences.forEach((item) => {
      expect(item).toHaveProperty('id')
      expect(item).toHaveProperty('name')
      expect(item).toHaveProperty('category')
    })
  })

  test('All categories should have at least one preference', () => {
    const uniqueCategories = countUniqueCategories(preferences)
    expect(uniqueCategories).toBeGreaterThan(0)
  })

  test(`All preference categories have ${NUMBER_OF_ITEMS} items`, () => {
    const categoriesSet = new Set(
      preferences.map((preference) => preference.category),
    )
    const categories = Array.from(categoriesSet)

    const failedCategories: { category: string; itemCount: number }[] = []

    categories.forEach((category) => {
      const items = preferences.filter(
        (preference) => preference.category === category,
      )
      if (items.length !== NUMBER_OF_ITEMS) {
        failedCategories.push({ category, itemCount: items.length })
      }
    })

    if (failedCategories.length > 0) {
      const categoryErrors = failedCategories
        .map(({ category, itemCount }) => `${category} (${itemCount} items)`)
        .join(', ')
      throw new Error(
        `The following categories do not have exactly ${NUMBER_OF_ITEMS} items: ${categoryErrors}`,
      )
    }
  })

  test('IDs are in the correct order and all are present', () => {
    expect(idsAreInOrder(preferences)).toBe(true)
  })

  test('No two preference items have the same name', () => {
    const duplicates: string[] = []

    preferences.forEach((preference) => {
      const otherPreferences = preferences.filter(
        (otherPreference) => otherPreference !== preference,
      )
      const duplicate = otherPreferences.find(
        (otherPreference) =>
          otherPreference.name.toLowerCase() === preference.name.toLowerCase(),
      )
      if (duplicate) {
        duplicates.push(preference.name)
      }
    })

    if (duplicates.length > 0) {
      throw new Error(
        `The following preference items have the same name: ${duplicates.join(
          ', ',
        )}`,
      )
    }
  })

  test('All preference items have an emoji and the emoji is unique', () => {
    const duplicateEmojis = findDuplicateEmojis(preferences)
    if (duplicateEmojis.length > 0) {
      console.error('Duplicate emojis found:', duplicateEmojis)
    }
    expect(duplicateEmojis).toEqual([])
  })
})
