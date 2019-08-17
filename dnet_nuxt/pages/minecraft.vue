<template>
  <section>
    <PageTitle
      title="Daroach.net Minecraft"
      description="A fun place to procrastinate your life's responsibilities."
      background="#56962c"
    />
    <br>
    <v-card>
      <v-card-title primary-title>
        Server Rules
      </v-card-title>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>The Golden Rule Treat your neighbor how you would treat yourself.</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>So NO griefing, stealing, or uncalled-for player killing!</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Cut down trees entirely. No dangling logs in the air.</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </section>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'
// import MinecraftCarousel from '~/components/mc/MinecraftCarousel.vue'
export default {
  components: {
    PageTitle
    // MinecraftCarousel
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
