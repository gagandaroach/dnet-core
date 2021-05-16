<template>
  <div class="select-none max-w-xs md:max-w-md">
    <h1 class="pb-2">Welcome</h1>
    <div>
      <img class="object-scale-down" src="/donuts.gif" />
      <div class="text-sm text-gray-100 text-right">Gagan Daroach</div>
    </div>
    <div class="text-base my-4">
      You have used the power of the internet to connect to my home web server.
    </div>
    <div class="m-6">
      <NuxtLink to="/home" class="dnet-button"> enter daroach.net </NuxtLink>
    </div>
    <div class="text-base">
      <HitCount :prefix="hitCountText" :debug="false" />
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  layout: "fullscreen",
  data() {
    return {
      hitCountText: "Front Page Hits: ",
    };
  },
};
</script>

<style></style>
