<template>
  <div>
    <div>
      <PageTitle
        :title="PageTitle"
        :description="Description"
        :padding-bottom="20"
        background-color="#00000000"
        text-color="#FFF"
      />
    </div>
  </div>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'

export default {
  layout: 'default',
  components: {
    PageTitle
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

<style>
</style>
