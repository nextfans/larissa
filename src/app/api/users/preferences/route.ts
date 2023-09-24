// app/api/users/preferences.ts

import { NextRequest, NextResponse } from 'next/server'
import {
  getUserInterestsAndDisinterestsIds,
  verifyIdToken,
} from '../../../../data/firebase/users'
import { preferences } from '../../../../data/preferences'

export async function GET(request: NextRequest) {
  const authorizationHeader = request.headers.get('authorization')

  if (authorizationHeader) {
    const accessToken = authorizationHeader.replace('Bearer ', '')
    try {
      const decodedToken = await verifyIdToken(accessToken)

      const { interestedUserIds, disinterestedUserIds } =
        await getUserInterestsAndDisinterestsIds(decodedToken.uid)

      const preferencesCore = preferences
        .map((preference) => preference)
        .filter(
          (preference) =>
            !interestedUserIds.has(preference.id) &&
            !disinterestedUserIds.has(preference.id),
        )

      return NextResponse.json(
        {
          preferences: preferencesCore.slice(0, 12),
          meta: {
            totalCount: preferencesCore.length,
            interestsAndDisinterestsCount:
              interestedUserIds.size + disinterestedUserIds.size,
          },
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
