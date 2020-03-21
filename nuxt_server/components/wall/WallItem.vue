<template>
  <b-card
    bg-variant="dark"
    class="m-1"
    no-body
  >
    <b-card-text class="text-left p-3">
      {{ content }}
    </b-card-text>
    <b-card-footer class="text-right">
      {{ tagLine }}
    </b-card-footer>
  </b-card>
</template>

<script>
export default {
  props: {
    author: {
      type: Number,
      default: -1
    },
    content: {
      type: String,
      default: 'default content - lorem orem leopetn dipsim blah blah'
    }
  },
  computed: {
    tagLine () {
      if (this.author === -1) {
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
