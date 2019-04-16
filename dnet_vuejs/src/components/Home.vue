<template>
  <div>
    <md-content>
      <p class="text-justify">
        A warm welcome :). My name is Gagan Daroach, and thanks for visiting my website. Daroach.net has been running in
        <a
          href="https://www.instagram.com/p/BtSgNa8ni0i/?utm_source=ig_web_button_share_sheet"
        >my apartment</a>
        <span class>
          for
          <a
            href="https://github.com/gagandaroach/daroachnet/"
            id="tracka"
          >{{ time_alive }}</a> days.
        </span>
      </p>
      <p>
        I am an aspiring Software Engineer, hoping to
        <a
          href="https://youtu.be/J-GVd_HLlps?t=32"
        >make the world a better place</a>. With this website, I hope to create a place for people to
        share stories, knowledge, information, and data.
      </p>

      <p>
        Everything you see here is a work in progress.
      </p>
    </md-content>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    msg: String
  },
  computed: {
    time_alive() {
      let website_birth_day = new Date("Dec 16, 2018");
      return parseInt((Date.now() - website_birth_day) / 1000 / 60 / 60 / 24);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.md-content {
  padding: 40px;
}
a {
  text-decoration-color: white;
}
</style>
