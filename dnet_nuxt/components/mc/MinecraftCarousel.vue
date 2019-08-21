// Gagan Daroach © 2019

<template>
  <div>
    <v-carousel
      id="MinecraftCarousel"
      interval="4000"
      cycle
      hide-delimiters
      background="#5c473c"
      :img-width="1920"
      :img-height="1080"
    >
      <v-carousel-item
        caption="A Great Community"
        text="Halfway House filled with enough goods to get you started."
        :src="require('~/assets/mc/community.png')"
      />

      <v-carousel-item
        text="gagany's tower"
        :src="require('~/assets/mc/gagany.png')"
      />

      <v-carousel-item
        text="razikREVAMPED's home"
        :src="require('~/assets/mc/razikREVAMPED.png')"
      />

      <v-carousel-item
        text="Shaido85's mansion"
        :src="require('~/assets/mc/Shaido85.png')"
      />
    </v-carousel>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
#MinecraftCarousel {
  text-shadow: 1px 1px 2px #333;
}
</style>
