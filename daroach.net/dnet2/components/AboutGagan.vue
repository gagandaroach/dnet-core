<template>
  <div class="container dnet-card">
    <div class="flex flex-col space-y-2">
      <h1>Gagandeep Bishamber Daroach</h1>
      <h2>Daroach.net Maintainer and Host</h2>
      <hr class="my-2" />
      <p>
        I am an aspiring Software Engineer, hoping to
        <a href="https://youtu.be/J-GVd_HLlps?t=32">
          make the world a better place.
        </a>
        With this website, I hope to create a place for people to share stories,
        knowledge, information, and data. This website runs on
        <a
          href="https://www.instagram.com/p/BtSgNa8ni0i/?utm_source=ig_web_options_share_sheet"
        >
          a computer server
        </a>
        in my apartment.
      </p>
      <div class="flex flex-shrink-0">
        <img
          class="object-scale-down h-auto w-auto"
          src="/outside_tree_home.jpg"
        />
      </div>
      <div class="">
        <!-- <p class="">My Social Media</p> -->
        <div class="my-2 justfiy-around">
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
      </div>
    </div>
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
      ]
    };
  },
});
</script>

<style>
.social-button {
  @apply inline-flex;
  @apply px-4 py-2 m-1 sm:ml-3 sm:w-auto;
}
</style>