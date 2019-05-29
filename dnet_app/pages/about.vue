<template>
  <section>
    <Navbar />
    <br />
    <PageTitle
      title="About"
      description="Learn about this site's hoster, features, and history."
    />
    <b-container fluid>
      <b-jumbotron>
        <b-col md="12" lg="8" offset-lg="2">
          <h1>Gagandeep Bishamber Daroach</h1>
        </b-col>
        <br />
        <b-row>
          <b-col md="6" lg="4" offset-lg="2">
            <p class="lead">Daroach.net Maintainer and Host</p>
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
            <br />
            <p class="lead">Follow Me on Social Media</p>
            <hr class="my-2" />
            <b-button-group fluid>
              <b-button
                id="github"
                type="light"
                href="https://github.com/gagandaroach"
                >Github</b-button
              >
              <b-button
                id="linkedin"
                type="light"
                href="https://www.linkedin.com/in/gdaroach/"
                >LinkedIn</b-button
              >
              <b-button
                id="twitter"
                type="light"
                href="https://twitter.com/gagany1"
                >Twitter</b-button
              >
              <b-button
                id="instagram"
                type="light"
                href="https://www.instagram.com/galapagosislands/"
                >Instagram</b-button
              >
              <b-button
                id="facebook"
                type="light"
                href="https://www.facebook.com/gagany6"
                >Facebook</b-button
              >
            </b-button-group>
          </b-col>
          <b-col md="6" lg="4">
            <b-img
              thumbnail
              fluid
              src="~/assets/outside_home_tree.jpeg"
            ></b-img>
          </b-col>
        </b-row>
      </b-jumbotron>
    </b-container>

    <!-- <div class="container-fluid text-center">
      <div class="jumbotron">
        <h1 class="display-7">I am the result of two wonderful parents.</h1>

        <div class="container">
          <br />
          <div class="row">
            <div class="col-sm-6">
              <div class="card">
                <div class="card-header">
                  <h5>Gurdeep Daroach</h5>
                </div>
                <a href="https://www.facebook.com/gurdeep.daroach">
                  <img
                    class="card-img-top"
                    src="/static/images/mom.jpg"
                    alt="My Mother, Gurdeep Daroach"
                  />
                </a>
                <figcaption class="figure-caption text-right">
                  Photo by Gagan Daroach&nbsp;
                </figcaption>
                <div class="card-body">
                  <p class="card-text">The most loving mother in the world.</p>
                </div>
              </div>
            </div>
            <br />
            <div class="col-sm-6">
              <div class="card">
                <div class="card-header">
                  <h5>Gian Daroach</h5>
                </div>
                <a
                  href="https://www.aurorahealthcare.org/doctors/dr-gian-c-daroach-md"
                >
                  <img
                    class="card-img-top"
                    src="/static/images/dad.jpg"
                    alt="Picture of Site Maintainer and Host, Gagan Daroach"
                  />
                </a>
                <figcaption class="figure-caption text-right">
                  Photo by Gagan Daroach&nbsp;
                </figcaption>
                <div class="card-body">
                  <p class="card-text">
                    A kind man who set the bar at the highest possible position.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <!-- <div class="container-fluid text-center">
      <div class="jumbotron">
        <div class="container">
          <h1>Where do I spend my time?</h1>
          <br />
          <div class="row">
            <div class>
              <div class="card">
                <div class="card-header">
                  <h5>Milwaukee, Wisconsin</h5>
                </div>
                <a href="https://en.wikipedia.org/wiki/Milwaukee">
                  <img
                    class="card-img-top"
                    src="~/assets/milwaukee.JPG"
                    alt="Milwaukee Wisconsin"
                  />
                </a>
                <figcaption class="figure-caption text-right">
                  Photo by Gagan Daroach&nbsp;
                </figcaption>
                <div class="card-body">
                  <p class="card-text">
                    I currently live in Milwaukee, Wisconsin. I love this city,
                    and I love this state.
                  </p>
                </div>
              </div>
            </div>
            <br />
          </div>
          <br />
          <div class="row">
            <div class="col-sm-6">
              <div class="card">
                <div class="card-header">
                  <h5>Milwaukee School of Engineering</h5>
                </div>
                <a href="https://msoe.edu">
                  <img
                    class="card-img-top"
                    src="https://s3.amazonaws.com/msoe/files/resources/msoe-student-life-and-campus-center-exterior-2.jpg"
                    alt="Milwaukee School of Engineering Campus Center"
                  />
                </a>
                <figcaption class="figure-caption text-right">
                  Image from msoe.edu&nbsp;
                </figcaption>
                <div class="card-body">
                  <p class="card-text">
                    My current school, here I am pursuing an undergraduate
                    degree in Software Engineering. The Milwaukee School of
                    Engineering is, in my own words, an institution whose best
                    characteristic is an enviroment that allows for students to
                    focus on their engineering education.
                  </p>
                </div>
              </div>
            </div>
            <br />
            <div class="col-sm-6">
              <div class="card">
                <div class="card-header">
                  <h5>Cognex Corporation</h5>
                </div>
                <a href="https://cognex.com">
                  <img
                    class="card-img-top"
                    src="https://www.cognex.com/library/media/products/in-sight-2000-vision-sensors/features/is2000_explode2.jpg?h=562&w=1000&la=en&hash=12A9D8F4DCF56F62352D98DAD8092A663819B28F"
                    alt="Cognex Merlin Camera Exploded"
                  />
                </a>
                <figcaption class="figure-caption text-right">
                  Image from cognex.com&nbsp;
                </figcaption>
                <div class="card-body">
                  <p class="card-text">
                    My current workplace, Cognex is a camera company full of
                    exceptionally nice, hard working nerds. Here I work as a
                    Software Engineering Intern.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <!-- End Gagan Daroach Content -->
  </section>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import PageTitle from '~/components/PageTitle.vue'
export default {
  components: {
    Navbar,
    PageTitle
  }
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
