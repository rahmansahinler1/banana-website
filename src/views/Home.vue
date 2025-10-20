<template>
  <div class="d-flex flex-column min-vh-100">
    <Navbar />
    <Hero />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Hero,
    Footer,
  },
}
</script>

<style scoped></style>
