<template>
  <section class="container">
    <div>
      <div>
        <b-alert show variant="warning" dismissible>
          Heads up, the site is in BETA. Everything you see is not final and may
          change.
        </b-alert>
      </div>
      <logo />
      <h1 class="display-2">
        daroach.net
      </h1>
      <Nav />
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Nav from '~/components/Nav.vue'

export default {
  components: {
    Logo,
    Nav
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
