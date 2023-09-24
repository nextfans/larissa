import { NextRequest, NextResponse } from 'next/server'
import { User } from '../../../@types/User'
import {
  createUser,
  deleteUser,
  getUser,
  updateUser,
} from '../../../data/firebase/users'

export async function GET(request: NextRequest) {
  const authorizationHeader = request.headers.get('authorization')

  if (authorizationHeader) {
    const accessToken = authorizationHeader.replace('Bearer ', '')
    try {
      const userData = await getUser(accessToken)
      return NextResponse.json(userData)
    } catch (error) {
      return NextResponse.json({ message: (error as Error).message })
    }
  } else {
    return NextResponse.json({ message: 'Unauthorized' })
  }
}

export async function POST(request: NextRequest) {
  const authorizationHeader = request.headers.get('authorization')

  if (authorizationHeader) {
    const accessToken = authorizationHeader.replace('Bearer ', '')
    try {
      const createMessage = await createUser(
        accessToken,
        (await request.json()) as User,
      )
      return NextResponse.json({ message: createMessage })
    } catch (error) {
      return NextResponse.json({ message: (error as Error).message })
    }
  } else {
    return NextResponse.json({ message: 'Unauthorized' })
  }
}

export async function DELETE(request: NextRequest) {
  const authorizationHeader = request.headers.get('authorization')
  if (authorizationHeader) {
    const accessToken = authorizationHeader.replace('Bearer ', '')
    try {
      const deleteMessage = await deleteUser(accessToken)
      return NextResponse.json({ message: deleteMessage })
    } catch (error) {
      return NextResponse.json({ message: (error as Error).message })
    }
  } else {
    return NextResponse.json({ message: 'Unauthorized' })
  }
}

export async function PUT(request: NextRequest) {
  const authorizationHeader = request.headers.get('authorization')
  if (authorizationHeader) {
    const accessToken = authorizationHeader.replace('Bearer ', '')
    try {
      const updateMessage = await updateUser(
        accessToken,
        (await request.json()) as User,
      )
      return NextResponse.json({ message: updateMessage })
    } catch (error) {
      return NextResponse.json({ message: (error as Error).message })
    }
  } else {
    return NextResponse.json({ message: 'Unauthorized' })
  }
}
