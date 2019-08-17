<template>
  <div>
    <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
      <v-list-item-action>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title v-text="item.title" />
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Blog',
          to: '/inspire'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'About',
          to: '/inspire'
        },
        {
          icon: 'mdi-game',
          title: 'Minecraft Server',
          to: '/Minecraft'
        }
      ]
    }
  }
}
</script>

<style>
</style>
