// export async function getCsrfToken(): Promise<string> {
//   try {
//     const response = await fetch('/api/csrf', {
//       method: 'GET',
//       credentials: 'include', // Important: include cookies
//     })
    
//     if (!response.ok) {
//       throw new Error('Failed to get CSRF token')
//     }
    
//     const data = await response.json()
//     return data.token
//   } catch (error) {
//     console.error('Error getting CSRF token:', error)
//     throw error
//   }
// }

// export async function makeAuthenticatedRequest(url: string, options: RequestInit = {}): Promise<Response> {
//   const csrfToken = await getCsrfToken()
  
//   return fetch(url, {
//     ...options,
//     credentials: 'include', // Include cookies
//     headers: {
//       ...options.headers,
//       'x-csrf-token': csrfToken,
//     },
//   })
// } 

let csrfTokenCache: string = '';

export async function getCsrfToken(): Promise<string> {
  if (csrfTokenCache) {
    return csrfTokenCache; // reuse same token
  }

  const response = await fetch('/api/csrf', {
    method: 'GET',
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error('Failed to get CSRF token');
  }

  const data = await response.json();
  csrfTokenCache = data.token;
  return csrfTokenCache;
}

export async function makeAuthenticatedRequest(url: string, options: RequestInit = {}): Promise<Response> {
  const csrfToken = await getCsrfToken();

  return fetch(url, {
    ...options,
    credentials: 'include',
    headers: {
      ...options.headers,
      'x-csrf-token': csrfToken,
    },
  });
}
