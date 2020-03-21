<template>
  <div>
    <b-row class="bg-primary text-light m-3">
      <b-col>
        <b-card
          fluid
          bg-variant="dark"
          no-body
        >
          <b-card-text class="p-3 text-left">{{ content }}</b-card-text>
          <b-card-footer class="text-right">{{ tagLine }}</b-card-footer>
        </b-card>
      </b-col>
    </b-row>
  </div>
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
