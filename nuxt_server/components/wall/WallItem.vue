<template>
  <b-card
    bg-variant="dark"
    class="m-1"
    no-body
  >
    <b-card-text class="text-left p-3">
      {{ text }}
    </b-card-text>
    <b-card-footer class="text-right">
      {{ tagLine }}
    </b-card-footer>
  </b-card>
</template>

<script>
export default {
  props: {
    post: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    author () {
      return this.post[1]
    },
    text () {
      return this.post[2]
    },
    tagLine () {
      if (isNaN(this.author)) {
        return this.author
      } else if (this.author === -1) {
        return 'anonymous'
      } else {
        return 'Visitor #' + this.author
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
