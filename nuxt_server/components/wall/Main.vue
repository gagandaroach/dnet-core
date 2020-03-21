<template>
  <div>
    <b-row class="bg-primary text-light justify-content-center">
      <b-col>
        <b-container>
          <h1>{{ header }}</h1>
        </b-container>
        <b-card-group>
          <WallItem
            v-for="(post, index) in posts"
            :key="index"
            :content="post.content"
            :author="post.author"
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
      posts: [
        {
          author: -1,
          content: 'this site is great!'
        },
        {
          author: 3,
          content: 'the start of something gr8'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
