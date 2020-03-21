<template>
  <div>
    <v-row class="bg-primary text-light">
      <v-col>
        <v-container>
          <h1>{{ header }}</h1>
        </v-container>
        <div v-for="(post, index) in posts" :key="index">
          <WallItem :content="post.content" :author="post.author" />
        </div>
      </v-col>
    </v-row>
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
          author: 'anonymous',
          content: 'this site is great!'
        },
        {
          author: '#3',
          content: 'the start of something gr8'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
