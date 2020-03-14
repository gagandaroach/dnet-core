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
        Enter Site
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
    return { PageHits: '' }
  },
  mounted () {
    axios({
      method: 'post',
      url: 'https://api.daroach.net/hit/count',
      data: {
        page: '/'
      }
    })
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
