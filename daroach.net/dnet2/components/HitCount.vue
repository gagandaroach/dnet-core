<template>
  <div>
    <div>
      {{ prefix }} {{ hits.length }}
    </div>
    <div v-if="debug" class="text-base text-black">Hit Dump: {{ hits }}</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return { hits: "" };
  },
  props: ['prefix', 'debug'],
  mounted() {
    this.$axios
      .$get(`/hits/${encodeURIComponent(window.location.host)}/${encodeURIComponent(this.$route.path)}?api-key=apikey`)
      .then((res) => (this.hits = res));
  },
});
</script>

<style>
</style>