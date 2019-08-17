<template>
  <section>
    <PageTitle
      title="Daroach.net Minecraft"
      description="A fun place to procrastinate your life's responsibilities."
      background="#56962c"
    />
    <br>
    <CardList :items="serverRules" title="Server Rules" />
    <br>
    <CardList :items="worldDetails" title="World Details" />
    <br>
    <CardList :items="serverNerdStats" title="Server Nerd Stats" />
    <br>
    <v-card>
      <v-card-title>
        <div>How to Connect</div>
      </v-card-title>
      <v-img
        :src="require('assets/mc/server_info.png')"
      />
      <v-card-text>
        Just input the Server Address:
        <code>daroach.net</code>
      </v-card-text>
    </v-card>
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
        'Cut down trees entirely. No dangling logs in the air.',
        'No animal farms with more than 50 animals.'
      ],
      worldDetails: [
        'Vanilla Minecraft',
        'Always the Official latest Version',
        'Large Biomes',
        'Fun & Cool Players'
      ],
      serverNerdStats: [
        'Automatic server backups every fifteen minutes.',
        'Always the Official latest Version',
        'An instantiation of the <a href="https://hub.docker.com/r/itzg/minecraft-server/"><code>itzg/minecraft-server</code></a> docker container.',
        '32GB of dedicated RAM space.',
        'Dual Intel Xeon L5520 @ 2.27GHz'
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
