import { NextResponse } from 'next/server'
import Tokens from 'csrf'

const tokens = new Tokens()

export async function GET() {
  try {
    // Generate a new secret for this session
    const secret = tokens.secretSync()
    
    // Generate a token using the secret
    const token = tokens.create(secret)
    
    // Set the secret in a secure, httpOnly cookie
    const response = NextResponse.json({ token })
    
    response.cookies.set('csrf-secret', secret, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24, // 24 hours
      path: '/'
    })
    
    return response
  } catch (error) {
    console.error('CSRF token generation error:', error)
    return NextResponse.json(
      { error: 'Failed to generate CSRF token' },
      { status: 500 }
    )
  }
} 