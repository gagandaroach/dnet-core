<template>
  <v-container>
    <CardList :items="SiteFeatures" :title="FeatureHeadline" />
    <br>
    <CardList :items="SiteDocket" :title="DocketHeadline" />
    <br>
  </v-container>
</template>

<script>
import CardList from '~/components/mc/CardList.vue'

export default {
  components: {
    CardList
  },
  data () {
    return {
      FeatureHeadline: 'Current Features',
      DocketHeadline: 'In Progress Features',
      SiteFeatures: ['OpenSource Nuxtjs Server VueJS Project', 'A Vanilla Minecraft Server'],
      SiteDocket: ['Cookie Api To Track Unique Visitors', 'About Me Page!', 'Migrate Features from Old Site', 'Information About Web Services Running on Daroach.net', 'Business Inquiries Page']
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
