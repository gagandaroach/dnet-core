// Gagan Daroach © 2019

<template>
  <v-layout
    justify-center
    text-center
  >
    <v-flex>
      <PageTitle
        :title="PageTitle"
        :description="Description"
        :padding-bottom="20"
      />
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
      PageTitle: 'Cloud.Daroach.Net',
      Description: 'A place for people to syncronyize their data accross all of their devices.',
      Alert: 'WIP'
    }
  }
}
</script>
