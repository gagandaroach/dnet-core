// Gagan Daroach © 2019

<template>
  <v-card :class="width" outlined>
    <v-card-title class="justify-center" v-text="title" />
    <v-divider />
    <v-list>
      <v-list-item v-for="(item, i) in items" :key="i">
        <v-list-item-content>
          <v-list-item-text v-html="item" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
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
    width: {
      default: 'col-12'
    },
    title: {
      default: 'default title'
    }
  }
}
</script>

<style>
</style>
