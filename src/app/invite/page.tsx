'use client'
import {
  Box,
  Container,
  Text,
  Flex,
  Skeleton,
  Heading,
  Button,
  Stack,
} from '@chakra-ui/react'
import { NextLayout } from '../../components/templates/NextLayout'
import { useAuth } from '../../contexts/AuthContext'
import {
  FaWhatsapp,
  FaFacebookF,
  FaTelegramPlane,
  FaTwitter,
} from 'react-icons/fa'
import Link from 'next/link'
import { items, layout } from '../../data'

export default function Settings() {
  const { user } = useAuth()

  const validatedIndications = user?.guests?.length ?? 0

  return (
    <NextLayout title={'Indique e ganhe'}>
      <Container maxW="container.md" pb={16} pt={4}>
        <Box mb={4}>
          <Heading fontSize={'4xl'} as="h1" size="md" pb={4}>
            Indique e ganhe
          </Heading>
          <Text fontSize={'lg'} pb={4}>
            Para cada pessoa indicada, ganhe{' '}
            <Link href={'/subscription'}>
              <Text
                as="span"
                color={'next-primary'}
                decoration={'underline'}
                fontWeight="bold"
              >
                +1 mês do plano Plus
              </Text>
            </Link>
            , sem limite de indicações!
          </Text>
          <Text fontSize={'sm'} pb={2}>
            Compartilhe o link abaixo com as pessoas que você quer indicar
          </Text>
          {!user && <Skeleton height="20px" />}
          {user && (
            <Box
              display={['block', 'flex']}
              alignItems={'center'}
              p={4}
              rounded={'lg'}
              bgColor={'gray.700'}
              color={'white'}
            >
              <Text
                fontSize={'sm'}
              >{`${items.layout.url}/invite/${user.uid}`}</Text>
            </Box>
          )}
        </Box>
        {user && (
          <>
            <Text fontSize={'sm'} pb={2}>
              Compartilhe agora
            </Text>
            <Flex pb={4} gap={2}>
              <Link
                href={`https://wa.me/?text=Ei,%20descobri%20um%20aplicativo%20sensacional%20que%20usa%20o%20ChatGPT-4%20para%20encontrar%20pessoas%20com%20interesses%20parecidos,%20seja%20para%20namoro,%20amizade%20ou%20networking!%20Vem%20experimentar%20e%20ampliar%20seu%20círculo%20de%20conexões%20autênticas!%20%0A%0A${items.layout.url}/invite/${user.uid}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>
                  <FaWhatsapp size={32} color={'green'} />
                </Button>
              </Link>
              <Link
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  `${items.layout.url}/invite/${user.uid}`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>
                  <FaFacebookF size={32} color={'#1877F2'} />
                </Button>
              </Link>
              <Link
                href={`https://t.me/share/url?url=${encodeURIComponent(
                  `${items.layout.url}/invite/${user.uid}`,
                )}&text=Ei,%20descobri%20um%20aplicativo%20sensacional%20que%20usa%20o%20ChatGPT-4%20para%20encontrar%20pessoas%20com%20interesses%20parecidos,%20seja%20para%20namoro,%20amizade%20ou%20networking!%20Vem%20experimentar%20e%20ampliar%20seu%20círculo%20de%20conexões%20autênticas!`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>
                  <FaTelegramPlane size={32} color={'#0088CC'} />
                </Button>
              </Link>
              <Link
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  `${items.layout.url}/invite/${user.uid}`,
                )}&text=Ei,%20descobri%20um%20aplicativo%20sensacional%20que%20usa%20o%20ChatGPT-4%20para%20encontrar%20pessoas%20com%20interesses%20parecidos,%20seja%20para%20namoro,%20amizade%20ou%20networking!%20Vem%20experimentar%20e%20ampliar%20seu%20círculo%20de%20conexões%20autênticas!`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>
                  <FaTwitter size={32} color={'#1DA1F2'} />
                </Button>
              </Link>
            </Flex>
          </>
        )}
        <Stack
          direction={['column', 'row']}
          gap={1}
          alignItems={'center'}
          p={2}
          rounded={'lg'}
          bgColor={'gray.700'}
          color={'white'}
        >
          <Box textAlign={'center'}>
            <Heading as={'span'} fontSize={'5xl'} color={'next-secondary'}>
              {validatedIndications}
            </Heading>
            <Text as={'h3'} fontWeight={'bold'}>
              Indicações
            </Text>
          </Box>
          <Text as={'p'} textAlign={['center', 'left']}>
            Uma indicação é considerada válida quando a pessoa que você indicou
            se cadastra no site utilizando o seu link de convite.
          </Text>
        </Stack>
        <Box mt={4}>
          <Link
            href={`${layout.socialNetwork}Eu gostaria de saber mais sobre a campanha Indique e ganhe.`}
            target={'_blank'}
            aria-label="Faça um orçamento pelo whatsapp"
          >
            <Text
              fontSize={'sm'}
              pb={4}
              decoration={'underline'}
              color={'next-primary'}
            >
              Em caso de dúvidas, entre em contato aqui.
            </Text>
          </Link>
        </Box>
      </Container>
    </NextLayout>
  )
}
