// app/api/like/route.ts

import { NextRequest, NextResponse } from 'next/server'
import { db, admin } from '../../../lib/firebaseAdmin'
import { verifyIdToken } from '@/data/firebase/users'

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

const checkForMatch = async (currentUserUid: string, likedUserUid: string) => {
  const userRef = db.collection('User').doc(likedUserUid)
  const likedUserLikesSnapshot = await userRef
    .collection('Likes')
    .doc(currentUserUid)
    .get()

  return likedUserLikesSnapshot.exists
}

const updateUserMatches = async (uid: string, matchedUserUid: string) => {
  const matchesRef = db
    .collection('User')
    .doc(uid)
    .collection('Matches')
    .doc(matchedUserUid)

  await matchesRef.set({
    uid: matchedUserUid,
    timestamp: admin.firestore.FieldValue.serverTimestamp(),
  })
}

const checkForMatchAndUpdateMatches = async (
  currentUserUid: string,
  likedUserUid: string,
) => {
  const isMatch = await checkForMatch(currentUserUid, likedUserUid)

  if (isMatch) {
    await updateUserMatches(currentUserUid, likedUserUid)
    await updateUserMatches(likedUserUid, currentUserUid)
  }

  return isMatch
}

const updateUserLikes = async (uid: string, likedUserUid: string) => {
  const likesRef = await db
    .collection('User')
    .doc(String(uid))
    .collection('Likes')
    .doc(String(likedUserUid))
  const likesDoc = await likesRef.get()

  if (likesDoc.exists) {
    throw new Error(`User with uid ${likedUserUid} has already been liked`)
  }

  await likesRef.set({
    uid: likedUserUid,
    timestamp: admin.firestore.FieldValue.serverTimestamp(),
  })
}

export async function PUT(
  request: NextRequest,
): Promise<NextResponse<{ message: string }>> {
  if (hasAuthorization(request)) {
    const accessToken = getAccessToken(request)
    const body = await request.json()
    const { likedUserUid } = body

    try {
      const decodedToken = await verifyIdToken(accessToken as string)
      const uid = decodedToken.uid

      if (likedUserUid) {
        await updateUserLikes(uid, String(likedUserUid))
        const isMatch = await checkForMatchAndUpdateMatches(
          uid,
          String(likedUserUid),
        )
        return NextResponse.json(
          {
            message: isMatch
              ? 'Match!'
              : 'Likes do usuário atualizados com sucesso',
            match: isMatch,
          },
          { status: 200 },
        )
      } else {
        return NextResponse.json(
          { message: 'Id não fornecido' },
          { status: 400 },
        )
      }
    } catch (error) {
      console.error(error)
      return NextResponse.json({ message: 'Ocorreu um erro' }, { status: 400 })
    }
  } else {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }
}
