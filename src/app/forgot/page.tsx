'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '../../contexts/AuthContext'

import {
  Input,
  FormControl,
  FormLabel,
  useToast,
  Button,
  Flex,
  Text,
  VStack,
  Container,
} from '@chakra-ui/react'
import { translateErrorCode } from '@/lib/translateErrorCode'
import { NextLayout } from '@/components/templates/NextLayout'

export default function Forgot() {
  const router = useRouter()
  const { passResetWithEmail } = useAuth()
  const toast = useToast()
  const [textSenha, setTextSenha] = useState('Recuperar senha')
  const [email, setEmail] = useState('')

  const [authorizing, setAuthorizing] = useState<boolean>(false)

  const sendPasswordReset = (email: string) => {
    setAuthorizing(true)
    passResetWithEmail(email)
      .then(async () => {
        setTextSenha('Link para redefinir a senha enviado')
        toast({
          title: 'Verifique seu email',
          description: 'Enviamos o link para redefinir a senha.',
          status: 'success',
          duration: 12000,
          isClosable: true,
        })
        router.push('/login')
      })
      .catch((error: Error) => {
        toast({
          title: 'Ops! Encontramos um obstáculo.',
          description: translateErrorCode((error as Error).message),
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      })
    setAuthorizing(false)
  }

  return (
    <NextLayout title={'NextClub | Recuperar senha'} isRouterProtect={false}>
      <Container minH={'50vh'} maxW="container.md" py={6}>
        <VStack
          w={['100%', '50%']}
          minW={['auto', '500px']}
          spacing={8}
          align="stretch"
          placeSelf="center"
        >
          <Text color="gray.600" fontSize="2xl">
            {textSenha}
          </Text>
          <VStack spacing={6}>
            <FormControl isRequired>
              <FormLabel htmlFor="email">Email:</FormLabel>
              <Input
                w={['100%', '500px']}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="emailAddress"
                value={email}
                aria-describedby="email-helper-text"
                placeholder="Digite seu email cadastrado"
              />
            </FormControl>
          </VStack>
          <Flex>
            <Button
              bg={'next-primary'}
              isDisabled={email === ''}
              onClick={() => sendPasswordReset(email)}
              isLoading={authorizing}
            >
              Enviar
            </Button>
          </Flex>
        </VStack>
      </Container>
    </NextLayout>
  )
}
