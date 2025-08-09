import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
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