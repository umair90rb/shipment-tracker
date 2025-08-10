export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server'
import Tokens from 'csrf'

const tokens = new Tokens()

export async function GET(request: NextRequest) {
  try {
    // Get Origin or Referer
    const referer = request.headers.get('referer') || '';

    // Your allowed site URL
    const allowedDomain = process.env.NODE_ENV === 'production' ? 'https://tcstracking.xyz' : 'http://localhost:3000' ;

    // Check if request comes from your website
    if (!referer.startsWith(allowedDomain)) {
      return NextResponse.json(
        { error: 'Forbidden - invalid origin' },
        { status: 403 }
      )
    }

    // Validate CSRF token
    const csrfToken = request.headers.get('x-csrf-token')
    const csrfSecret = request.cookies.get('csrf-secret')?.value
    
    if (!csrfToken || !csrfSecret) {
      return NextResponse.json(
        { error: 'CSRF token missing' },
        { status: 403 }
      )
    }
    
    if (!tokens.verify(csrfSecret, csrfToken)) {
      return NextResponse.json(
        { error: 'Invalid CSRF token' },
        { status: 403 }
      )
    }

    const { searchParams } = new URL(request.url)
    const consignmentNumber = searchParams.get('consignee')
    
    if (!consignmentNumber) {
      return NextResponse.json(
        { error: 'Consignment number is required' },
        { status: 400 }
      )
    }

    const apiUrl = process.env.TCS_TRACKING_API_URL
    const authToken = process.env.TCS_API_HEADER_AUTH_TOKEN
    
    if (!apiUrl || !authToken) {
      return NextResponse.json(
        { error: 'API configuration missing' },
        { status: 500 }
      )
    }

    const response = await fetch(`${apiUrl}?consignee=${consignmentNumber}`, {
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json',
      },
      method: 'GET',
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    
    return NextResponse.json(data)
  } catch (error) {
    console.error('Tracking API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch tracking information' },
      { status: 500 }
    )
  }
} 