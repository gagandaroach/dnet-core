<template>
  <div>
    <b-carousel
      id="MinecraftCarousel"
      :interval="4000"
      controls
      fade
      background="#5c473c"
      :img-width="1920"
      :img-height="1080"
    >
      <b-carousel-slide
        caption="A Great Community"
        text="Halfway House filled with enough goods to get you started."
        img-src="~/assets/mc/community.png"
      ></b-carousel-slide>

      <b-carousel-slide
        text="gagany's tower"
        img-src="~/assets/mc/gagany.png"
      ></b-carousel-slide>

      <b-carousel-slide
        text="razikREVAMPED's home"
        img-src="~/assets/mc/razikREVAMPED.png"
      ></b-carousel-slide>

      <b-carousel-slide
        text="Shaido85's mansion"
        img-src="~/assets/mc/Shaido85.png"
      ></b-carousel-slide>
    </b-carousel>

    <br />
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
