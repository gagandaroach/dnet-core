<template>
  <div>
    <div>
      <PageTitle
        :title="PageTitle"
        :description="Description"
        :padding-bottom="20"
        background-color="#00000000"
        text-color="#FFF"
      />
      <b-container>
        <b-alert show variant="primary" class="mt-3">
          {{ alert }}
        </b-alert>
        <b-row>
          <b-col>
            <CardList />
          </b-col>
          <b-col>
            <Card />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'
import CardList from '~/components/cards/CardList.vue'
import Card from '~/components/cards/Card.vue'

export default {
  layout: 'default',
  components: {
    PageTitle,
    CardList,
    Card
  },
  data () {
    return {
      title: 'Welcome',
      PageTitle: 'Welcome to Daroach.net',
      Description: 'Thanks for connecting to my homelab!',
      alert: 'Hello. My name is Gagan Daroach, and you have used the power of the internet to connect to a box in my apartment. Thanks for coming through! I am growing this website to contain more fun and informative things every day. Do feel free to explore around, and poke on every button.'
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
</style>
