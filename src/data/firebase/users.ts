// data/firebase/users.ts
import { admin, db } from '../../lib/firebaseAdmin'
import { User } from '../../@types/User'

export async function verifyIdToken(accessToken: string) {
  return admin
    .auth()
    .verifyIdToken(accessToken)
    .then((decodedToken) => decodedToken)
    .catch((error) => error)
}

export function documentDataToUser(
  data: admin.firestore.DocumentData | undefined,
): User | undefined {
  if (data) {
    return data as User
  }
  return undefined
}

export async function getUserMatches(uid: string) {
  const matchesRef = db.collection('User').doc(uid).collection('Matches')
  const matchesSnapshot = await matchesRef.get()

  const matchUids = matchesSnapshot.docs.map((doc) => doc.id)

  const matchDataPromises = matchUids.map((matchUid) =>
    getWebProfileInfo(matchUid),
  )

  return Promise.all(matchDataPromises)
}

export async function createUser(
  accessToken: string,
  newUser: User,
): Promise<string> {
  const decodedToken = await verifyIdToken(accessToken)
  await db.collection('User').doc(decodedToken.uid).set(newUser)
  return 'Usuário criado com sucesso'
}

export async function getAllUsers(): Promise<User[]> {
  const entriesUsers = await db.collection('User').get()
  const entriesDataUsers = entriesUsers.docs.map(
    (entry) => entry.data() as User,
  )
  return entriesDataUsers
}

export async function getRefUser(
  accessToken: string,
): Promise<admin.firestore.DocumentReference> {
  const decodedToken = await verifyIdToken(accessToken)
  const userRef = db.collection('User').doc(decodedToken.uid)
  return userRef
}

export async function getWebProfileInfo(uid: string): Promise<User> {
  let foundUser: User | undefined

  const userDocRef = db.collection('User').doc(uid)
  const doc = await userDocRef.get()

  if (doc.exists) {
    foundUser = doc.data() as User
  }

  if (!foundUser) {
    const userQuerySnapshot = await db
      .collection('User')
      .where('username', '==', uid)
      .limit(1)
      .get()

    if (!userQuerySnapshot.empty) {
      foundUser = userQuerySnapshot.docs[0].data() as User
    }
  }

  if (!foundUser) {
    throw new Error(`O usuário não foi encontrado`)
  }

  return foundUser
}

export async function getVerifiedUsers(): Promise<User[]> {
  const entriesVerifiedUsers = await db
    .collection('User')
    .where('isProfileVerified', '==', true)
    .get()
  const verifiedUsers = entriesVerifiedUsers.docs.map(
    (entry) => entry.data() as User,
  )
  return verifiedUsers
}

export async function getUser(accessToken: string): Promise<User> {
  const decodedToken = await verifyIdToken(accessToken)
  const userRef = db.collection('User').doc(decodedToken.uid)
  const userDoc = await userRef.get()
  const userData = userDoc.data()

  if (!userData) {
    throw new Error('Não foi possível obter as informações do usuário.')
  }

  return documentDataToUser(userData) as User
}

export async function isUsernameAvailability(
  username: string,
): Promise<boolean> {
  const userRef = db.collection('User')
  const snapshot = await userRef.where('username', '==', username).get()
  if (snapshot.empty) {
    return true
  }
  return false
}

export async function updateUser(
  accessToken: string,
  newUser: Partial<User>,
): Promise<string> {
  const userRef = await getRefUser(accessToken)
  if (newUser.username) {
    const isUserAvailability = await isUsernameAvailability(newUser.username)
    if (!isUserAvailability) {
      throw new Error(
        'O nome de usuário já está em uso. Por favor, escolha um nome de usuário diferente!',
      )
    }
  }
  await userRef.update(newUser)
  return newUser.username
    ? 'Seu nome de usuário foi atualizado com sucesso'
    : 'Usuário atualizado com sucesso'
}

export async function deleteUser(accessToken: string): Promise<string> {
  const userRef = await getRefUser(accessToken)
  await userRef.delete()
  return 'Usuário deletado com sucesso'
}

export async function getUserLikesAndDislikes(uid: string) {
  const likesRef = db.collection('User').doc(uid).collection('Likes')
  const likesSnapshot = await likesRef.get()
  const dislikesRef = db.collection('User').doc(uid).collection('Dislikes')
  const dislikesSnapshot = await dislikesRef.get()

  const likedUserIds = new Set<string>(likesSnapshot.docs.map((doc) => doc.id))
  const dislikedUserIds = new Set<string>(
    dislikesSnapshot.docs.map((doc) => doc.id),
  )

  return { likedUserIds, dislikedUserIds }
}

export async function getUserInterestsAndDisinterests(uid: string) {
  const interestsRef = db.collection('User').doc(uid).collection('Interests')
  const interestsSnapshot = await interestsRef.get()
  const interestedUser = interestsSnapshot.docs.map((doc) => doc.data())

  const disinterestsRef = db
    .collection('User')
    .doc(uid)
    .collection('Disinterests')
  const disinterestsSnapshot = await disinterestsRef.get()
  const disinterestedUser = disinterestsSnapshot.docs.map((doc) => doc.data())

  return { interestedUser, disinterestedUser }
}

export async function getUserInterestsAndDisinterestsIds(uid: string) {
  const interestsRef = db.collection('User').doc(uid).collection('Interests')
  const interestsSnapshot = await interestsRef.get()
  const disinterestsRef = db
    .collection('User')
    .doc(uid)
    .collection('Disinterests')
  const disinterestsSnapshot = await disinterestsRef.get()

  const interestedUserIds = new Set<string>(
    interestsSnapshot.docs.map((doc) => doc.id),
  )
  const disinterestedUserIds = new Set<string>(
    disinterestsSnapshot.docs.map((doc) => doc.id),
  )

  return { interestedUserIds, disinterestedUserIds }
}

export async function getFilteredUsers(
  currentUser: User,
  likedUserIds: Set<string>,
  dislikedUserIds: Set<string>,
  startAfterDoc: admin.firestore.DocumentSnapshot | null = null,
): Promise<{
  users: User[]
  lastDoc: admin.firestore.DocumentSnapshot | null
}> {
  let query = db
    .collection('User')
    .where('photoCount', '>', 0)
    .orderBy('photoCount')
    .limit(12)

  if (startAfterDoc) {
    query = query.startAfter(startAfterDoc)
  }

  const snapshot = await query.get()
  const users = snapshot.docs
    .map((doc) => doc.data() as User)
    .map((user) => {
      return user
    })
    .filter(
      (user) =>
        user.uid !== currentUser.uid &&
        !likedUserIds.has(user.uid) &&
        !dislikedUserIds.has(user.uid) &&
        currentUser.seeking.includes(user.genderIdentity),
    )

  const lastDoc = snapshot.docs[snapshot.docs.length - 1] || null

  return { users, lastDoc }
}
