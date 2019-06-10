<template>
  <div class="body">
    <b-container fluid class="container">
      <div>
        <logo />
        <h1 class="display-3">
          daroach.net
        </h1>
        <p class="lead">The coolest website on the internet.</p>
        <Nav />
      </div>
    </b-container>
  </div>
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

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.body {
  background-color: #333;
  color: #fff;
  box-shadow: inset 0 0 5rem rgba(0, 0, 0, 0.5);
}
</style>
