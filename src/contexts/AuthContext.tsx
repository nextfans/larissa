/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable indent */
'use client'
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  deleteUser,
  EmailAuthProvider,
  reauthenticateWithCredential,
  sendEmailVerification,
  setPersistence,
  browserSessionPersistence,
  UserCredential,
} from 'firebase/auth'
import { auth } from '../lib/firebaseClient'
import api from '../lib/api'
import { User } from '../@types/User'

export const AuthContext = createContext<{
  user: User | null
  login: (email: string, password: string) => Promise<UserCredential> | unknown
  signup: (email: string, password: string) => Promise<any>
  logout: () => Promise<void>
  passResetWithEmail: (email: string) => Promise<boolean>
  updateUser: (user: any, displayName: string) => Promise<void>
  authDeleteUser: (userProvidedPassword: string) => Promise<void>
  emailVerification: () => Promise<string | undefined>
  fetchUser: (user: any) => Promise<void>
}>({
  user: null,
  login: () => Promise.resolve(),
  signup: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  passResetWithEmail: () => Promise.resolve(false),
  updateUser: () => Promise.resolve(),
  authDeleteUser: () => Promise.resolve(),
  emailVerification: () => Promise.resolve(undefined),
  fetchUser: () => Promise.resolve(),
})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  const fetchUser = useCallback(async (user: any) => {
    const response = await api.get('users', {
      headers: {
        Authorization: user?.accessToken,
      },
    })
    await setUser({ ...response.data, ...user })
  }, [])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        await fetchUser(user)
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [fetchUser])

  const updateUser = (user: any, displayName: string) => {
    return updateProfile(user, { displayName })
  }

  const signup = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const login = (
    email: string,
    password: string,
  ): Promise<UserCredential> | unknown => {
    try {
      setPersistence(auth, browserSessionPersistence)
      return signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      return error
    }
  }

  const logout = async () => {
    setUser(null)
    await signOut(auth)
  }

  const authDeleteUser = async (userProvidedPassword: string) => {
    if (auth.currentUser && auth.currentUser.email) {
      const credential = EmailAuthProvider.credential(
        auth.currentUser.email,
        userProvidedPassword,
      )
      const response: any = await reauthenticateWithCredential(
        auth.currentUser,
        credential,
      )
      await deleteUser(auth.currentUser)
      await api.delete('users', {
        headers: {
          Authorization: response.user?.accessToken,
        },
      })
    }
  }

  const emailVerification = async () => {
    if (auth.currentUser) {
      await sendEmailVerification(auth.currentUser)
    } else {
      return 'Not current user'
    }
  }

  const passResetWithEmail = async (email: string) => {
    return await sendPasswordResetEmail(auth, email).then(() => true)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        passResetWithEmail,
        updateUser,
        authDeleteUser,
        emailVerification,
        fetchUser,
      }}
    >
      {loading ? null : children}
    </AuthContext.Provider>
  )
}
