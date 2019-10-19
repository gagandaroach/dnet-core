// Gagan Daroach © 2019

<template>
  <v-card :class="width" outlined>
    <v-card-title class="justify-center" v-text="title" />
    <v-divider />
    <v-list>
      <v-list-item v-for="(item, i) in items" :key="i">
        <v-list-item-content>
          <v-list-item-action-text v-html="item" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default () {
        return [
          'List item 1',
          'List item 2',
          'List item 3'
        ]
      }
    },
    width: {
      type: String,
      default: 'col-12'
    },
    title: {
      type: String,
      default: 'default title'
    }
  }
}
</script>

<style>
</style>
