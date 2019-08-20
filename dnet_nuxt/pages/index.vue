<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm12
      md12
      lg10
    >
      <Welcome />
      <Donuts />
    </v-flex>
  </v-layout>
</template>

<script>
import Welcome from '~/components/welcome/Welcome.vue'
import Donuts from '~/components/welcome/DonutsIntro.vue'

export default {
  components: {
    Welcome,
    Donuts
  },
  head () {
    this.$store.commit('hideNavbar')
  },
  beforeDestroy () {
    this.$store.commit('showNavbar')
  }
}
</script>
