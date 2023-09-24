// getSimilarity.ts
import { DocumentData } from 'firebase/firestore'
import { similarities } from '../data/similarities'

export function findSimilarity(id1: string, id2: string): number {
  if (id1 === id2) {
    return 1
  }

  const key1 = id1 + '_' + id2
  const key2 = id2 + '_' + id1

  if (similarities[key1]) {
    return similarities[key1].similarity
  } else if (similarities[key2]) {
    return similarities[key2].similarity
  }

  return -1
}

export const getSimilarity = (
  interestedUser: DocumentData[],
  interestedOther: DocumentData[],
): Record<string, unknown> => {
  let similaritySum = 0
  let validCombinations = 0
  const commonInterested = []
  let totalCombinations = 0

  for (const userInterest of interestedUser) {
    for (const otherInterest of interestedOther) {
      const similarity = findSimilarity(userInterest.id, otherInterest.id)
      if (similarity > 0.5) {
        similaritySum += similarity
        validCombinations += 1
      }
      if (similarity === 1) {
        commonInterested.push(userInterest)
      }
      totalCombinations += 1
    }
  }

  const commonPreference = Object.values(
    commonInterested.reduce((accumulatedUsers, currentUser) => {
      accumulatedUsers[currentUser.id] = currentUser
      return accumulatedUsers
    }, {}),
  )

  const similarityScore: number = parseFloat(
    ((similaritySum / validCombinations) * 100).toFixed(2),
  )

  const combinations = Math.max(interestedUser.length, interestedOther.length)

  const preferencesScore: number = parseFloat(
    ((commonPreference.length / combinations) * 100).toFixed(2),
  )

  const value = (similarityScore + preferencesScore) / 2

  return {
    value,
    commonPreference,
    validCombinations,
    totalCombinations,
  }
}
