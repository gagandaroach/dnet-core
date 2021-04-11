<template>
  <div class="flex">
    <div
      class="dnet-card"
    >
      <h1 class="text-xl">DAROACHNET HOME PAGE</h1>
      <NuxtLink to="/" class="dnet-button"> Back to Landing </NuxtLink>
    </div>
    <div>
      <AboutGagan />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default {
  layout: "default",
};
</script>

<style></style>