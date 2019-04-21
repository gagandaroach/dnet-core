<template>
  <section>
    <Navbar />
    <div class="container">
      <h1>About Me</h1>
      <br />
      <p>Work in Progress</p>
    </div>
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
.container {
  text-align: center;
}
</style>
