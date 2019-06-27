<template>
  <section>
    <b-container class="text-center">
      <h1 class="display-4">{{ text }}</h1>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'Header',
  components: {},
  props: {
    text: {
      type: String,
      default: `ENTER HEADER TEXT`
    }
  }
}
</script>

<style scoped>
h1 {
  font-family: 'Bungee', sans-serif;
}
</style>
