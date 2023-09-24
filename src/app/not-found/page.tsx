'use client'
import { NextLayout } from '@/components/templates/NextLayout'
import Link from 'next/link'
import { Container, Heading, Text, Stack } from '@chakra-ui/react'
import { colors } from '@/theme/colors'

export default function NotFound() {
  return (
    <NextLayout>
      <Container maxW="container.md" py={6}>
        <Stack gap={4} textAlign={'center'}>
          <Heading>Esta página não está disponível.</Heading>
          <Text>
            O link em que você clicou pode não estar funcionando, ou a página
            pode ter sido removida.
          </Text>
          <Link
            href={'/discover'}
            style={{ color: String(colors['next-blue'][400]) }}
          >
            Voltar para o NeXTCLUB.
          </Link>
        </Stack>
      </Container>
    </NextLayout>
  )
}
