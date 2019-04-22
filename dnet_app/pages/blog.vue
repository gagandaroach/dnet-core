<template>
  <section>
    <Navbar />
    <b-container-fluid>
      <b-alert show variant="warning"
        >Heads Up! This site is in its infancy. I'm working on and changing
        content every day. Please contact me with any site suggestions or
        bugs.</b-alert
      >
    </b-container-fluid>
    <b-container>
      <h1>Blog Page</h1>
      <p>Work in Progress</p>
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
.container {
  text-align: center;
}
</style>
