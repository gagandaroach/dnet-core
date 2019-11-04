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
      <b-button variant="primary" size="lg" to="/welcome" replace>
        Welcome
      </b-button>
    </div>
  </div>
</template>

<script>
import Donuts from '~/components/Donuts.vue'

export default {
  layout: 'landing',
  components: {
    Donuts
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
