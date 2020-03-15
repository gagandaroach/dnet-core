<template>
  <b-container>
    <b-card
      bg-variant="dark"
      border-variant="dark"
      class="mb-2 main_container text-white"
      img-src="https://media1.tenor.com/images/104aa49aa731ad6e0205baf8bfa22c4c/tenor.gif?itemid=5832923"
      img-alt="Cookie GIF"
      :img-right="right"
    >
      <b-row no-gutters>
        <b-container class="align">
          <b-row align-v="center">
            <b-col>
              <b-card-title>
                {{ title }}
              </b-card-title>
              <b-card-text class="">
                {{ text }}
              </b-card-text>
              <b-card-text class="">
                <b-row align-h="end" class="mr-3">
                  - Gagan Daroach
                </b-row>
              </b-card-text>
            </b-col>
          </b-row>
          <b-row class="text-center mt-5" align-v="end">
            <b-col>
              <b-button href="" class="" variant="primary">
                {{ btnAcceptText }}
              </b-button>
            </b-col>
          </b-row>
          <b-row class="text-center mt-1" align-v="end">
            <b-col>
              <b-button href="" class="text-white" size="sm" variant="link">
                {{ btnDenyText }}
              </b-button>
            </b-col>
          </b-row>
        </b-container>
      </b-row>
    </b-card>
  </b-container>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Cookie Consent'
    },
    btnDenyText: {
      type: String,
      default: 'No Thanks'
    },
    btnAcceptText: {
      type: String,
      default: 'I want the cookie!'
    },
    right: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    VisitorCount () {
      return this.$store.state.visitor.visitorCount
    },
    text () {
      return `In the source code for this website, I wrote functionality to collect statistics on site usage. This information can help me prioritize my areas of development focus. Would you like to join ${this.VisitorCount} other visitors in accepting I place a cookie in your browser? `
    }
  }
}
</script>

<style>
.main_container {
  max-height: 50vh;
}
</style>
