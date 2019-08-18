<template>
  <v-app dark>
    <PageTitle
      :title="title"
      description=""
    />
    <v-btn color="" to="/">
      Return to homepage
    </v-btn>
  </v-app>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'

export default {
  components: {
    PageTitle
  },
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  computed: {
    title () {
      if (this.error.statusCode === 404) {
        return this.pageNotFound
      } else {
        return this.otherError
      }
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
