// app/api/checkout/route.ts

import { NextRequest, NextResponse } from 'next/server'
import { createCheckoutSession } from '../../../services/checkoutService'

export async function POST(request: NextRequest) {
  try {
    const { priceId } = await request.json()

    if (!priceId) {
      return NextResponse.json(
        { message: 'Preço não encontrado' },
        { status: 400 },
      )
    }

    const checkoutUrl = await createCheckoutSession(priceId)

    return NextResponse.json({ checkoutUrl }, { status: 201 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: 'Ocorreu um erro inesperado' },
      { status: 500 },
    )
  }
}
