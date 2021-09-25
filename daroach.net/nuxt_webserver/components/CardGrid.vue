<template>
  <div
    class="container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-10"
  >
    <div
      v-for="item of content"
      :key="item.title"
      class="dnet-card hover:bg-white hover:text-black"
    >
      <a :href="item.link" target="_blank" rel="noopener noreferrer" class="">
        <p class="text-2xl px-5">{{ item.title }}</p>
        <p class="text-lg px-5">{{ item.subtitle }}</p>
        <img class="object-scale-down mx-auto p-5" :src="item.image" />
        <p class="text-justify">{{ item.description }}</p>
      </a>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: ["content"],
});
</script>

<style>
</style>
