<template>
  <div>
    <b-carousel
      id="MinecraftCarousel"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#5c473c"
      img-width="1920"
      img-height="1080"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <!-- <b-carousel-slide
        caption="A Great Community"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide> -->

      <b-carousel-slide
        caption="A Great Community"
        text="Halfway House filled with enough goods to get you started."
        img-src="~/assets/mc/community.png"
      ></b-carousel-slide>

      <b-carousel-slide
        caption="gagany's tower"
        img-src="~/assets/mc/gagany.png"
      ></b-carousel-slide>

      <b-carousel-slide
        caption="razikREVAMPED's home"
        img-src="~/assets/mc/razikREVAMPED.png"
      ></b-carousel-slide>

      <b-carousel-slide
        caption="Shaido85's mansion"
        img-src="~/assets/mc/Shaido85.png"
      ></b-carousel-slide>
    </b-carousel>

    <br />
    <!-- <p class="mt-4">
      Slide #: {{ slide }}<br />
      Sliding: {{ sliding }}
    </p> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }
}
</script>
<style scoped>
#MinecraftCarousel {
  text-shadow: 1px 1px 2px #333;
}
</style>
