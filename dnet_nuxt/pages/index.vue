<template>
  <v-layout
    column
    justify-center
    align-center
    fullscreen
  >
    <v-flex
      xs12
      sm12
      md12
      lg10
    >
      <Welcome />
      <Donuts />
      <v-btn block color="dark" dark class="mt-10" to="/welcome">
        Welcome
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import Welcome from '~/components/landing/TitleLine.vue'
import Donuts from '~/components/landing/DonutsIntro.vue'

export default {
  components: {
    Welcome,
    Donuts
  },
  head () {
    this.$store.commit('hideNavbar')
  },
  computed: { },
  beforeDestroy () {
    this.$store.commit('showNavbar')
  }
}
</script>

<style lang="scss"></style>
