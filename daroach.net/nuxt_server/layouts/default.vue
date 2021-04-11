<template>
  <div>
    <NavBar />
    <div>
      <Nuxt />
    </div>
    <br>
    <Footer />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    NavBar,
    Footer
  }
}
</script>

<style scoped>
html {
  font-family: 'Ubuntu', sans-serif;
  -ms-text-size-adjust: 70%;
  -webkit-text-size-adjust: 70%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
