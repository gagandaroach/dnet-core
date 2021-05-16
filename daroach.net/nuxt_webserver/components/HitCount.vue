<template>
  <div v-if="show">{{ prefix }} {{ hits }} {{ suffix }}</div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  computed: {
    hits() {
      return this.$store.getters["hits/getPageCount"](this.$route.path);
    },
    show() {
      return this.hits != undefined && this.hits > 0;
    },
  },
  props: ["prefix", "suffix"],
});
</script>

<style>
</style>