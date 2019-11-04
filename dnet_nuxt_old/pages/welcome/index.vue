// Gagan Daroach © 2019

<template>
  <v-layout
    justify-center
    text-center
  >
    <v-flex>
      <v-container fluid>
        <v-parallax :src="require('~/assets/welcome/outside_home_tree.jpeg')" :height="700">
          <PageTitle
            :title="PageTitle"
            :description="Description"
            :padding-bottom="20"
            background-color="#00000000"
            text-color="#FFF"
          />
        </v-parallax>
        <br>
      </v-container>
      <v-container class="col-md-12 col-lg-10 col-xl-8">
        <v-alert
          dark
          color="red"
          border="bottom"
        >
          <h2>{{ Alert }}</h2>
        </v-alert>
        <Docket />
      </v-container>
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
      title: 'Welcome',
      PageTitle: 'Welcome to Daroach.net',
      Description: 'Thanks for connecting to my homelab!',
      Alert: 'Hello. My name is Gagan Daroach, and you have used the power of the internet to connect to a box in my apartment. Thanks for coming through! I am growing this website to contain more fun and informative things every day. Do feel free to explore around, and poke on every button.'
    }
  },
  head () {
    return {
      title: this.title
    }
  }
}
</script>
