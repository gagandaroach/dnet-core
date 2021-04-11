<template>
  <div class="dnet-navbar w-full">
    <NuxtLink to="/" class="text-xl ml-1 mr-auto ">daroach.net</NuxtLink>
    <NuxtLink :to="path" class="text-base text-gray-100 ml-1 mr-auto ">{{ path.substring(1,path.length) }}</NuxtLink>
    <NuxtLink v-if="false" to="/home/errorpage" class="text-base mr-1 ml-auto float-right"
      >ERROR PAGE</NuxtLink
    >
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      path: "",
    };
  },
  mounted() {
    this.path = this.$route.path;
  },
});
</script>

<style></style>
