// Gagan Daroach © 2019

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
          icon: 'mdi-home',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-post',
          title: 'Blog',
          to: '/blog'
        },
        {
          icon: 'mdi-information',
          title: 'About',
          to: '/about'
        },
        {
          icon: 'mdi-gamepad-variant',
          title: 'Minecraft Server',
          to: '/minecraft'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Vuetify Inspire',
          to: '/inspire'
        }
      ]
    }
  }
}
</script>

<style>
</style>
