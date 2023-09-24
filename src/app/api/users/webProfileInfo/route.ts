// app/api/users/webProfileInfo/route.ts

import { NextRequest, NextResponse } from 'next/server'
import {
  getWebProfileInfo,
  verifyIdToken,
} from '../../../../data/firebase/users'
import { extractUserInfo } from '../../../../lib/extractUserInfo'

export async function GET(request: NextRequest) {
  const authorizationHeader = request.headers.get('authorization')
  const { searchParams } = new URL(request.url)
  const uid = searchParams.get('uid')
  if (!uid) {
    return NextResponse.json(
      { message: 'É necessário a informação do usuário' },
      { status: 400 },
    )
  }

  if (authorizationHeader) {
    const accessToken = authorizationHeader.replace('Bearer ', '')
    try {
      await verifyIdToken(accessToken)
      const userData = await getWebProfileInfo(uid)
      const userWebProfileInfo = extractUserInfo(userData)
      return NextResponse.json(userWebProfileInfo, { status: 200 })
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
