'use client'
import { NextLayout } from '../../components/templates/NextLayout'
import {
  Avatar,
  Box,
  Container,
  HStack,
  SimpleGrid,
  Text,
  VStack,
  useToast,
} from '@chakra-ui/react'
import { CallApi } from '../../lib/CallApi'
import { useAuth } from '../../contexts/AuthContext'
import { useEffect, useState } from 'react'
import { User } from '../../@types/User'
import Link from 'next/link'
import { ShareFat } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'
import { translateErrorCode } from '@/lib/translateErrorCode'

export default function Matches() {
  const { user } = useAuth()
  const [matches, setMatches] = useState<User[] | null>(null)
  const toast = useToast()
  const router = useRouter()

  useEffect(() => {
    async function fetchMatches() {
      try {
        const { data } = await CallApi({
          method: 'GET',
          url: 'users/matches',
          user,
        })
        setMatches(data)
      } catch (error) {
        console.error('Erro ao buscar matches', error)
        toast({
          title: 'Ops! Encontramos um obstáculo.',
          description: translateErrorCode((error as Error).message),
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      }
    }

    if (user) {
      fetchMatches()
    }
  }, [router, toast, user])

  if (!user) {
    router.push('/login')
    return <></>
  }

  if (user.photoCount < 3) {
    toast({
      title: 'Adicione mais fotos!',
      description:
        'Para participar e descobrir matches, é necessário adicionar pelo menos 3 fotos ao seu perfil.',
      status: 'warning',
      duration: 5000,
      isClosable: true,
    })
    router.push('/profile/edit')
  }

  if (matches && matches.length === 0 && user && user.photoCount >= 3) {
    toast({
      title: 'Nada por aqui ainda...',
      description: 'Comece a explorar e encontre seu match perfeito!',
      status: 'info',
      duration: 5000,
      isClosable: true,
    })
    router.push('/discover')
  }

  if (matches && matches.length > 0) {
    return (
      <NextLayout>
        <Container maxW="container.lg" pb={60}>
          <VStack align="start">
            <Text fontSize="2xl" my={5}>
              Seus Matches
            </Text>
            {matches && (
              <SimpleGrid columns={1} spacing={5}>
                {matches.map((match) => (
                  <Link key={match.uid} href={`/${match.uid}`}>
                    <HStack spacing={3}>
                      <Avatar
                        size="lg"
                        name={match.firstName}
                        src={match.photos[0]}
                      />
                      <Box>
                        <Text fontSize="lg" fontWeight="bold">
                          {match.firstName}
                        </Text>
                      </Box>
                      <Box>
                        <ShareFat size={32} weight="thin" />
                      </Box>
                    </HStack>
                  </Link>
                ))}
              </SimpleGrid>
            )}
          </VStack>
        </Container>
      </NextLayout>
    )
  }
}
