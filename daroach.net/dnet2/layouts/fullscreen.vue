<template>
  <div class="flex h-screen bg-red-900">
    <div
      class="p-4 m-auto max-w-md bg-gray-200 rounded-xl shadow-md text-center"
    >
      <Nuxt />
      <div class="text-center text-base text-gray-900 pt-4">
        <HitCount :prefix="hitCountText" :debug="false" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data () {
    return {
      hitCountText: "Page Hits: "
    }
  }
});
</script>

<style></style>
