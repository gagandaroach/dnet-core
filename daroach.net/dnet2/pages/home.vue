<template>
  <div class="flex flex-col select-none pb-72">
    <h1 class="home-header-1">Welcome to Daroach.net</h1>
    <AboutGagan />
    <h1 class="home-header-1">WebServer Traffic</h1>
    <div class="flex flex-auto">
      <total-page-hits />
      <timely-page-hits v-if="false"/>
    </div>
    <h1 class="home-header-1">Open Source Projects</h1>
    <nuxt-content :document="page" class="dnet-content"></nuxt-content>
    <Content />
  </div>
</template>

<script>
import TimelyPageHits from "../components/Charts/TimelyPageHits.vue";
import TotalPageHits from "../components/Charts/TotalPageHits.vue";

export default {
  components: { TotalPageHits, TimelyPageHits },
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
.home-header-1 {
  @apply text-5xl text-gray-200 font-bold text-center m-10;
}
</style>