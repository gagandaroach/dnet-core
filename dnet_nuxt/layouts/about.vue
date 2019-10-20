// Gagan Daroach © 2019

<template>
  <v-layout
    justify-center
    align-center
  >
    <v-flex>
      <PageTitle :title="PageTitle" :description="Description" :padding-bottom="5" />
      <Tabs />
      <v-container class="pa-0" fluid>
        <nuxt />
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'
import Tabs from '~/components/about/Tabs.vue'

export default {
  layout: 'default',
  components: {
    PageTitle,
    Tabs
  },
  data () {
    return {
      PageTitle: 'About',
      Description: 'Learn about my homelab and me.'
    }
  }
}
</script>
