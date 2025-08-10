export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import Tokens from 'csrf';

const tokens = new Tokens();

export async function GET(request: NextRequest) {
  try {
    // Get Referer
    const referer = request.headers.get('referer') || '';

    // Allowed domains (non-www and www)
    const allowedDomain =
      process.env.NODE_ENV === 'production'
        ? 'https://tcstracking.xyz'
        : 'http://localhost:3000';
    const allowedDomainWithWWW =
      process.env.NODE_ENV === 'production'
        ? 'https://www.tcstracking.xyz'
        : 'http://www.localhost:3000';

    // Check referer is from allowed domains
    if (
      !referer ||
      (!referer.startsWith(allowedDomain) &&
        !referer.startsWith(allowedDomainWithWWW))
    ) {
      return NextResponse.json(
        { error: 'Forbidden - invalid origin' },
        { status: 403 }
      );
    }

    // Check SameSite cookie (browser must have visited your frontend first)
    // const sessionCookie = request.cookies.get('session-id')?.value;
    // if (!sessionCookie) {
    //   return NextResponse.json(
    //     { error: 'Forbidden - missing session cookie' },
    //     { status: 403 }
    //   );
    // }

    // Validate CSRF token
    const csrfToken = request.headers.get('x-csrf-token');
    const csrfSecret = request.cookies.get('csrf-secret')?.value;

    if (!csrfToken || !csrfSecret) {
      return NextResponse.json(
        { error: 'CSRF token missing' },
        { status: 403 }
      );
    }

    if (!tokens.verify(csrfSecret, csrfToken)) {
      return NextResponse.json(
        { error: 'Invalid CSRF token' },
        { status: 403 }
      );
    }

    // Extract CN number
    const { searchParams } = new URL(request.url);
    const consignmentNumber = searchParams.get('consignee');

    if (!consignmentNumber) {
      return NextResponse.json(
        { error: 'Consignment number is required' },
        { status: 400 }
      );
    }

    // API credentials
    const apiUrl = process.env.TCS_TRACKING_API_URL;
    const authToken = process.env.TCS_API_HEADER_AUTH_TOKEN;

    if (!apiUrl || !authToken) {
      return NextResponse.json(
        { error: 'API configuration missing' },
        { status: 500 }
      );
    }

    // Call courier API
    const response = await fetch(`${apiUrl}?consignee=${consignmentNumber}`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
        'Content-Type': 'application/json',
      },
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error('Tracking API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch tracking information' },
      { status: 500 }
    );
  }
}
