import { NextRequest } from 'next/server'
import { db } from './firebaseAdmin'
import { Preference } from '../data/preferences'

export const hasAuthorization = (request: NextRequest): boolean => {
  return !!request.headers.get('authorization')
}

export const getAccessToken = (request: NextRequest): string | undefined => {
  return request.headers.get('authorization')?.replace('Bearer ', '')
}

export const updateUserPreferences = async (
  uid: string,
  preference: Preference,
  preferenceType: 'Interests' | 'Disinterests',
) => {
  const preferenceRef = await db
    .collection('User')
    .doc(String(uid))
    .collection(preferenceType)
    .doc(String(preference.id))

  const preferenceDoc = await preferenceRef.get()

  if (preferenceDoc.exists) {
    throw new Error(`Prefêrencia com o id ${preference.id} já foi marcada`)
  }

  await preferenceRef.set(preference)
}
