import { defineStore } from 'pinia'
import { googleLogin } from '@/api/api'

export default defineStore('auth', {
  state: () => ({
    token: null,
    user: null,
    isAuthenticated: false,
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
      const cookieMatch = document.cookie.match(/authToken=([^;]+)/)
      if (cookieMatch) {
        this.token = cookieMatch[1]
        this.isAuthenticated = true
      }
    },

    setAuthData(token, user) {
      this.token = token
      this.user = user
      this.isAuthenticated = true

      const domain = import.meta.env.VITE_COOKIE_DOMAIN
      const maxAge = 30 * 24 * 60 * 60
      document.cookie = `authToken=${token}; domain=${domain}; path=/; SameSite=Lax; max-age=${maxAge}`
    },
  },
})
