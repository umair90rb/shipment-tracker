# CSRF Protection Test Guide

## Testing the CSRF Protection Implementation

### Prerequisites
1. Start the development server: `npm run dev`
2. Open your browser's Developer Tools (F12)
3. Go to the Network tab to monitor requests

### Test 1: Valid CSRF Token Request

1. **Navigate to the application**: Go to `http://localhost:3000`
2. **Check CSRF token generation**: In the Network tab, you should see a request to `/api/csrf`
3. **Verify cookie**: Check that the `csrf-secret` cookie is set (in Application > Cookies)
4. **Test tracking**: Enter a consignment number and submit
5. **Verify request**: In the Network tab, check that the `/api/track` request includes the `x-csrf-token` header
6. **Expected result**: Tracking should work normally

### Test 2: Missing CSRF Token

1. **Direct API call**: Try to access the tracking API directly without a CSRF token:
   ```bash
   curl "http://localhost:3000/api/track?consignee=123"
   ```
2. **Expected result**: Should return a 403 Forbidden error with "CSRF token missing"

### Test 3: Invalid CSRF Token

1. **Modify the request**: Use browser dev tools to modify the `x-csrf-token` header to an invalid value
2. **Expected result**: Should return a 403 Forbidden error with "Invalid CSRF token"

### Test 4: Cross-Origin Request

1. **Create a test HTML file** with this content:
   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <title>CSRF Test</title>
   </head>
   <body>
       <h1>CSRF Test</h1>
       <script>
           fetch('http://localhost:3000/api/track?consignee=123', {
               method: 'GET',
               headers: {
                   'Content-Type': 'application/json'
               }
           })
           .then(response => response.json())
           .then(data => console.log(data))
           .catch(error => console.error('Error:', error));
       </script>
   </body>
   </html>
   ```
2. **Open the file** in a browser (not from localhost:3000)
3. **Expected result**: Should be blocked by CORS and/or CSRF protection

### Test 5: Cookie Security

1. **Check cookie attributes**: In browser dev tools, go to Application > Cookies
2. **Verify settings**:
   - `httpOnly`: Should be true
   - `secure`: Should be false in development, true in production
   - `sameSite`: Should be "strict"
   - `path`: Should be "/"

### Test 6: Security Headers

1. **Check response headers**: In the Network tab, examine any page response
2. **Verify headers**:
   - `X-Content-Type-Options`: Should be "nosniff"
   - `X-Frame-Options`: Should be "DENY"
   - `X-XSS-Protection`: Should be "1; mode=block"
   - `Referrer-Policy`: Should be "strict-origin-when-cross-origin"
   - `Content-Security-Policy`: Should be present

## Manual Testing with curl

### Test CSRF Token Generation
```bash
curl -c cookies.txt -b cookies.txt "http://localhost:3000/api/csrf"
```

### Test Valid Tracking Request
```bash
# First get a CSRF token
TOKEN_RESPONSE=$(curl -c cookies.txt -b cookies.txt "http://localhost:3000/api/csrf")
TOKEN=$(echo $TOKEN_RESPONSE | grep -o '"token":"[^"]*"' | cut -d'"' -f4)

# Then use it for tracking
curl -c cookies.txt -b cookies.txt \
  -H "x-csrf-token: $TOKEN" \
  "http://localhost:3000/api/track?consignee=123"
```

### Test Invalid Token
```bash
curl -c cookies.txt -b cookies.txt \
  -H "x-csrf-token: invalid-token" \
  "http://localhost:3000/api/track?consignee=123"
```

## Expected Results Summary

| Test | Expected Result |
|------|----------------|
| Valid token | 200 OK with tracking data |
| Missing token | 403 Forbidden |
| Invalid token | 403 Forbidden |
| Cross-origin | CORS error or 403 Forbidden |
| Cookie security | Proper attributes set |
| Security headers | All headers present |

## Troubleshooting

If tests fail:

1. **Check console errors**: Look for JavaScript errors in browser console
2. **Verify dependencies**: Ensure `csrf` package is installed
3. **Check environment**: Make sure you're running in the correct environment
4. **Clear cookies**: Clear browser cookies and try again
5. **Restart server**: Stop and restart the development server

## Security Notes

- CSRF tokens expire after 24 hours
- Tokens are cryptographically secure
- Secrets are stored in HTTP-only cookies
- All API requests must include valid CSRF tokens
- Cross-origin requests are blocked by default 