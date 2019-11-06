<template>
  <div>
    <b-card
      no-body
    >
      <b-card-body>
        <b-card-title>Card Title</b-card-title>
        <b-card-sub-title class="mb-2">
          Card Sub Title
        </b-card-sub-title>
        <b-card-text>
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </b-card-text>
      </b-card-body>
      <b-list-group v-for="(item, index) in items" :key="index" flush>
        <b-list-group-item>{{ item }}</b-list-group-item>
      </b-list-group>
    </b-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        'List item one',
        'List item two',
        'List item three'
      ]
    }
  }
}
</script>

<style>

</style>
