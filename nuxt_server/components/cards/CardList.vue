<template>
  <div>
    <b-card
      no-body
      :class="col"
    >
      <b-card-body>
        <b-card-title>{{ title }}</b-card-title>
        <b-card-sub-title class="mb-2">
          {{ subtitle }}
        </b-card-sub-title>
        <b-card-text>
          {{ text }}
        </b-card-text>
      </b-card-body>
      <b-list-group v-for="(item, index) in items" :key="index">
        <b-list-group-item>{{ item }}</b-list-group-item>
      </b-list-group>
    </b-card>
  </div>
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
    col: {
      type: String,
      default: 'col-12'
    },
    title: {
      type: String,
      default: 'card title'
    },
    subtitle: {
      type: String,
      default: 'card subtitle'
    },
    text: {
      type: String,
      default: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    }
  },
  data () {
    return {
      nothing: 0
    }
  }
}
</script>

<style>

</style>
