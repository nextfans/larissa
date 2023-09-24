import { User } from '../@types/User'

export function extractUserInfo(user: User) {
  return {
    lastName: user.lastName,
    dateOfBirth: user.dateOfBirth,
    displayName: user.displayName,
    myInvitationId: user.myInvitationId,
    firstName: user.firstName,
    photoURL: user.photoURL,
    isProfileVerified: user.isProfileVerified,
    metadata: user.metadata,
    bio: user.bio,
    photos: user.photos,
    photoCount: user.photoCount,
    uid: user.uid,
    username: user.username,
    republica: user.republica,
  }
}
