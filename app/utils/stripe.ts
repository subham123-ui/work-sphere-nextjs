import Stripe from 'stripe'

export const stripe = new Stripe(process.env.SECRET_STRIPE_KEY as string, {
  apiVersion: '2025-02-24.acacia',
  typescript: true,
})