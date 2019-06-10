<template>
  <div>
    <b-tabs nav-class="bg-secondary" content-class="mt-3" align="center">
      <b-tab title="The Homelab" title-link-class="btn-outline-light" active
        ><HomeLab
      /></b-tab>
      <b-tab title="The Hoster" title-link-class="btn-outline-light"
        ><AboutMe
      /></b-tab>
      <b-tab title="Site History" title-link-class="btn-outline-light"
        ><SiteHistory
      /></b-tab>
    </b-tabs>
  </div>
</template>

<script>
import AboutMe from '~/components/about/AboutMe.vue'
import HomeLab from '~/components/about/HomeLab.vue'
import SiteHistory from '~/components/about/SiteHistory.vue'

export default {
  components: {
    AboutMe,
    HomeLab,
    SiteHistory
  }
}
</script>

<style scoped></style>
