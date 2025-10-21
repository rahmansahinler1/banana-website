const API_BASE_URL = `${import.meta.env.VITE_API_URL}/api/v1`

async function fetchWithAuth(url, options = {}) {
  const defaultOptions = {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  }

  const response = await fetch(url, { ...defaultOptions, ...options })

  if (response.status === 401) {
    const domain = import.meta.env.VITE_COOKIE_DOMAIN
    document.cookie = `authToken=; domain=${domain}; path=/; max-age=0`
    throw new Error('Authentication required')
  }

  return response
}

export async function googleLogin(code) {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/google`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code }),
    })

    const data = await response.json()

    if (response.ok) {
      return {
        success: true,
        data: data,
      }
    } else {
      return {
        success: false,
        error: data.message || 'Google authentication failed.',
      }
    }
  } catch (error) {
    return {
      success: false,
      error: 'Network error. Please try again later.',
    }
  }
}
