<template>
  <section>
    <b-container
      ><b-card-group deck class="mt-3">
        <MinecraftCard />
      </b-card-group>
    </b-container>
  </section>
</template>

<script>
import MinecraftCard from '~/components/welcome/cards/mc_card.vue'

export default {
  components: {
    MinecraftCard
  }
}
</script>

<style scoped></style>
