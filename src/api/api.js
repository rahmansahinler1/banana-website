const API_BASE_URL = 'http://127.0.0.1:8000/api/v1'

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
