<template>
  <div class="px-10 py-5">
    <div class="mb-10">
      <h1>HTTP Error {{ error.statusCode }}</h1>
      <p>Looks like something went wrong.</p>
    </div>
    <NuxtLink to="/" class="dnet-button">Return to daroach.net</NuxtLink>
    <!-- <a
      href="mailto:gagandaroach@gmail.com?Subject=Oops"
      class="p-2 bg-red-600 rounded-md hover:text-white hover:bg-red-900"
      >Send Gagan an email</a
    > -->
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "fullscreen", // you can set a custom layout for the error page
};
</script>

<style></style>