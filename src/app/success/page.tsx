import { NextLayout } from '../../components/templates/NextLayout'
import Stripe from 'stripe'
import { stripe } from '../../lib/stripe'
import { Container, Text } from '@chakra-ui/react'
import Image from 'next/image'

export default async function Success({
  params: { sessionId },
}: {
  params: { sessionId: string }
}) {
  if (!sessionId) {
    return {
      redirect: {
        destination: 'matches',
        permanent: false,
      },
    }
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details?.name
  const product = session.line_items?.data[0].price?.product as Stripe.Product

  return (
    <NextLayout>
      <Container maxW="container.md" pb={16} pt={4}>
        <Text>{customerName}</Text>
        <Text>{product.name}</Text>
        <Image width={120} height={110} alt="" src={product.images[0]} />
      </Container>
    </NextLayout>
  )
}
