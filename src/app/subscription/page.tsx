'use client'
import { NextLayout } from '../../components/templates/NextLayout'
import { NextThreeTierPricing } from '../../components/organisms/NextThreeTierPricing'
import { Container } from '@chakra-ui/react'
import { layout } from '../../data'
import { useCallback, useEffect, useState } from 'react'
import api from '@/lib/api'

export interface Product {
  id: string
  name: string
  imageUrl: string
  price: string
  metadata: Record<string, string>
  description: string | null
  isMostPopular: boolean
  defaultPriceId: string
}

export default function Subscription() {
  const [products, setProducts] = useState([])

  const fetchProducts = useCallback(async () => {
    const response = await api.get('products')
    setProducts(response.data)
  }, [])

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  return (
    <NextLayout title={`Assinaturas | ${layout.title}`}>
      <Container maxW="container.md" pb={16} pt={4}>
        <NextThreeTierPricing products={products} />
      </Container>
    </NextLayout>
  )
}
