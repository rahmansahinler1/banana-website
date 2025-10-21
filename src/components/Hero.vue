<template>
  <section class="hero-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-10 col-lg-8">
          <div class="hero-content">
            <h1 class="hero-title mb-4">Welcome to Banana</h1>
            <p class="hero-subtitle mb-5">
              Transform your design workflow with our powerful AI-powered platform. Create stunning
              visuals in seconds.
            </p>

            <div class="hero-cta">
              <GoogleLogin :callback="handleGoogleLogin">
                <button class="btn btn-google btn-lg">
                  <i class="bi bi-google me-2"></i>
                  Continue with Google
                </button>
              </GoogleLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { GoogleLogin } from 'vue3-google-login'
import { mapStores } from 'pinia'
import useAuthStore from '@/stores/auth'

export default {
  name: 'Hero',
  components: {
    GoogleLogin,
  },
  computed: {
    ...mapStores(useAuthStore),
  },
  methods: {
    async handleGoogleLogin(response) {
      if (response.code) {
        const result = await this.authStore.handleGoogleAuth(response.code)

        if (result.success) {
          window.location.href = import.meta.env.VITE_APP_URL
        } else {
          console.error('Login failed:', result.error)
          alert('Login failed: ' + result.error)
        }
      } else if (response.error) {
        console.error('Google OAuth error:', response.error)
        alert('Google login was cancelled or failed.')
      }
    },
  },
}
</script>

<style scoped>
.btn-google {
  background-color: white;
  color: var(--color-text);
  border: 1px solid var(--color-border);
  font-family: var(--font-family-base);
  font-size: 16px;
  font-weight: 500;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.btn-google:hover {
  background-color: #f8f9fa;
  border-color: var(--color-primary);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
  color: var(--color-text);
}

.btn-google i {
  font-size: 1.25rem;
}

/* Responsive adjustments */
@media (max-width: 576px) {
  .btn-google {
    width: 100%;
    max-width: 300px;
  }
}
</style>
