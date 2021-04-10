<template>
  <div class="text-3xl text-black font-bold">Hit Count: {{ hits }}</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return { hits: "" };
  },
  mounted() {
    this.$axios.$get("/hits?api-key=apikey").then((res) => (this.hits = res));
  },
});
</script>

<style>
</style>