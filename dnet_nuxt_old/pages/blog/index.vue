// Gagan Daroach © 2019

<template>
  <v-layout
    justify-center
    align-center
  >
    <v-flex>
      <PageTitle :title="PageTitle" :description="Description" />
      <v-container>
        <v-alert
          dark
          color="red"
          border="left"
          type="info"
          v-text="Alert"
        />
      </v-container>
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
