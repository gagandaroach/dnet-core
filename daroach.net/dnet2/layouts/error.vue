<template>
  <div class="dnet-card">
    <div class="mb-5">
      <h1>HTTP Error {{ error.statusCode }}</h1>
      <p>Looks like something went wrong.</p>
    </div>
    <NuxtLink
      to="/"
      class="dnet-button"
      >Return to daroach.net</NuxtLink
    >
    <!-- <a
      href="mailto:gagandaroach@gmail.com?Subject=Oops"
      class="p-2 bg-red-600 rounded-md hover:text-white hover:bg-red-900"
      >Send Gagan an email</a
    > -->
  </div>
</template>

<script lang='ts'>
export default {
  props: ["error"],
  layout: "fullscreen", // you can set a custom layout for the error page
};
</script>

<style></style>