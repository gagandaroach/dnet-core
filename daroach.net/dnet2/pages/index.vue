<template>
  <div>
    <Landing />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import landing from "~/layouts/fullscreen.vue";

export default Vue.extend({
  components: { landing },
  layout: "fullscreen",
});
</script>

<style></style>
