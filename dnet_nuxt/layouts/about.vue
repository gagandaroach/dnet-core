<template>
  <div>
    <div>
      <NavBar />
      <AboutTabs />
      <b-container>
        <b-alert show variant="danger" dismissible>Heads Up! The about pages are incomplete. I know these pages like doodoo right now.</b-alert>
      </b-container>
      <nuxt />
      <Footer />
    </div>
  </div>
</template>

<script>
import AboutTabs from '~/components/about/AboutTabs.vue'
import NavBar from '~/components/NavBar.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    NavBar,
    Footer,
    AboutTabs
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
