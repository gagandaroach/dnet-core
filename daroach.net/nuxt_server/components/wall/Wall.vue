<template>
  <div>
    <b-row class="bg-primary text-light justify-content-center">
      <b-col>
        <b-container>
          <h1>{{ header }}</h1>
        </b-container>
        <b-card-group>
          <WallItem
            v-for="post in posts"
            :key="post[0]"
            :post="post"
          />
        </b-card-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import WallItem from '~/components/wall/WallItem.vue'

export default {
  components: {
    WallItem
  },
  data () {
    return {
      header: 'The Wall',
      posts: []
    }
  },
  mounted () {
    this.getPosts()
  },
  methods: {
    getPosts () {
      const app = this
      app.$axios.get('https://api.daroach.net/wall/posts')
        .then(response => (app.posts = response.data))
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
