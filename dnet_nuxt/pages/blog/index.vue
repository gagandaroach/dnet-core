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
      PageTitle: 'Blog',
      Description: 'This page is on the to-do list'
    }
  }
}
</script>
