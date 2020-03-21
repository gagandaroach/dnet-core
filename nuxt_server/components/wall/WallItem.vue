<template>
  <div>
    <v-row class="bg-primary text-light">
      <v-col>
        <v-container fluid>
          <p>{{ content }}</p>
          <p>by {{ author }}</p>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: String,
      default: '#420'
    },
    content: {
      type: String,
      default: 'default content - lorem orem leopetn dipsim blah blah'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
