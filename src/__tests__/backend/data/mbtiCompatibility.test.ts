import { mbtiCompatibility } from '../../../data/mbtiCompatibility'

describe('MBTI Compatibility', () => {
  test('should have 256 combinations', () => {
    const totalCombinations = Object.keys(mbtiCompatibility).length
    expect(totalCombinations).toEqual(256)
  })
})
