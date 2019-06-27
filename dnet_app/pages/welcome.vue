<template>
  <section class="body">
    <Navbar />
    <PageTitle
      title="Welcome"
      description="Thanks for connecting to my homelab!"
      :padding-bottom="10"
    />
    <BetaTag />
    <Header text="Whats on daroach.net?" />
    <CardDeck />
  </section>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import BetaTag from '~/components/betatag.vue'
import PageTitle from '~/components/PageTitle.vue'
import Header from '~/components/welcome/header.vue'
import CardDeck from '~/components/welcome/card_deck.vue'

export default {
  components: {
    Navbar,
    PageTitle,
    CardDeck,
    BetaTag,
    Header
  }
}
</script>

<style scoped>
.body {
  background-color: var(--white);
}
</style>
