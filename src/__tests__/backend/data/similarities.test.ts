import { preferences } from '../../../data/preferences'
import { similarities, SimilarityMap } from '../../../data/similarities'
import { findSimilarity } from '../../../lib/similarity'

function hasDuplicateIds(map: SimilarityMap) {
  const ids = Object.keys(map)
  return new Set(ids).size !== ids.length
}

const ids: string[] = []
for (let i = 0; i <= 169; i++) {
  ids.push(i.toString())
}

const allSimilarities: { id1: string; id2: string; similarity: number }[] = []

ids.forEach((id1) => {
  ids.forEach((id2) => {
    const similarity = findSimilarity(id1, id2)
    if (similarity !== -1) {
      allSimilarities.push({
        id1,
        id2,
        similarity,
      })
    }
  })
})

function factorial(num: number): number {
  if (num === 0 || num === 1) {
    return 1
  } else {
    return num * factorial(num - 1)
  }
}

function numCombinations(n: number): number {
  const r = 2
  return factorial(n) / (factorial(r) * factorial(n - r))
}

describe('Similarity data: integrity and consistency validation', () => {
  it('should not have duplicate IDs in the similarity map', () => {
    expect(hasDuplicateIds(similarities)).toBe(false)
  })

  it('should have correct number of combinations in the similarity map', () => {
    const numberCombinations = numCombinations(preferences.length)
    expect(Object.values(similarities).length).toBe(numberCombinations)
  })

  it('should have a similarity score between 0 and 1 for all preferences in the similarity map', () => {
    Object.values(similarities).forEach((item) => {
      expect(item.similarity).toBeGreaterThanOrEqual(0)
      expect(item.similarity).toBeLessThanOrEqual(1)
    })
  })
})
