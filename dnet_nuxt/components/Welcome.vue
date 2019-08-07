<template>
  <v-container fluid fill-height height="100vh">
    <v-layout align-center justify-center>
      <div class="body">
        <h1 :class="titleClass">DAROACH.NET</h1>
        <hr />
        <h2>Welcome Visitor {{ visitorNumber }}</h2>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      visitorNumber: 1
    }
  },
  method: { },
  computed: {
    // titleClass () {
    //   // switch (this.$vuetify.breakpoint.name) {
    //   //   case 'xs': return 'display-2'
    //   //   case 'sm': return 'display-3'
    //   //   case 'md': return 'display-4'
    //   //   case 'lg': return 'display-4'
    //   //   case 'xl': return 'display-4'
    //   //   default: return 'display-4'
    //   // }
    // }
  }
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
