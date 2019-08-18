<template>
  <section id="welcome">
    <PageTitle
      title="DAROACH.NET"
      description="Thanks for connecting to my homelab!"
    />
  <!-- <v-container fluid fill-height height="100vh">
    <v-layout align-center justify-center>
      <div class="body">
        <h1>DAROACH.NET</h1>
        <hr>
        <h2>Welcome Visitor {{ visitorNumber }}</h2>
      </div>
    </v-layout>
  </v-container> -->
  </section>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'
export default {
  components: {
    PageTitle
  },
  data () {
    return {
      visitorNumber: 1
    }
  },
  method: { },
  computed: { }
}
</script>

<style lang="scss" scoped>
.body {
  // Minimum 16x, and grows more slowly
  // (half the rate of screen growth)
  font-size: calc(16px + 0.5vw);
}
h1 {
  font-size: calc(1.5em + 5.0vw);
}
h2 {
  font-size: calc(1.2em + 1.0vw);
}
</style>
