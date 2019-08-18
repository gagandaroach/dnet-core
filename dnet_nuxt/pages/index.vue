<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm12
      md12
      lg10
    >
      <Welcome />
      <WelcomeCard />
    </v-flex>
  </v-layout>
</template>

<script>
import Welcome from '~/components/Welcome.vue'
import WelcomeCard from '~/components/WelcomeCard.vue'

export default {
  components: {
    Welcome,
    WelcomeCard
  }
}
</script>
