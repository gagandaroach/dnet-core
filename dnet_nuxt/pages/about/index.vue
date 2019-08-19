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
      PageTitle: 'About',
      Description: 'Learn about my homelab and me.'
    }
  }
}
</script>
