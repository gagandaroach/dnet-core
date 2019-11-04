<template>
  <div class="container">
    <div>
      <logo />
      <h1>
        daroach.net
      </h1>
      <h2>
        daroach.net - gagan&#39;s homelab
      </h2>
      <b-button variant="primary" size="lg" to="/welcome" replace>
        Welcome
      </b-button>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  layout: 'landing',
  components: {
    Logo
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
