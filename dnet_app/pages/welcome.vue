<template>
  <section>
    <Navbar />
    <PageTitle
      title="Welcome"
      description="Thanks for connecting to my homelab!"
      :padding-bottom="10"
    />
    <BetaTag />
    <CardDeck />
  </section>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import PageTitle from '~/components/PageTitle.vue'
import CardDeck from '~/components/welcome/card_deck.vue'
import BetaTag from '~/components/betatag.vue'

export default {
  components: {
    Navbar,
    PageTitle,
    CardDeck,
    BetaTag
  }
}
</script>

<style scoped></style>
