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
      <Docket />
    </v-flex>
  </v-layout>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'
import Docket from '~/components/welcome/Docket.vue'

export default {
  components: {
    PageTitle,
    Docket
  },
  data () {
    return {
      PageTitle: 'DAROACH.NET',
      Description: 'Thanks for connecting to my homelab!',
      Alert: 'Hello. My name is Gagan Daroach, and you have used the power of the internet to connect to a box in my apartment. Thanks for coming through! I am growing this website to contain more fun and informative things every day. Do feel free to explore around, and poke on every button.'
    }
  }
}
</script>
