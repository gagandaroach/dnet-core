<template>
  <section>
    <b-container fluid>
      <b-jumbotron>
        <b-col md="12" lg="8" offset-lg="2">
          <h1>Daroach.net Maintainer and Host</h1>
        </b-col>
        <br>
        <b-row>
          <b-col md="6" lg="4" offset-lg="2">
            <p class="lead">
              Gagandeep Bishamber Daroach
            </p>
            <hr class="my-2">
            <p>
              I am an aspiring Software Engineer, hoping to
              <a
                href="https://youtu.be/J-GVd_HLlps?t=32"
              >make the world a better place</a>. With this website, I hope to create a place for people to share
              stories, knowledge, information, and data. Right now, this website
              is running on
              <a
                href="https://www.instagram.com/p/BtSgNa8ni0i/?utm_source=ig_web_options_share_sheet"
              >a server</a>
              in my apartment.
            </p>
            <br>
            <p class="lead">
              Follow Me on Social Media
            </p>
            <hr class="my-2">
            <b-button-group fluid>
              <b-button
                id="github"
                type="light"
                href="https://github.com/gagandaroach"
              >
                Github
              </b-button>
              <b-button
                id="linkedin"
                type="light"
                href="https://www.linkedin.com/in/gdaroach/"
              >
                LinkedIn
              </b-button>
              <b-button
                id="twitter"
                type="light"
                href="https://twitter.com/gagany1"
              >
                Twitter
              </b-button>
              <b-button
                id="instagram"
                type="light"
                href="https://www.instagram.com/galapagosislands/"
              >
                Instagram
              </b-button>
              <b-button
                id="facebook"
                type="light"
                href="https://www.facebook.com/gagany6"
              >
                Facebook
              </b-button>
            </b-button-group>
          </b-col>
          <b-col md="6" lg="4">
            <b-img
              thumbnail
              fluid
              src="~/assets/outside_home_tree.jpeg"
            />
          </b-col>
        </b-row>
      </b-jumbotron>
    </b-container>
  </section>
</template>

<script>
export default {
  components: {}
}
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
</style>
