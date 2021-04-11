<template>
  <div class="container dnet-card">
    <h1 class="text-lg">Web Statistics</h1>
    <div>
      {{ this.hits }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      hits: [],
    };
  },
  mounted() {
    this.$axios
      .$get(`/hits/${encodeURIComponent(window.location.host)}?api-key=apikey`)
      .then((res) => (this.hits = res));
  },
});
</script>

<style></style>