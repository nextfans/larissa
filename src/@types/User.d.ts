/* eslint-disable no-unused-vars */
import { User as FirebaseUser, UserMetadata } from 'firebase/auth'

export type GenderIdentity = 'Homem' | 'Mulher' | 'Não-binário' | 'Outro'

export interface Metadata extends UserMetadata {
  lastDiscoverAt: string
}

export interface User extends FirebaseUser {
  accessToken: string
  bio: string
  dateOfBirth: Date
  dislikes?: Array<Record<string | string>>
  firstName: string
  guests?: Array<string>
  hasSentEmail: boolean
  idWhoInvited: string | null
  isProfileVerified: boolean
  metadata: Metadata
  lastName: string
  likes?: Array<Record<string | string>>
  myInvitationId: string
  photos: Array<string>
  photoCount: number
  uid: string
  username?: string
  wantReceiveEmail: boolean
  verificationImageUrl?: string
  republica?: string
  genderIdentity: GenderIdentity
  seeking: GenderIdentity[]
}

export interface WebProfileInfo {
  lastName: string
  dateOfBirth: Date
  displayName: string | null
  idWhoInvited: string | null
  firstName: string
  photoURL: string | null
  isProfileVerified: boolean
  metadata: Metadata
  bio: string
  photos: string[]
  photoCount: number
  uid: string
  username: string | undefined
  republica?: string
}
