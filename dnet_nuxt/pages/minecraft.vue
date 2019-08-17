<template>
  <section>
    <PageTitle
      title="Daroach.net Minecraft"
      description="A fun place to procrastinate your life's responsibilities."
      background="#56962c"
    />
    <br>
    <CardList :items="serverRules" title="Server Rules" />
  </section>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'
import CardList from '~/components/mc/CardList.vue'
// import MinecraftCarousel from '~/components/mc/MinecraftCarousel.vue'
export default {
  components: {
    PageTitle,
    CardList
    // MinecraftCarousel
  },
  data () {
    return {
      serverRules: [
        'The Golden Rule Treat your neighbor how you would treat yourself.',
        'So NO griefing, stealing, or uncalled-for player killing!',
        'Cut down trees entirely. No dangling logs in the air.'
      ]
    }
  }
}
</script>

<style scoped>
#rules {
  text-align: center;
}
.h1 {
  font-family: 'Minecraft Regular', Courier, monospace;
}
.body {
  background-image: url('~assets/mc/dirt_background.png');
  background-repeat: repeat;
  text-align: center;
  font-family: 'Roboto', sans-serif;
}
#PageTitle {
  background-image: url('~assets/mc/dirt_background.png');
  background-repeat: repeat;
  font-family: 'Minecraft Regular', Courier, monospace;
}
.themed_dark {
  background-color: var(--dark);
  color: white;
}
</style>
