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
              <button class="btn btn-google btn-lg" @click="handleGoogleAuth">
                <i class="bi bi-google me-2"></i>
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapStores } from 'pinia'
import useAuthStore from '@/stores/auth'

export default {
  name: 'Hero',
  computed: {
    ...mapStores(useAuthStore),
  },
  methods: {
    async handleGoogleAuth() {
      await this.authStore.googleAuth()
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
