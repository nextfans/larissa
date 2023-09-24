'use client'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
  FormErrorMessage,
} from '@chakra-ui/react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAuth } from '../../contexts/AuthContext'
import * as z from 'zod'
import { translateErrorCode } from '../../lib/translateErrorCode'
import { useRouter } from 'next/navigation'
import Head from 'next/head'
import { layout } from '../../data'

const searchFormSchema = z.object({
  email: z.string().email({ message: 'Endereço de e-mail inválido' }),
  password: z.string().min(6, { message: 'Senha inválida' }),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export default function Login() {
  const router = useRouter()
  const bgColor = useColorModeValue('gray.50', 'gray.800')
  const color = useColorModeValue('black', 'white')
  const bgBox = useColorModeValue('white', 'gray.700')
  const { user, login } = useAuth()
  const toast = useToast()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })
  async function handleLogin(data: SearchFormInputs) {
    try {
      await login(data.email, data.password)
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
  if (user) {
    router.push('/discover')
    return <></>
  } else {
    return (
      <Box bg={bgColor} color={color}>
        <Head>
          <title>{`Login | ${layout.siteName}`}</title>
        </Head>
        <Flex
          minH={['85vh', '100vh']}
          align={'center'}
          justify={'center'}
          pb={12}
        >
          <Stack spacing={8} mx={'auto'} maxW={'lg'}>
            <Stack align={'center'} textAlign="center">
              <Link href="/">
                <Text
                  as="span"
                  fontSize={'lg'}
                  color={'next-secondary'}
                  decoration={'underline'}
                >
                  Voltar para o site
                </Text>
              </Link>
              <Heading
                fontSize={'xl'}
              >{`Faça login no ${layout.siteName}`}</Heading>
              <Text fontSize={'lg'} color={'gray.600'}>
                Não tem conta?{' '}
                <Link href="/signup">
                  <Text as="span" fontSize={'lg'} color={'next-primary'}>
                    CADASTRE-SE
                  </Text>
                </Link>
                ✌️
              </Text>
            </Stack>
            <Box
              minW="350px"
              maxW="600px"
              rounded={'lg'}
              bg={bgBox}
              boxShadow={'lg'}
              p={8}
            >
              <Stack spacing={4}>
                <FormControl id="email" isInvalid={!!errors.email}>
                  <FormLabel>E-mail</FormLabel>
                  <Input
                    type="email"
                    id="emailAddress"
                    aria-describedby="email-helper-text"
                    placeholder="Digite seu email cadastrado"
                    {...register('email')}
                  />
                  {errors.email && (
                    <FormErrorMessage>{errors.email.message}</FormErrorMessage>
                  )}
                </FormControl>
                <FormControl id="password" isInvalid={!!errors.password}>
                  <FormLabel>Senha</FormLabel>
                  <Input
                    type="password"
                    id="password"
                    placeholder="Digite uma senha"
                    {...register('password')}
                  />
                  {errors.password && (
                    <FormErrorMessage>
                      {errors.password.message}
                    </FormErrorMessage>
                  )}
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'space-between'}
                  >
                    <Link href="/forgot">Esqueceu sua senha?</Link>
                  </Stack>
                  <Button
                    bg={'next-primary'}
                    color={'white'}
                    _hover={{
                      bg: 'blue.500',
                    }}
                    onClick={handleSubmit(handleLogin)}
                    disabled={isSubmitting}
                  >
                    LOGIN
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </Box>
    )
  }
}
