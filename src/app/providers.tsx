// app/providers.tsx
'use client'
import React from 'react'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { ApolloProvider } from '@apollo/client'
import { theme } from '../theme'
import { AuthContextProvider } from '@/contexts/AuthContext'
import { client } from '@/lib/apollo'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthContextProvider>
      <ApolloProvider client={client}>
        <CacheProvider>
          <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </CacheProvider>
      </ApolloProvider>
    </AuthContextProvider>
  )
}
