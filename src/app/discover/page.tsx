/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { MbtiType, calculateCompatibility } from '../../data/mbti'
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
  Text,
  Alert,
  AlertIcon,
  Center,
  Box,
} from '@chakra-ui/react'
import { Gift } from '@phosphor-icons/react'
import { NextLayout } from '../../components/templates/NextLayout'
import { useAuth } from '../../contexts/AuthContext'
import api from '../../lib/api'
import { User } from '../../@types/User'
import { translateErrorCode } from '../../lib/translateErrorCode'
import Link from 'next/link'
import { NextAvatarWithRipple } from '../../components/molecules/NextAvatarWithRipple'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'

const NextDatingCards = dynamic(
  () => import('../../components/organisms/NextDatingCards'),
  { ssr: false },
)

export default function Discover() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { user, emailVerification } = useAuth()
  const toast = useToast()
  const [users, setUsers] = useState<User[] | undefined>(undefined)
  const router = useRouter()

  const fetchUsers = useCallback(async () => {
    if (user) {
      const response = await api.get('users/core', {
        headers: {
          Authorization: user.accessToken,
        },
      })
      setUsers(response.data)
    }
  }, [user])

  // async function handleEmailVerification() {
  //   try {
  //     await emailVerification()
  //     toast({
  //       title: `Email de verificaçao enviado para ${user?.email}.`,
  //       description: 'Verifique também a caixa de spam.',
  //       status: 'success',
  //       duration: 9000,
  //       isClosable: true
  //     })
  //   } catch (error) {
  //     toast({
  //       title: 'Tivemos um problema ao enviar o email de verificação.',
  //       description: translateErrorCode((error as Error).message),
  //       status: 'error',
  //       duration: 9000,
  //       isClosable: true
  //     })
  //   }
  // }

  const updateLastSignInTime = useCallback(async () => {
    if (!user) return
    const lastDiscoverAt = String(Date.now())
    try {
      const updateUser = {
        metadata: { ...user.metadata, lastDiscoverAt },
      }
      await api.put('/users', updateUser, {
        headers: {
          Authorization: user.accessToken,
        },
      })
    } catch (error) {
      console.error(error)
    }
  }, [user])

  useEffect(() => {
    updateLastSignInTime()
  }, [updateLastSignInTime])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  const fetchUserEmail = useCallback(async () => {
    if (!user) return
    if (!user.emailVerified) {
      onOpen()
    } else {
      onClose()
    }
  }, [onClose, onOpen, user])

  useEffect(() => {
    fetchUserEmail()
  }, [fetchUserEmail])

  if (user && user.photoCount < 3) {
    toast({
      title: 'Adicione mais fotos!',
      description:
        'Para participar e descobrir matches, é necessário adicionar pelo menos 3 fotos ao seu perfil.',
      status: 'warning',
      duration: 5000,
      isClosable: true,
    })
    router.push('/profile/edit')
    return <></>
  }

  return (
    <NextLayout title="Matches">
      {/* {user && user.uid && !user.isProfileVerified && !user.verificationImageUrl && (
        <Link href={'/profile/selfie'}>
          <Alert status="error" justifyContent={'center'}>
            <AlertIcon />
            <Text fontWeight={'medium'} decoration={'underline'}>
              Atenção: Verifique seu perfil para garantir uma experiência segura e autêntica! ✅🔒
            </Text>
          </Alert>
        </Link>
      )}
      {user && user.uid && !user.isProfileVerified && user.verificationImageUrl && (
        <Alert status="info" justifyContent={'center'}>
          <AlertIcon />
          <Text fontWeight={'medium'}>
            Verificando imagem de perfil. A aprovação será realizada em breve. 🔍
          </Text>
        </Alert>
      )} */}
      {users === undefined && user && (
        <Center flexDirection={'column'} h="500px">
          <NextAvatarWithRipple avatarSrc={user.photos ? user.photos[0] : ''} />
        </Center>
      )}
      {user && user.uid && users && users.length === 0 && (
        <Center flexDirection={'column'} h="500px">
          <NextAvatarWithRipple avatarSrc={user.photos ? user.photos[0] : ''} />
          <Text textAlign={'center'}>
            Acabaram os Matches em potencial. Que tal convidar mais pessoas?
          </Text>
          <Box pt={4}>
            <Link href={'/invite'}>
              <Button
                bg={'next-green.400'}
                color={'black'}
                _hover={{
                  bg: 'next-green.200',
                }}
              >
                <Gift size={32} weight="fill" />
                <Text ms={2}>Indique e ganhe</Text>
              </Button>
            </Link>
          </Box>
        </Center>
      )}
      {user && user.uid && users && users.length > 0 && (
        <NextDatingCards items={users} />
      )}
      {/* <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Verificar email</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            pb={6}
          >{`Por favor verifique seu email. Iremos enviar um email para ${user?.email}. Depois é só clicar no link dentro desse email. Veja também sua caixa de spam. `}</ModalBody>
          <ModalFooter>
            <Button
              colorScheme="green"
              mr={3}
              onClick={() => {
                handleEmailVerification()
                onClose()
              }}
            >
              Verificar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
    </NextLayout>
  )
}
