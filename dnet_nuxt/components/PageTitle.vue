// Gagan Daroach © 2019

<template>
  <section id="PageTitle" :style="style">
    <v-container>
      <h1 class="display-3">
        {{ title }}
      </h1>
      <p class="lead">
        {{ description }}
      </p>
    </v-container>
  </section>
</template>

<script>
export default {
  components: {},
  props: {
    title: {
      type: String,
      default: `Page-Title`
    },
    description: {
      type: String,
      default: 'Page Description blah blah blah'
    },
    textColor: {
      type: String,
      default: `white`
    },
    paddingTop: {
      type: Number,
      default: 40
    },
    paddingBottom: {
      type: Number,
      default: 40
    }
  },
  computed: {
    style () {
      const styleText =
        'color: ' +
        this.textColor +
        ';padding-top: ' +
        this.paddingTop +
        'px; padding-bottom: ' +
        this.paddingBottom +
        'px; text-align: center'
      return styleText
    }
  }
}
</script>

<style scoped>
/* h1 {
  font-family: 'Bungee', sans-serif;
}
p {
  font-family: 'Roboto', sans-serif;
} */
</style>
