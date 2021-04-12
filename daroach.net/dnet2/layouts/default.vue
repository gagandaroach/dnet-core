<template>
  <div class="h-full min-h-screen dnet-bg m-auto">
      <Navbar />
      <Nuxt />
      <Footer />
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "layout-default"
});
</script>

<style></style>
