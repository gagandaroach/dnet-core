<template>
  <section>
    <Navbar />
    <b-container class="main">
      <h1 class="display-3">About Me</h1>
      <p class="lead">A Work in Progress</p>
    </b-container>
  </section>
</template>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<style scoped>
.main {
  margin-top: 40px;
}
.container {
  text-align: center;
}
</style>
