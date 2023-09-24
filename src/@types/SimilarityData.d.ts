export interface SimilarityData {
  value: number
  commonInterested: Record<string, string>[]
  commonDisinterested: Record<string, string>[]
  totalCombinations: number
}
