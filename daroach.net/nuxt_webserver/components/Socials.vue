<template>
  <div class="flex flex-row flex-grow my-2 justify-around px-10 py-10">
      <a
        v-for="social in this.socials"
        :key="social.name"
        class="dnet-button social-button"
        :style="'background-color: ' + social.color"
        target="_blank"
        :id="social.id"
        :href="social.href"
      >
        {{ social.name }}
      </a>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      socials: [
        {
          color: "#4078c0",
          href: "https://github.com/gagandaroach",
          name: "Github",
        },
        {
          color: "#0077b5",
          href: "https://www.linkedin.com/in/gdaroach/",
          name: "LinkedIn",
        },
        {
          color: "#1da1f2",
          href: "https://twitter.com/gagany1",
          name: "Twitter",
        },
        {
          color: "#405de6",
          href: "https://www.instagram.com/galapagosislands/",
          name: "Instagram",
        },
        {
          color: "#3b5998",
          href: "https://www.facebook.com/gagany6",
          name: "Facebook",
        },
      ],
    };
  },
});
</script>

<style>
.social-button {
  @apply border border-white hover:border-black;
}
</style>