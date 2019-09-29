// Gagan Daroach © 2019

<template>
  <div>
    <v-subheader>WEB PAGES</v-subheader>
    <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
      <v-list-item-action>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title v-text="item.title" />
      </v-list-item-content>
    </v-list-item>
    <v-subheader>WEB SERVICES</v-subheader>
    <v-list-item v-for="(item, i) in services" :key="i" :to="item.to" router exact>
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
          icon: 'mdi-coffee',
          title: 'Welcome',
          to: '/welcome'
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
        }
      ],
      services: [
        {
          icon: 'mdi-cloud-sync',
          title: 'NextCloud',
          to: '/services/cloud'
        },
        {
          icon: 'mdi-api',
          title: 'DTECH API',
          to: '/services/cloud'
        },
        {
          icon: 'mdi-gamepad-variant',
          title: 'Minecraft Server',
          to: '/minecraft'
        }
      ]
    }
  }
}
</script>

<style>
</style>
