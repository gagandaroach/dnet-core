<template>
  <div>
    <div class="dnet-card container rounded-md">
      <div class="">
        <h1>Daroach.net Maintainer and Host</h1>
      </div>

      <div class="">
        <div class="">
          <p>Gagandeep Bishamber Daroach</p>
          <hr class="my-2" />
          <p>
            I am an aspiring Software Engineer, hoping to
            <a href="https://youtu.be/J-GVd_HLlps?t=32"
              >make the world a better place</a
            >. With this website, I hope to create a place for people to share
            stories, knowledge, information, and data. Right now, this website
            is running on
            <a
              href="https://www.instagram.com/p/BtSgNa8ni0i/?utm_source=ig_web_options_share_sheet"
              >a server</a
            >
            in my apartment.
          </p>

          <p>Follow Me on Social Media</p>
          <hr class="my-2" />
          <div class="p-2 mx-auto">
            <a
              id="github"
              type="button"
              target="_blank"
              class="social-button"
              href="https://github.com/gagandaroach"
            >
              Github
            </a>
            <a
              id="linkedin"
              type="button"
              target="_blank"
              class="social-button"
              href="https://www.linkedin.com/in/gdaroach/"
            >
              LinkedIn
            </a>
            <a
              id="twitter"
              type="button"
              target="_blank"
              class="social-button"
              href="https://twitter.com/gagany1"
            >
              Twitter
            </a>
            <a
              id="instagram"
              type="button"
              target="_blank"
              class="social-button"
              href="https://www.instagram.com/galapagosislands/"
            >
              Instagram
            </a>
            <a
              id="facebook"
              type="button"
              target="_blank"
              class="social-button"
              href="https://www.facebook.com/gagany6"
            >
              Facebook
            </a>
          </div>
        </div>
        <div class="">
          <img class="object-scale-down" src="/outside_tree_home.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style scoped>
#instagram {
  background-color: #405de6;
}
#linkedin {
  background-color: #0077b5;
}
#facebook {
  background-color: #3b5998;
}
#github {
  background-color: #4078c0;
}
#twitter {
  background-color: #1da1f2;
}
.social-button {
  @apply w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 m-1 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm;
}
</style>