<template>
  <section>
    <Navbar />
    <PageTitle
      title="Welcome"
      description="The Coolest Website on the Internet"
      padding-bottom="10"
    />
    <hr />
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
