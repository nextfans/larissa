// app/api/users/core/route.ts

import { NextRequest, NextResponse } from 'next/server'
import { User } from '../../../../@types/User'
import {
  getUserLikesAndDislikes,
  verifyIdToken,
  getFilteredUsers,
  getUser,
} from '../../../../data/firebase/users'
import { admin } from '../../../../lib/firebaseAdmin'
import { extractUserInfo } from '../../../../lib/extractUserInfo'

export async function GET(request: NextRequest) {
  const authorizationHeader = request.headers.get('authorization')

  if (authorizationHeader) {
    const accessToken = authorizationHeader.replace('Bearer ', '')
    try {
      const decodedToken = await verifyIdToken(accessToken)
      const currentUser = await getUser(accessToken)
      const { likedUserIds, dislikedUserIds } = await getUserLikesAndDislikes(
        decodedToken.uid,
      )

      let lastUserDoc: admin.firestore.DocumentSnapshot | null = null
      let usersCore: User[] = []

      while (usersCore.length < 12) {
        const { users, lastDoc } = await getFilteredUsers(
          currentUser,
          likedUserIds,
          dislikedUserIds,
          lastUserDoc,
        )

        if (users.length === 0) {
          break
        }

        lastUserDoc =
          lastDoc as admin.firestore.QueryDocumentSnapshot<admin.firestore.DocumentData>
        usersCore = usersCore.concat(users)
      }

      const sliceUsersCore = usersCore.slice(0, 12)
      const filterUsersCore = sliceUsersCore.map((user) =>
        extractUserInfo(user),
      )
      return NextResponse.json(filterUsersCore, { status: 200 })
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
