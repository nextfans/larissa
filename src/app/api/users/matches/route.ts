import { NextRequest, NextResponse } from 'next/server'
import { getUser, getUserMatches } from '../../../../data/firebase/users'

export async function GET(request: NextRequest) {
  const authorizationHeader = request.headers.get('authorization')
  if (authorizationHeader) {
    const accessToken = authorizationHeader.replace('Bearer ', '')
    try {
      const userData = await getUser(accessToken)
      const matches = await getUserMatches(userData.uid)
      return NextResponse.json(matches)
    } catch (error) {
      return NextResponse.json({ message: (error as Error).message })
    }
  } else {
    return NextResponse.json({ message: 'Unauthorized' })
  }
}
