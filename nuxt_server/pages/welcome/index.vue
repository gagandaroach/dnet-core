<template>
  <div id="body">
    <VisitorCookie v-if="showCookie" />
    <PageTitle
      :title="PageTitle"
      :description="Description"
      :padding-bottom="20"
      background-color="#00000000"
      text-color="#FFF"
    />
    <div class="text-center text-white">
      <b-container class="text-white mb-2">
        <b-row>
          <p>
            {{ intro }}
          </p>
        </b-row>
      </b-container>

      <Wall />

      <b-container>
        <b-row>
          <b-col>
            <h2>whats coming?</h2>
            <p>I have a large vision for this website. Everyday a little more of that vision becomes real. Heres a rough idea of what I have in store for the future. In order of priority. All the code changes are tracked on github at the source code link the footer.</p>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="">
            <b-card no-body bg-variant="dark">
              <b-list-group v-for="(item, index) in future" :key="index" flush>
                <b-list-group-item class="bg-dark text-white">
                  <b-form-checkbox
                    v-model="item.done"
                  >
                    {{ item.text }}
                  </b-form-checkbox>
                </b-list-group-item>
              </b-list-group>
            </b-card>
          </b-col>
        </b-row>
      </b-container>

      <b-container>
        <b-row class="mt-4">
          <b-col>
            <h2>whats on daroach.net?</h2>
            <p>Honestly nothing that is too up to date. Everything is an active work in progress. You can see what i'm working on at the bottom of this page.</p>
          </b-col>
        </b-row>
        <b-row class="mt-2 justify-content-center">
          <b-col md="6" lg="4">
            <Card
              title="The Homelab"
              img-src="/imgs/daroachtech_servers.png"
              text="See the hardware that just served this webpage. Also read about the software stack used to build this page and send it to your screen."
              btn-text="View About Page"
              btn-href="/about/homelab"
            />
          </b-col>
          <b-col md="6" lg="4">
            <Card
              title="The Hoster"
              img-src="/imgs/gagan_daroach_selfie.jpeg"
              text="Learn about who I am and what I do."
              btn-text="View About Page"
              btn-href="/about/me"
            />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'
import Wall from '~/components/wall/Main.vue'
import Card from '~/components/cards/Card.vue'
import VisitorCookie from '~/components/VisitorCookie.vue'

export default {
  layout: 'default',
  components: {
    PageTitle,
    Card,
    VisitorCookie,
    Wall
  },
  data () {
    return {
      title: 'daroach.net'.toUpperCase(),
      // Description: 'Thanks for connecting to my homelab!',
      intro: 'Hello. My name is Gagan Daroach, and you have used the power of the internet to connect to a box in my apartment. Thanks for coming through! I am growing this website to be both a reflection of myself and a share of my learnings and experiences. Do feel free to explore around, and poke on every button.',
      future: [
        { text: 'welcome page, base website framework', done: true },
        { text: 'connect with api.daroach.net, start tracking each page hit (anonymous statistics)', done: true },
        { text: 'add visitor cookie to track unique visitor information', done: false },
        { text: 'update the about homelab page with current hardware', done: false },
        { text: 'a fun analytics dashboard for site traffic', done: false },
        { text: 'add a scrum board like page showing site progress', done: false },
        { text: 'some sort of blog sharing the things i\'ve learned setting all this up', done: false },
        { text: 'a page my sharing my ai research projects', done: false },
        { text: 'the wall - a place for anyone to leave a comment :)', done: false }
      ],
      showAlert: true
    }
  },
  computed: {
    PageTitle () {
      const text = this.$store.getters.welcome
      return text
    },
    Description () {
      const text = this.$store.getters.description
      return text
    },
    showCookie () {
      const hideAlert = this.$store.state.visitor.hideAlert
      return !hideAlert
    }
  },
  head () {
    return {
      title: this.title
    }
  }
}
</script>

<style>
#body {
  background-color: var(--primary);
  padding-bottom: 40px;
}
</style>
