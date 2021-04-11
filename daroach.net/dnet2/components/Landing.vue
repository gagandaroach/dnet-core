<template>
  <div class="select-none">
    <h1 class="pb-2">Welcome</h1>
    <div>
      <img class="object-scale-down" src="/donuts.gif" />
    </div>
    <div class="my-4">
      <p class="">
        You have used the power of the internet to connect to Gagan's personal
        server.
      </p>
    </div>
    <div class="">
      <NuxtLink
        to="/home"
        class="dnet-button"
      >
        Enter daroach.net
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default { layout: "fullscreen" };
</script>

<style></style>
