// Gagan Daroach © 2019

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
      <PageTitle :title="PageTitle" :description="Description" />

      <h1 class="text-uppercase">Whats on daroach.net?</h1>

    </v-flex>
  </v-layout>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'

export default {
  components: {
    PageTitle
  },
  data () {
    return {
      PageTitle: 'Welcome',
      Description: 'Thanks for connecting to my homelab!'
    }
  }
}
</script>
