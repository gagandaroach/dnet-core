<template>
  <section>
    <Navbar />
    <PageTitle title="About" description="A Work In Progress" />
  </section>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import PageTitle from '~/components/PageTitle.vue'

export default {
  components: {
    Navbar,
    PageTitle
  }
}
</script>

<style scoped></style>
