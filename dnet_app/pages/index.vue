<template>
  <div class="body">
    <b-container fluid class="container">
      <div>
        <h1 class="display-3">
          daroach.net
        </h1>
        <p class="lead">Hello Visitor # 1</p>
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
h1 {
  color: var(--white);
}
p {
  color: var(--white);
}
.body {
  background-color: var(--secondary);
  text-shadow: 12px;
  box-shadow: inset 0 0 5rem var(--black);
  font-family: 'Bungee', sans-serif;
}
</style>
