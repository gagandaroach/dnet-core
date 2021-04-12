<template>
  <div class="flex-col space-y-10 select-none pb-72">
    <div class="text-5xl text-gray-900 font-bold text-center m-10">
      Welcome to daroach.net
    </div>
    <div class="">
      <AboutGagan />
    </div>
    <div class="">
      <WebStatistics />
    </div>
    <div>
      <nuxt-content :document="page" class="dnet-content"></nuxt-content>
    </div>
  </div>
</template>

<script>
export default {
  layout: "default",
  async asyncData({ $content }) {
    const page = await $content("home").fetch();
    return {
      page,
    };
  },
};
</script>

<style>
</style>