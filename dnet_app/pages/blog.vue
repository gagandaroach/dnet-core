<template>
  <section>
    <Navbar />
    <PageTitle title="Blog Page" description="A Work in Progress" />
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

<style scoped>
.main {
  margin-top: 40px;
  text-align: center;
}
</style>
