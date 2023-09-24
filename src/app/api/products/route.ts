import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { stripe } from '../../../lib/stripe'

export async function GET() {
  const { data } = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = data
    .filter((product) => product.active)
    .map((product) => {
      const price = product.default_price as Stripe.Price
      let productPriceFormat = ''
      if (price.unit_amount) {
        productPriceFormat = new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount / 100)
      }
      const isMostPopular = Object.values(product.metadata).some(
        (value) => value === 'Mais Vendido',
      )
      return {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: productPriceFormat,
        metadata: product.metadata,
        description: product.description,
        isMostPopular,
        defaultPriceId: price.id,
      }
    })
  return NextResponse.json(products)
}
