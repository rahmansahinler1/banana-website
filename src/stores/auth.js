import { defineStore } from 'pinia'
import { googleLogin } from '@/api/api'

export default defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('authToken') || null,
    user: JSON.parse(localStorage.getItem('user')) || null,
    isAuthenticated: !!localStorage.getItem('authToken'),
  }),

  actions: {
    async handleGoogleAuth(authorizationCode) {
      try {
        const result = await googleLogin(authorizationCode)

        if (result.success) {
          this.setAuthData(result.data.token, result.data.user)
          return { success: true }
        } else {
          return { success: false, error: result.error }
        }
      } catch (error) {
        return { success: false, error: 'Authentication failed' }
      }
    },

    checkAuth() {
      const token = localStorage.getItem('authToken')
      if (token) {
        this.token = token
        this.isAuthenticated = true
      }
    },

    setAuthData(token, user) {
      this.token = token
      this.user = user
      this.isAuthenticated = true

      localStorage.setItem('authToken', token)
      localStorage.setItem('user', JSON.stringify(user))

      const domain = import.meta.env.VITE_COOKIE_DOMAIN
      const maxAge = 30 * 24 * 60 * 60
      document.cookie = `authToken=${token}; domain=${domain}; path=/; SameSite=Lax; max-age=${maxAge}`

      window.location.href = import.meta.env.VITE_APP_URL
    },
  },
})
