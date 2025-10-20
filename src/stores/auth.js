import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('authToken') || null,
    user: null,
    isAuthenticated: false,
  }),

  getters: {
    isLoggedIn: (state) => !!state.token,
  },

  actions: {
    async googleAuth() {
      // TODO: Implement Google OAuth flow
      // For now, this is a placeholder
      console.log('Initiating Google OAuth flow...')

      // Future implementation:
      // 1. Redirect to Google OAuth consent screen
      // 2. Handle callback with authorization code
      // 3. Exchange code for tokens with backend
      // 4. Store token and redirect to app

      // Placeholder redirect to app (remove when implementing real OAuth)
      // window.location.href = 'http://localhost:3001'

      return { success: false, error: 'Google OAuth not yet implemented' }
    },

    logout() {
      this.token = null
      this.user = null
      this.isAuthenticated = false

      // Clear token from localStorage
      localStorage.removeItem('authToken')

      // Redirect to home
      window.location.href = '/'
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

      // Store token in localStorage
      localStorage.setItem('authToken', token)

      // Redirect to main application
      window.location.href = 'http://localhost:3001'
    },
  },
})

export default useAuthStore
