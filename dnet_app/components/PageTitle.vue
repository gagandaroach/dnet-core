<template>
  <section>
    <b-container class="main">
      <h1 class="display-3">{{ title }}</h1>
      <p class="lead">{{ description }}</p>
    </b-container>
  </section>
</template>

<script>
export default {
  components: {},
  props: ['title', 'description']
}
</script>

<style scoped>
.main {
  margin-top: 40px;
  text-align: center;
}
</style>
