# CSRF Protection Implementation

This document explains the CSRF (Cross-Site Request Forgery) protection implemented in the TCS Tracking application.

## Overview

The application now includes comprehensive CSRF protection to prevent unauthorized cross-site requests to the tracking API. This protection ensures that only legitimate requests from the application's frontend can access the tracking functionality.

## Implementation Details

### 1. CSRF Token Generation (`/api/csrf`)

- **Endpoint**: `GET /api/csrf`
- **Purpose**: Generates a new CSRF token for each session
- **Response**: Returns a token and sets a secure HTTP-only cookie
- **Security**: Uses the `csrf` library for cryptographically secure token generation

### 2. CSRF Token Validation (`/api/track`)

- **Validation**: All tracking API requests must include a valid CSRF token
- **Header**: Token must be sent in the `x-csrf-token` header
- **Cookie**: Secret is stored in an HTTP-only cookie (`csrf-secret`)
- **Verification**: Token is verified against the secret using the `csrf` library

### 3. Frontend Integration (`lib/csrf.ts`)

- **Utility Functions**: 
  - `getCsrfToken()`: Fetches a new CSRF token
  - `makeAuthenticatedRequest()`: Makes API requests with CSRF protection
- **Automatic Handling**: Frontend automatically includes CSRF tokens in requests

### 4. Security Headers (Middleware)

- **X-Content-Type-Options**: Prevents MIME type sniffing
- **X-Frame-Options**: Prevents clickjacking attacks
- **X-XSS-Protection**: Enables XSS protection
- **Referrer-Policy**: Controls referrer information
- **Content-Security-Policy**: Restricts resource loading

## How It Works

1. **Token Generation**: When a user visits the application, a CSRF token is generated
2. **Cookie Storage**: The token secret is stored in a secure HTTP-only cookie
3. **Frontend Request**: When making API calls, the frontend includes the CSRF token
4. **Server Validation**: The server validates the token against the stored secret
5. **Request Processing**: Only valid requests are processed

## Security Features

- **Cryptographic Security**: Uses cryptographically secure token generation
- **HTTP-Only Cookies**: Secrets are stored in HTTP-only cookies to prevent XSS access
- **SameSite Cookies**: Cookies are set with `SameSite=strict` for additional protection
- **Token Expiration**: Tokens expire after 24 hours
- **Secure in Production**: Cookies are marked as secure in production environments

## Usage

### Frontend (Automatic)

The frontend automatically handles CSRF protection through the `makeAuthenticatedRequest` function:

```typescript
import { makeAuthenticatedRequest } from '@/lib/csrf'

// This automatically includes CSRF protection
const response = await makeAuthenticatedRequest('/api/track?consignee=123')
```

### Manual Implementation

If you need to make CSRF-protected requests manually:

```typescript
import { getCsrfToken } from '@/lib/csrf'

const token = await getCsrfToken()
const response = await fetch('/api/track?consignee=123', {
  headers: {
    'x-csrf-token': token
  },
  credentials: 'include'
})
```

## Testing

To test CSRF protection:

1. **Valid Request**: Should work normally with proper CSRF token
2. **Missing Token**: Should return 403 error
3. **Invalid Token**: Should return 403 error
4. **Cross-Origin Request**: Should be blocked by CORS and CSRF protection

## Troubleshooting

### Common Issues

1. **403 Forbidden Errors**: Check if CSRF token is being sent correctly
2. **Cookie Issues**: Ensure cookies are enabled and not blocked
3. **CORS Errors**: Verify the request is coming from the same origin

### Debug Mode

To debug CSRF issues, check the browser's Network tab and Console for:
- CSRF token requests to `/api/csrf`
- Token inclusion in tracking API requests
- Any error messages related to CSRF validation

## Dependencies

- `csrf`: For secure token generation and validation
- `next`: For API routes and middleware functionality

## Best Practices

1. **Always use HTTPS** in production
2. **Keep dependencies updated** for security patches
3. **Monitor for security vulnerabilities** in dependencies
4. **Test CSRF protection** regularly
5. **Log security events** for monitoring and debugging 