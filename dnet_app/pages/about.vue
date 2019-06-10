<template>
  <section>
    <Navbar />
    <PageTitle title="About" description="" padding-bottom="10" />

    <AboutTabs />

    <hr />
  </section>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import PageTitle from '~/components/PageTitle.vue'
import AboutTabs from '~/components/about/AboutTabs.vue'

export default {
  components: {
    Navbar,
    PageTitle,
    AboutTabs
  }
}
</script>

<style scoped></style>
