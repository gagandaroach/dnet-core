<template>
  <section>
    <b-container fluid>
      <b-container class="text-center">
        <h1 class="display-4">Whats on daroach.net?</h1>
      </b-container>
      <b-card-group class="mt-3" columns>
        <AboutMeCard />
        <HomelabCard />
        <MinecraftCard />
      </b-card-group>
    </b-container>
  </section>
</template>

<script>
import MinecraftCard from '~/components/welcome/cards/mc_card.vue'
import AboutMeCard from '~/components/welcome/cards/aboutme.vue'
import HomelabCard from '~/components/welcome/cards/homelab.vue'

export default {
  components: {
    MinecraftCard,
    AboutMeCard,
    HomelabCard
  }
}
</script>

<style scoped></style>
