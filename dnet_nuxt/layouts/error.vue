<template>
  <v-app dark>
    <v-contents class="align-self-center">
      <PageTitle
        :title="title"
        description=""
      />
      <v-alert type="error" border="left" colored-border>
        Looks like you are looking for a page that either doesn't exist, or maybe is not yet written.
      </v-alert>
      <v-btn color="" to="/">
        Return to homepage
      </v-btn>
      <v-btn color="" href="https://github.com/gagandaroach/daroachnet/issues/new">
        Let me know about a bug
      </v-btn>
    </v-contents>
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
