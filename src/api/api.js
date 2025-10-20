const API_BASE_URL = 'http://127.0.0.1:8000/api/v1'

/**
 * Login user with email and password
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Promise<{success: boolean, data?: object, error?: string}>}
 */
async function login(email, password) {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
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
        error: data.message || 'Login failed. Please check your credentials.',
      }
    }
  } catch (error) {
    return {
      success: false,
      error: 'Network error. Please try again later.',
    }
  }
}

/**
 * Signup new user
 * @param {string} name - User full name
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Promise<{success: boolean, data?: object, error?: string}>}
 */
async function signup(name, email, password) {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
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
        error: data.message || 'Signup failed. Please try again.',
      }
    }
  } catch (error) {
    return {
      success: false,
      error: 'Network error. Please try again later.',
    }
  }
}

export { login, signup }
