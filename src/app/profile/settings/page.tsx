'use client'
import { useRef, useState } from 'react'
import {
  Box,
  Container,
  useColorMode,
  Text,
  Flex,
  useToast,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  Link,
  Center,
} from '@chakra-ui/react'
import {
  ArrowForwardIcon,
  SunIcon,
  MoonIcon,
  DeleteIcon,
} from '@chakra-ui/icons'
import { CreditCard } from '@phosphor-icons/react'
import { NextClaimUsernameForm } from '../../../components/molecules/NextClaimUsernameForm'
import { NextLayout } from '../../../components/templates/NextLayout'
import { NextimeFooter } from '../../../components/organisms/NextimeFooter'
import { NextMobileMenu } from '../../../components/organisms/NextMobileMenu'
import { translateErrorCode } from '../../../lib/translateErrorCode'
import { useAuth } from '../../../contexts/AuthContext'
import { usePathname, useRouter } from 'next/navigation'
import packageInfo from '../../../../package.json'

export default function Settings() {
  const pathname = usePathname()
  const version = packageInfo.version
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const passwordRef = useRef<HTMLInputElement>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { user, authDeleteUser, logout } = useAuth()
  const toast = useToast()
  const router = useRouter()

  async function handleLogout() {
    try {
      await logout()
    } catch (error) {
      toast({
        title: 'Ops! Encontramos um obstáculo.',
        description: translateErrorCode((error as Error).message),
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }
  }

  async function handleSubmit() {
    if (user && !(pathname === '/') && !pathname?.includes('blog')) {
      handleLogout()
    } else {
      await router.push('/login')
    }
  }

  async function handleDeleteUser() {
    setIsLoading(true)
    try {
      if (passwordRef.current?.value) {
        await authDeleteUser(passwordRef.current.value)
      }
      toast({
        title: 'Estamos tristes 😞',
        description: 'Sua conta foi deletada.',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    } catch (error) {
      toast({
        title: 'Tivemos um problema ao deletar o usuário.',
        description: translateErrorCode((error as Error).message),
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }
    setIsLoading(false)
    onClose()
  }
  return (
    <NextLayout title={'Configurações'}>
      <Container
        display={'flex'}
        flexDirection={'column'}
        maxW="container.sm"
        pb={[16]}
        gap={4}
        pt={4}
      >
        <NextClaimUsernameForm />
        <Flex alignItems={'center'}>
          <Button
            width={'100%'}
            colorScheme="gray"
            aria-label="Definir tema"
            onClick={toggleColorMode}
          >
            {colorMode === 'light' ? (
              <Flex gap={2}>
                <MoonIcon color={'black'} /> Ativar modo escuro
              </Flex>
            ) : (
              <Flex gap={2}>
                <SunIcon color={'white'} /> Desativar modo escuro
              </Flex>
            )}
          </Button>
        </Flex>
        <Box>
          <Link href={'/subscription'}>
            <Button width={'100%'} colorScheme={'gray'}>
              <Flex gap={2}>
                <CreditCard /> Gerenciar plano
              </Flex>
            </Button>
          </Link>
        </Box>
        <Box>
          <Button width={'100%'} colorScheme={'red'} onClick={onOpen}>
            <Flex gap={2}>
              <DeleteIcon /> Deletar conta
            </Flex>
          </Button>
        </Box>
        <Box>
          <Button
            width={'100%'}
            colorScheme={'gray'}
            onClick={() => handleSubmit()}
          >
            <Flex gap={2}>
              <ArrowForwardIcon /> Sair da Conta
            </Flex>
          </Button>
        </Box>
        <Center mt={4}>v{version}</Center>
      </Container>
      <Box display={['none', 'block']}>
        <NextimeFooter />
      </Box>
      <Box display={['block', 'none']}>
        <NextMobileMenu />
      </Box>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Deletar sua conta</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Text pb={2}>
              Tem certeza que quer deletar sua conta? Todas as suas informações
              serão deletadas!!
            </Text>
            <FormControl>
              <FormLabel>Senha:</FormLabel>
              <Input
                type={'password'}
                ref={passwordRef}
                placeholder="Digite sua senha para confirmar"
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              isLoading={isLoading}
              colorScheme="red"
              mr={3}
              onClick={() => handleDeleteUser()}
            >
              DELETAR
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </NextLayout>
  )
}
