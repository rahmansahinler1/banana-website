<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <router-link to="/" class="navbar-brand logo-text">Unmarble</router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <button class="btn btn-primary" @click="handleTryForFree">Try For Free</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    handleTryForFree() {
      // Scroll to hero section or trigger Google OAuth
      const heroSection = document.querySelector('.hero-section')
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: 'smooth' })
      }
    },
  },
}
</script>

<style scoped></style>
