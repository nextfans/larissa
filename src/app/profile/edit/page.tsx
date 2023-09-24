'use client'
import Image from 'next/image'
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  IconButton,
  Input,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
  Textarea,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'
import { PencilSimple } from '@phosphor-icons/react'
import { NextLayout } from '../../../components/templates/NextLayout'
import { useAuth } from '../../../contexts/AuthContext'
import { NextUploadImageProfile } from '../../../components/organisms/NextUploadImageProfile'
import { User } from '../../../@types/User'
import { useCallback, useEffect, useState } from 'react'
import api from '../../../lib/api'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { translateErrorCode } from '../../../lib/translateErrorCode'
import { CloseIcon } from '@chakra-ui/icons'

const createPoolFormSchema = z.object({
  bio: z.string().min(1, { message: 'Sua bio não pode ser vazia' }),
  republica: z.string(),
})

type CreatePoolFormInputs = z.infer<typeof createPoolFormSchema>

export default function ProfileEdit() {
  const { user } = useAuth()
  const [userData, setUserData] = useState<User>({} as User)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [imageIndex, setImageIndex] = useState<string>()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<CreatePoolFormInputs>({
    resolver: zodResolver(createPoolFormSchema),
  })

  const fetchUser = useCallback(async () => {
    if (user) {
      const response = await api.get('users', {
        headers: {
          Authorization: user.accessToken,
        },
      })
      setUserData(response.data)
    }
  }, [user])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  const handleUpdateUserTextBio = useCallback(
    async (data: CreatePoolFormInputs) => {
      setIsLoading(true)
      try {
        const newUser = {
          bio: data.bio,
        }
        if (user) {
          await api.put('/users', newUser, {
            headers: {
              Authorization: user.accessToken,
            },
          })
          toast({
            title: 'Bio atualizada',
            description: 'Seu perfil foi atualizado com sucesso.',
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        }
      } catch (error) {
        toast({
          title: 'Tivemos um problema ao atualizar sua bio.',
          description: translateErrorCode((error as Error).message),
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      }
      setIsLoading(false)
    },
    [toast, user],
  )

  const handleUpdateUserRepublica = useCallback(
    async (data: CreatePoolFormInputs) => {
      setIsLoading(true)
      try {
        const newUser = {
          republica: data.republica,
        }
        if (user) {
          await api.put('/users', newUser, {
            headers: {
              Authorization: user.accessToken,
            },
          })
          toast({
            title: 'República atualizada',
            description: 'Seu perfil foi atualizado com sucesso.',
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        }
      } catch (error) {
        toast({
          title: 'Tivemos um problema ao atualizar sua república.',
          description: translateErrorCode((error as Error).message),
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      }
      setIsLoading(false)
    },
    [toast, user],
  )

  function arrayRemove(arr: string[], value: string | undefined) {
    return arr.filter(function (ele) {
      return ele !== value
    })
  }

  const removeProfileImage = async () => {
    setIsLoading(true)
    let newPhotos = userData.photos

    newPhotos = arrayRemove(newPhotos, imageIndex)
    try {
      const newUser = {
        photos: newPhotos,
        photoCount: newPhotos.length,
      }
      await api.put('/users', newUser, {
        headers: {
          Authorization: user?.accessToken,
        },
      })
      await fetchUser()
    } catch (error) {
      toast({
        title: 'Tivemos um problema ao remover a imagem.',
        description: translateErrorCode((error as Error).message),
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }
    onClose()
    setIsLoading(false)
  }

  const totalPhotos = ['', '', '', '', '', '']
  if (userData.photos) {
    totalPhotos.splice(0, userData.photos.length, ...userData.photos)
  }

  return (
    <NextLayout>
      {!userData.photos && (
        <Stack>
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </Stack>
      )}
      {userData.photos && (
        <Container maxW="container.md" pb={[60, 0]}>
          <Box pt={4}>
            <SimpleGrid columns={[3, 6]} spacing={4} pt={2}>
              {totalPhotos.map((item, index) => (
                <Box key={index}>
                  {!item && (
                    <NextUploadImageProfile
                      setUserData={setUserData}
                      userData={userData}
                      directoryName={'profile'}
                    />
                  )}
                  {item && (
                    <Box>
                      <Image
                        alt={'teste'}
                        style={{
                          maxWidth: '100px',
                          minHeight: '100px',
                          minWidth: '100px',
                        }}
                        src={item}
                        width={100}
                        height={100}
                      />
                      <IconButton
                        mt={-12}
                        onClick={() => {
                          onOpen()
                          setImageIndex(item)
                        }}
                        disabled={isSubmitting}
                        isLoading={isLoading}
                        colorScheme="red"
                        aria-label="Remover imagem"
                        size="xs"
                        icon={<CloseIcon />}
                      />
                    </Box>
                  )}
                </Box>
              ))}
            </SimpleGrid>
          </Box>
          <Box px={2} py={4}>
            <Text fontWeight={'bold'}>República</Text>
            <form onSubmit={handleSubmit(handleUpdateUserRepublica)}>
              <FormControl isInvalid={!!errors.republica}>
                <Input
                  defaultValue={userData.republica}
                  placeholder="Informe o nome da sua república, caso pertença a uma"
                  resize={'none'}
                  {...register('republica')}
                />
                {errors.republica && (
                  <FormErrorMessage>
                    {errors.republica.message}
                  </FormErrorMessage>
                )}
                <Button
                  mt={2}
                  type="submit"
                  disabled={isSubmitting}
                  isLoading={isLoading}
                  width={'100%'}
                  colorScheme={'gray'}
                >
                  <Flex gap={2}>
                    <PencilSimple /> Atualizar república{' '}
                  </Flex>
                </Button>
              </FormControl>
            </form>
          </Box>
          <Box px={2} pb={8}>
            <Text fontWeight={'bold'}>BIOGRAFIA</Text>
            <form onSubmit={handleSubmit(handleUpdateUserTextBio)}>
              <FormControl isInvalid={!!errors.bio}>
                <Textarea
                  h={'180px'}
                  defaultValue={userData.bio}
                  placeholder="Fale um pouco sobre você"
                  resize={'none'}
                  {...register('bio')}
                />
                {errors.bio && (
                  <FormErrorMessage>{errors.bio.message}</FormErrorMessage>
                )}
                <Button
                  mt={2}
                  type="submit"
                  disabled={isSubmitting}
                  isLoading={isLoading}
                  width={'100%'}
                  colorScheme={'gray'}
                >
                  <Flex gap={2}>
                    <PencilSimple /> Atualizar biografia{' '}
                  </Flex>
                </Button>
              </FormControl>
            </form>
          </Box>
        </Container>
      )}
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Tem certeza que deseja excluir essa foto?</ModalHeader>
          <ModalCloseButton />
          <ModalFooter>
            <Button
              colorScheme="red"
              mr={3}
              onClick={() => {
                removeProfileImage()
              }}
            >
              Apagar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </NextLayout>
  )
}
