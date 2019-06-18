<template>
  <section>
    <Navbar />
    <PageTitle
      title="Welcome to Daroach.net"
      description="Website Features"
      :padding-bottom="10"
    />
    <CardDeck />
  </section>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import PageTitle from '~/components/PageTitle.vue'
import CardDeck from '~/components/welcome/card_deck.vue'

export default {
  components: {
    Navbar,
    PageTitle,
    CardDeck
  }
}
</script>

<style scoped></style>
