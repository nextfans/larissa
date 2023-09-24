// app/api/users/count/route.ts

import { NextResponse } from 'next/server'
import { db } from '../../../../lib/firebaseAdmin'

export async function GET() {
  try {
    const collectionRef = db.collection('User')
    const snapshot = await collectionRef.count().get()
    const count = snapshot.data().count
    return NextResponse.json({ count }, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 400 },
    )
  }
}
