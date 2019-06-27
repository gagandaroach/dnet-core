<template>
  <div class="body">
    <b-container fluid class="container">
      <div>
        <h1 class="display-3">
          daroach.net
        </h1>
        <p class="lead">The coolest website on the internet.</p>
        <MilkAndDonutIntro />
        <Nav />
      </div>
    </b-container>
  </div>
</template>

<script>
import Nav from '~/components/landing/Nav.vue'
import MilkAndDonutIntro from '~/components/landing/MilkAndDonutIntro.vue'

export default {
  components: {
    Nav,
    MilkAndDonutIntro
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
  background-color: var(--primary);
  color: #fff;
  box-shadow: inset 0 0 5rem var(--secondary);
}
</style>
