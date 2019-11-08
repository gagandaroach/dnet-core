<template>
  <div id="body">
    <div>
      <PageTitle
        :title="PageTitle"
        :description="Description"
        :padding-bottom="20"
        background-color="#00000000"
        text-color="#FFF"
      />
        <b-row>
          <b-container class="">
            <b-jumbotron bg-variant="primary" text-variant="white" border-variant="primary" class="text-center">
              <template v-slot:lead>
                {{ alert }}
              </template>
            </b-jumbotron>
          </b-container>
        </b-row>
      <b-container>
        <b-row>
          <b-col class="text-center text-white">
          <h2>Pages on daroach.net</h2>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <Card
              title="The Homelab"
              img-src="/imgs/daroachtech_servers.png"
              text="See the hardware that just served this webpage. Also read about the software stack used to build this page and send it to your screen."
              btn-text="View Page"
              btn-href="/about/me"
            />
          </b-col>
          <b-col>
            <Card
              title="About Me"
              img-src="/imgs/gagan_daroach_selfie.jpeg"
              text="Learn about who I am and what I do."
              btn-text="View Page"
              btn-href="/about/me"
            />
          </b-col>
        </b-row>
        <CardList />
      </b-container>
    </div>
  </div>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'
import Card from '~/components/cards/Card.vue'

export default {
  layout: 'default',
  components: {
    PageTitle,
    Card
  },
  data () {
    return {
      title: 'Welcome to daroach.net',
      PageTitle: 'welcome to daroach.net',
      // Description: 'Thanks for connecting to my homelab!',
      Description: '',
      alert: 'Hello. My name is Gagan Daroach, and you have used the power of the internet to connect to a box in my apartment. Thanks for coming through! I am growing this website to be both a reflection of myself and a share of my learnings and experiences. Do feel free to explore around, and poke on every button.'
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
}
</style>
