import Stripe from 'stripe'
import { stripe } from '../../../lib/stripe'

describe('stripe', () => {
  it('should initialize Stripe with the correct secret key', () => {
    expect(stripe).toBeInstanceOf(Stripe)
  })

  it('should throw an error if Stripe secret key is not defined', () => {
    const originalStripeSecretKey = process.env.STRIPE_SECRET_KEY
    process.env.STRIPE_SECRET_KEY = ''

    jest.resetModules()

    expect(() => {
      jest.isolateModules(() => {
        require('../../../lib/stripe')
      })
    }).toThrow('Stripe secret key is not defined')

    process.env.STRIPE_SECRET_KEY = originalStripeSecretKey
  })
})
