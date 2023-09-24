// app/api/dislike/route.ts

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

const updateUserDislikes = async (uid: string, likedUserUid: string) => {
  const dislikesRef = await db
    .collection('User')
    .doc(String(uid))
    .collection('Dislikes')
    .doc(String(likedUserUid))
  const dislikesDoc = await dislikesRef.get()

  if (dislikesDoc.exists) {
    throw new Error(`User with uid ${likedUserUid} has already been disliked`)
  }

  await dislikesRef.set({
    timestamp: admin.firestore.FieldValue.serverTimestamp(),
  })
}

export async function PUT(request: NextRequest) {
  if (hasAuthorization(request)) {
    const accessToken = getAccessToken(request)
    const body = await request.json()
    const { likedUserUid } = body

    try {
      const decodedToken = await verifyIdToken(accessToken as string)
      const uid = decodedToken.uid

      if (likedUserUid) {
        await updateUserDislikes(uid, String(likedUserUid))
        return NextResponse.json(
          { message: 'Usuário atualizado com sucesso' },
          { status: 200 },
        )
      } else {
        console.error('Tivemos um problema com o tipo do id')
        return NextResponse.json(
          { message: 'Tivemos um problema com o tipo do id' },
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
