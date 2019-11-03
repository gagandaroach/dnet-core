// Gagan Daroach © 2019

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
      <v-container class="text-center">
        <v-btn
          outlined
          x-large
          color="dark"
          dark
          class="mt-10 font-weight-bold"
          to="/welcome"
        >
          Welcome
        </v-btn>
      </v-container>
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
