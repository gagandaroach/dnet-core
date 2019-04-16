<template>
  <div id="app">
    <Toolbar/>
    <Home/>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar.vue'
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    Toolbar,
    Home
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  margin-top: 60px;
}
</style>
