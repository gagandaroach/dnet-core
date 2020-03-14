<template>
  <div class="container">
    <div>
      <h1 class="display-3">
        DAROACH.NET
      </h1>
      <p class="lead">
        Thanks for connecting to my homelab!
      </p>
      <Donuts />
      <br>
      <p class="lead">
        Front Page Hits: {{ PageHits }}
      </p>
      <b-button block variant="outline-light" size="lg" to="/welcome" replace>
        Welcome
      </b-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Donuts from '~/components/Donuts.vue'

export default {
  layout: 'landing',
  components: {
    Donuts
  },
  data () {
    return { PageHits: 0 }
  },
  mounted () {
    axios
      .post('https://api.daroach.net/hit/count',
        { page: this.$router.path }
      )
      .then(response => (this.PageHits = response.data.count))
  }
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
}
</style>
