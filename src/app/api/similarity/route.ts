/* eslint-disable @typescript-eslint/ban-ts-comment */
// app/api/similarity.ts

import { NextRequest, NextResponse } from 'next/server'
import {
  getUserInterestsAndDisinterests,
  verifyIdToken,
} from '../../../data/firebase/users'
import { getSimilarity } from '../../../lib/similarity'

export async function POST(request: NextRequest) {
  const authorization = request.headers.get('authorization')
  if (authorization) {
    const accessToken = authorization.replace('Bearer ', '')
    try {
      const decodedToken = await verifyIdToken(accessToken)
      const body = await request.json()
      const { otherUserUid } = body

      const { interestedUser, disinterestedUser } =
        await getUserInterestsAndDisinterests(decodedToken.uid)

      const response = await getUserInterestsAndDisinterests(otherUserUid)
      const interestedOtherUser = response.interestedUser
      const disinterestedOther = response.disinterestedUser

      const valueSimilarityInterested = getSimilarity(
        interestedUser,
        interestedOtherUser,
      )
      const valueSimilarityDisinterested = getSimilarity(
        disinterestedUser,
        disinterestedOther,
      )

      const value = Math.max(
        // @ts-ignore
        valueSimilarityInterested.value,
        valueSimilarityDisinterested.value,
      )

      const totalCombinations = Math.max(
        // @ts-ignore
        valueSimilarityInterested.totalCombinations,
        valueSimilarityDisinterested.totalCombinations,
      )

      return NextResponse.json(
        {
          value: Math.round(value),
          commonInterested: valueSimilarityInterested.commonPreference,
          commonDisinterested: valueSimilarityDisinterested.commonPreference,
          totalCombinations,
        },
        { status: 200 },
      )
    } catch (error) {
      console.error(error)
      return NextResponse.json(
        { message: (error as Error).message },
        { status: 400 },
      )
    }
  } else {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }
}
