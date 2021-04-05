<template>
  <div class="">
    <div>
      <img class="object-scale-down" src="/donuts.gif" />
    </div>
    <div class="my-4">
      <h1 class="">daroach.net</h1>
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
        Enter Site
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default { layout: "fullscreen" };
</script>

<style></style>
