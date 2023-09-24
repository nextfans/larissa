import { stripe } from '../lib/stripe'

export async function createCheckoutSession(priceId: string): Promise<string> {
  if (!priceId) {
    throw new Error('Invalid priceId')
  }

  const successUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/subscription`

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'subscription',
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
  })

  if (!checkoutSession.url) {
    throw new Error('Failed to create checkout session')
  }

  return checkoutSession.url
}
