// app/api/disinterest/route.ts

import { NextRequest, NextResponse } from 'next/server'
import {
  hasAuthorization,
  getAccessToken,
  updateUserPreferences,
} from '../../../lib/preferences'
import { verifyIdToken } from '@/data/firebase/users'

export async function PUT(request: NextRequest) {
  if (hasAuthorization(request)) {
    const accessToken = getAccessToken(request)
    const body = await request.json()
    const { preference } = body

    try {
      const decodedToken = await verifyIdToken(accessToken as string)
      const uid = decodedToken.uid

      if (preference) {
        await updateUserPreferences(uid, preference, 'Disinterests')
        return NextResponse.json(
          { message: 'User disinterest successfully added' },
          { status: 200 },
        )
      } else {
        return NextResponse.json(
          { message: 'There was a problem with the ID type' },
          { status: 400 },
        )
      }
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
