'use client'
import React from 'react'
import { NextLayout } from '../../components/templates/NextLayout'
import { layout } from '../../data'
import { Container } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

const NextPreferencesCards = dynamic(
  () => import('../../components/organisms/NextPreferencesCards'),
  { ssr: false },
)

export default function Preferences() {
  return (
    <NextLayout title={`${layout.title} Preferências`}>
      <Container maxW={'md'} pt={3}>
        <NextPreferencesCards />
      </Container>
    </NextLayout>
  )
}
