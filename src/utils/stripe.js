import Stripe from 'stripe'

export const stripe = Stripe(process.env.SRTIPE_SK)

export const formatAmount = (amount) => `₹ ${amount / 100}`