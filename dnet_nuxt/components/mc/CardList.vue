<template>
  <v-card>
    <v-card-title primary-title v-text="title" />

    <v-list-item v-for="(item, i) in items" :key="i">
      <v-list-item-content>
        <v-list-item-title v-html="item" />
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  props: {
    items: {
      default: [
        'List item 1',
        'List item 2',
        'List item 3'
      ]
    },
    title: {
      default: 'default title'
    }
  }
}
</script>

<style>
</style>
