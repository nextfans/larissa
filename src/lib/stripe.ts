import Stripe from 'stripe'

export function createStripeInstance(secretKey: string | undefined): Stripe {
  return new Stripe(secretKey || '', {
    apiVersion: '2023-08-16',
    appInfo: {
      name: 'NextClub',
    },
  })
}

const stripeSecretKey = process.env.STRIPE_SECRET_KEY

if (!stripeSecretKey) {
  throw new Error('Stripe secret key is not defined')
}

export const stripe = createStripeInstance(stripeSecretKey)
