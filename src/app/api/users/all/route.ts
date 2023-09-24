// app/api/users/all/route.ts

import { NextRequest, NextResponse } from 'next/server'
import { User } from '../../../../@types/User'
import { getAllUsers, verifyIdToken } from '@/data/firebase/users'

const hasAuthorization = (request: NextRequest): boolean => {
  return !!request.headers.get('authorization')
}

const getAccessToken = (request: NextRequest): string => {
  const auth = request.headers.get('authorization')
  if (!auth) {
    throw new Error('Unauthorized')
  }
  return auth.replace('Bearer ', '')
}

export async function GET(request: NextRequest) {
  if (hasAuthorization(request)) {
    const accessToken = getAccessToken(request)
    try {
      await verifyIdToken(accessToken as string)
      const entriesDataUsers = await getAllUsers()
      const response = entriesDataUsers.map((user: User) => {
        return {
          displayName: user.displayName,
        }
      })
      return NextResponse.json(response as User[], { status: 200 })
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
