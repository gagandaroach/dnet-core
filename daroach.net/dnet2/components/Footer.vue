<template>
  <div>
    <footer class="dnet-footer h-auto bg-gray-200">
      <div class="flex flex-row">
        <div class="flex flex-col ml-1 mr-auto">
          <span
            ><a
              :title="source_code_popup_text"
              href="https://github.com/gagandaroach/daroachnet"
              target="_blank"
              >{{ source_code_link_title }}</a
            ></span
          >
        </div>
        <div class="flex flex-col mr-1 ml-auto">
          <a
            :title="copyright_popup_text"
            href="mailto:gagandaroach@gmail.com?Subject=Hello Gagan, I like daroach.net!"
            target="_blank"
            ><span>Gagan Daroach &copy; 2019-2021</span></a
          >
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      source_code_popup_text:
        "Complete full stack code example for this website are available on Github. Also see the complete development history of this website, one changed line at a time.",
      source_code_link_title: "Website Source Code",
      copyright_popup_text: "Questions, Comments, or Concerns? Email me :).",
    };
  },
});
</script>

<style></style>
