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
      <Tabs />
    </v-flex>
  </v-layout>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'
import Tabs from '~/components/about/Tabs.vue'

export default {
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
