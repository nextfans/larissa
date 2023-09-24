// app/api/users/updateIdInvited/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { admin, db } from '../../../../lib/firebaseAdmin'
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

const updateUserGuests = async (uid: string, idWhoInvited: string) => {
  const userRef = db.collection('User').doc(idWhoInvited)

  await userRef.update({
    guests: admin.firestore.FieldValue.arrayUnion(uid),
  })
}

export async function PUT(request: NextRequest) {
  if (hasAuthorization(request)) {
    const accessToken = getAccessToken(request)
    const body = await request.json()

    try {
      const decodedToken = await verifyIdToken(accessToken as string)
      const uid = decodedToken.uid

      if (body.idWhoInvited) {
        await updateUserGuests(uid, body.idWhoInvited)
        return NextResponse.json(
          { message: 'Usuário convidado foi atualizado' },
          { status: 200 },
        )
      } else {
        return NextResponse.json(
          { message: 'O usário não tem id de convidado' },
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
