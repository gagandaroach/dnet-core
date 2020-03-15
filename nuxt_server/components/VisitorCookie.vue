<template>
  <div>
    <b-container>
      <b-card
        :title="title"
        bg-variant="dark"
        class="mb-2 main_container"
      >
        <b-card-text>
          {{ text }}
          Would you like to join {{ VisitorCount }} other visitors of the page to assist with usage and feature development.
        </b-card-text>
        <b-container fluid class="" />
        <b-button :href="btnHref" variant="primary">
          {{ btnText }}
        </b-button>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Cookie Consent'
    },
    text: {
      type: String,
      default: ''
    },
    btnVariant: {
      type: String,
      default: 'primary'
    },
    btnHref: {
      type: String,
      default: '#'
    },
    btnText: {
      type: String,
      default: 'I want the cookie!'
    }
  },
  computed: {
    VisitorCount () {
      return this.$store.state.visitor.visitorCount
    }
  }
}
</script>

<style>
.main_container {
  min-height: 40vh;
}
</style>
