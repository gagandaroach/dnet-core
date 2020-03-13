<template>
  <div>
    <GaganJumbotron />
  </div>
</template>

<script>
import GaganJumbotron from '~/components/about/GaganJumbotron.vue'
export default {
  layout: 'about',
  components: {
    GaganJumbotron
  }
}
</script>

<style lang="scss" scoped>
tabs {
  background-color: var(--secondary);
}
</style>
