// app/signup/page.tsx

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
  useToast,
  useColorModeValue,
  Checkbox,
  FormErrorMessage,
  RadioGroup,
  Radio,
  CheckboxGroup,
} from '@chakra-ui/react'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/navigation'
import { useAuth } from '../../contexts/AuthContext'
import { translateErrorCode } from '../../lib/translateErrorCode'
import api from '../../lib/api'
import { GenderIdentity, User } from '../../@types/User'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { layout } from '../../data'

const searchFormSchema = z.object({
  email: z.string().email({ message: 'Endereço de e-mail inválido' }),
  password: z
    .string()
    .min(6, { message: 'Digite uma senha de no min 6 caracteres' }),
  name: z.string().min(3, { message: 'Nome deve ter no min 3 caracteres' }),
  wantReceiveEmail: z.boolean(),
  phoneNumber: z.string(),
  dateOfBirth: z
    .string()
    .nonempty({ message: 'Data de nascimento é obrigatória' })
    .refine(
      (date) => {
        const birthDate = new Date(date)
        const today = new Date()
        const eighteenYearsAgo = new Date(
          today.getFullYear() - 18,
          today.getMonth(),
          today.getDate(),
        )
        return birthDate <= eighteenYearsAgo
      },
      { message: 'Você deve ter pelo menos 18 anos de idade' },
    ),
  genderIdentity: z
    .string()
    .nonempty({ message: 'Você precisa escolher uma opção' }),
  seeking: z.array(
    z.union([
      z.literal('Homem'),
      z.literal('Mulher'),
      z.literal('Não-binário'),
      z.literal('Outro'),
    ]),
  ),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export default function Signup() {
  const router = useRouter()
  const bgColor = useColorModeValue('gray.50', 'gray.800')
  const color = useColorModeValue('black', 'white')
  const bgBox = useColorModeValue('white', 'gray.700')
  const { user, signup, updateUser, fetchUser } = useAuth()
  const toast = useToast()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    watch,
    setValue,
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      genderIdentity: undefined,
    },
  })

  async function handleSignup(data: SearchFormInputs) {
    const idWhoInvited = await localStorage.getItem('idWhoInvited')
    try {
      const response = await signup(data.email, data.password)
      await updateUser(response.user, data.name)
      const fullName = data.name.split(' ')
      const firstName = fullName[0]
      const lastName = fullName[fullName.length - 1]
      if (response.user) {
        const myInvitationId = response.user.uid
        const newUser: User = {
          bio: '',
          dateOfBirth: data.dateOfBirth,
          displayName: response.user.displayName,
          email: response.user.email,
          firstName,
          genderIdentity: data.genderIdentity,
          seeking: data.seeking,
          hasSentEmail: false,
          idWhoInvited,
          isProfileVerified: false,
          lastName,
          metadata: response.user.metadata,
          username: myInvitationId,
          myInvitationId,
          phoneNumber: data.phoneNumber,
          photoURL: '',
          photos: [],
          photoCount: 0,
          uid: response.user.uid,
          wantReceiveEmail: data.wantReceiveEmail,
        } as unknown as User
        await fetchUser(response.user)
        await api.post('/users', newUser, {
          headers: {
            Authorization: response.user.accessToken,
          },
        })
        if (idWhoInvited) {
          await api.put(
            '/users/updateIdInvited',
            {
              idWhoInvited,
            },
            {
              headers: {
                Authorization: response.user.accessToken,
              },
            },
          )
          localStorage.removeItem('idWhoInvited')
        }
        toast({
          title: 'Bem-vindo(a) ao NextClub!',
          description:
            'Sua conta foi criada com sucesso! Agora, vamos personalizar seu perfil para você começar a explorar.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
        router.push('/profile/edit')
      }
    } catch (error) {
      toast({
        title: 'Parece que encontramos um obstáculo...',
        description: translateErrorCode((error as Error).message),
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }
  }
  if (user && user.dateOfBirth) {
    router.push('/profile/edit')
    return <></>
  } else {
    return (
      <>
        <Head>
          <title>{`Cadastro | ${layout.siteName}`}</title>
        </Head>
        <Flex
          minH={'100vh'}
          align={'center'}
          justify={'center'}
          bg={bgColor}
          color={color}
        >
          <Stack spacing={4} mx={'auto'} maxW={'lg'} pt={6} pb={1} px={1}>
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
              <Heading as="h1" fontSize={'xl'} color={'gray.600'}>
                {`Crie a sua conta no ${layout.siteName}`}
              </Heading>
              <Text fontSize={'lg'} color={'gray.600'}>
                Já tem uma conta?{' '}
                <Link href="/login">
                  <Text as="span" fontSize={'lg'} color={'next-primary'}>
                    ENTRE
                  </Text>
                </Link>
                👉
              </Text>
            </Stack>
            <Box minW="350px" rounded={'lg'} bg={bgBox} boxShadow={'lg'} p={8}>
              <Stack spacing={4}>
                <FormControl id="name" isInvalid={!!errors.name}>
                  <FormLabel htmlFor="name">Nome *</FormLabel>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Digite seu nome completo"
                    {...register('name')}
                  />
                  {errors.name && (
                    <FormErrorMessage>{errors.name.message}</FormErrorMessage>
                  )}
                </FormControl>
                <FormControl id="email" isInvalid={!!errors.email}>
                  <FormLabel htmlFor="email">E-mail *</FormLabel>
                  <Input
                    type="email"
                    id="emailAddress"
                    aria-describedby="email-helper-text"
                    placeholder="Seu email será verificado"
                    {...register('email')}
                  />
                  {errors.email && (
                    <FormErrorMessage>{errors.email.message}</FormErrorMessage>
                  )}
                </FormControl>
                <FormControl id="dateOfBirth" isInvalid={!!errors.dateOfBirth}>
                  <FormLabel htmlFor="dateOfBirth">
                    Data de Nascimento *
                  </FormLabel>
                  <Input
                    type="date"
                    id="dateOfBirth"
                    placeholder="DD/MM/AAAA"
                    {...register('dateOfBirth')}
                  />
                  {errors.dateOfBirth && (
                    <FormErrorMessage>
                      {errors.dateOfBirth.message}
                    </FormErrorMessage>
                  )}
                </FormControl>
                <FormControl id="password" isInvalid={!!errors.password}>
                  <FormLabel htmlFor="password">Senha *</FormLabel>
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
                <FormControl
                  id="genderIdentity"
                  isInvalid={!!errors.genderIdentity}
                >
                  <FormLabel htmlFor="genderIdentity">
                    Me identifico como *
                  </FormLabel>
                  <RadioGroup
                    defaultValue={undefined}
                    onChange={(value) => {
                      setValue('genderIdentity', value as GenderIdentity)
                    }}
                  >
                    <Stack direction="column">
                      <Radio value={'Mulher'}>Mulher</Radio>
                      <Radio value={'Homem'}>Homem</Radio>
                      <Radio value={'Não-binário'}>Não-binário</Radio>
                      <Radio value={'Outro'}>Outro</Radio>
                    </Stack>
                  </RadioGroup>
                  {errors.genderIdentity && (
                    <FormErrorMessage>
                      {errors.genderIdentity.message}
                    </FormErrorMessage>
                  )}
                </FormControl>
                <FormControl id="seeking" isInvalid={!!errors.seeking}>
                  <FormLabel htmlFor="seeking">Estou procurando *</FormLabel>
                  <CheckboxGroup
                    value={watch('seeking')}
                    onChange={(vals) => {
                      const seeking: GenderIdentity[] = vals.filter((val) =>
                        ['Homem', 'Mulher', 'Não-binário', 'Outro'].includes(
                          val as GenderIdentity,
                        ),
                      ) as GenderIdentity[]
                      setValue('seeking', seeking)
                    }}
                  >
                    <Stack direction="column">
                      <Checkbox value={'Mulher'}>Mulher</Checkbox>
                      <Checkbox value={'Homem'}>Homem</Checkbox>
                      <Checkbox value={'Não-binário'}>Não-binário</Checkbox>
                      <Checkbox value={'Outro'}>Outro</Checkbox>
                    </Stack>
                  </CheckboxGroup>
                  {errors.seeking && (
                    <FormErrorMessage>
                      {errors.seeking.message}
                    </FormErrorMessage>
                  )}
                </FormControl>
                <FormControl id="phoneNumber">
                  <FormLabel htmlFor="phoneNumber">Whatsapp</FormLabel>
                  <Input
                    type="number"
                    id="phoneNumber"
                    placeholder="+55(00) 0 0000-0000"
                    {...register('phoneNumber')}
                  />
                </FormControl>
                <Text fontSize="xs">
                  Ao enviar este formulário: Você concorda com o processamento
                  dos dados pessoais submetidos de acordo com a{' '}
                  <Link
                    href={'/politicas_de_privacidade.pdf'}
                    target={'_blank'}
                  >
                    <Text
                      as={'span'}
                      decoration={'underline'}
                      color={'next-blue.400'}
                    >
                      Política de Privacidade
                    </Text>
                  </Link>{' '}
                  e com os{' '}
                  <Link
                    href={'/politicas_de_privacidade.pdf'}
                    target={'_blank'}
                  >
                    <Text
                      as={'span'}
                      decoration={'underline'}
                      color={'next-blue.400'}
                    >
                      Termos de Uso
                    </Text>
                  </Link>{' '}
                  do aplicativo.
                </Text>
                <FormControl id="wantReceiveEmail">
                  <Checkbox
                    id="wantReceiveEmail"
                    colorScheme="orange"
                    defaultChecked
                    {...register('wantReceiveEmail')}
                  >
                    <Text fontSize="xs">
                      Você concorda em receber informações do aplicativo
                      relacionadas a nossos serviços, eventos e promoções. Você
                      pode cancelar sua inscrição a qualquer momento, seguindo
                      as instruções nas comunicações recebidas.
                    </Text>
                  </Checkbox>
                </FormControl>
                <Stack spacing={10}>
                  <Button
                    bg={'next-primary'}
                    color={'white'}
                    _hover={{
                      bg: 'blue.500',
                    }}
                    onClick={handleSubmit(handleSignup)}
                    disabled={isSubmitting}
                  >
                    CADASTRAR
                  </Button>
                </Stack>
                <Text fontSize="xs">
                  Ao enviar este formulário: Você concorda com o processamento
                  dos dados pessoais submetidos de acordo com a Política de
                  Privacidade da NeXTIME, incluindo a transferência de dados.
                </Text>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </>
    )
  }
}
