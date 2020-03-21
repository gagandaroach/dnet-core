<template>
  <b-container>
    <b-card
      bg-variant="dark"
      border-variant="dark"
      class="mb-2 main_container text-white"
      img-src="https://media1.tenor.com/images/104aa49aa731ad6e0205baf8bfa22c4c/tenor.gif?itemid=5832923"
      img-alt="Cookie GIF"
      :img-right="right"
      img-height="350"
      img-width="auto"
    >
      <!-- https://tenor.com/view/cookie-hungry-gif-5832923 cookie img source -->
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
          <div v-if="getDisabled">
            <b-row class="text-center mt-5" align-v="end">
              <b-col>
                Sure! I just started baking a cookie in the homelab... Please wait.
              </b-col>
            </b-row>
          </div>
          <div v-else>
            <b-row class="text-center mt-5" align-v="end">
              <b-col>
                <b-button class="" variant="primary" @click="createCookieForMe()">
                  {{ btnAcceptText }}
                </b-button>
              </b-col>
            </b-row>
            <b-row class="text-center mt-1" align-v="end">
              <b-col>
                <b-button class="text-white" size="sm" variant="link" @click="hideAlert()">
                  {{ btnDenyText }}
                </b-button>
              </b-col>
            </b-row>
          </div>
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
  data () {
    return {
      getDisabled: false
    }
  },
  computed: {
    VisitorCount () {
      return this.$store.state.visitor.visitorCount
    },
    text () {
      return `In the source code for DAROACH.NET , I wrote functionality to collect statistics on site usage. For example, how often I serve different web pages to each client. This information can help me prioritize areas of development focus. Would you like to join ${this.VisitorCount} other visitors in accepting I place a cookie in your browser? `
    }
  },
  methods: {
    async createCookieForMe () {
      this.getDisabled = true
      const res = await this.$axios.post('visitor/cookie', {
        platform: navigator.platform,
        language: navigator.language,
        userAgent: navigator.userAgent
      }, {})
      const ns10Years = 60 * 60 * 24 * 365 * 10
      const id = this.$cookies.set('DNET_VISITOR_ID', res.data.id, {
        domain: 'daroach.net',
        expires: ns10Years
      })
      this.hideAlert()
      return id
    },
    hideAlert () {
      return this.$store.dispatch('visitor/hideAlert', true)
    }
  }
}
</script>

<style lang="SCSS">
/* @include media-breakpoint-up(md) { } */
</style>
