// Gagan Daroach © 2019

<template>
  <div>
    <!-- <v-subheader>Website</v-subheader> -->
    <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
      <v-list-item-action>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title v-text="item.title" />
      </v-list-item-content>
    </v-list-item>
    <v-subheader>Web Services</v-subheader>
    <v-list-item v-for="(item, i) in services" :key="i" :to="item.to" router exact>
      <v-list-item-action>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title v-text="item.title" />
      </v-list-item-content>
    </v-list-item>
    <v-subheader>About</v-subheader>
    <v-list-item v-for="(item, i) in abouts" :key="i" :to="item.to" router exact>
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
        }
      ],
      abouts: [
        {
          icon: 'mdi-account-card-details',
          title: 'The Hoster',
          to: '/about/me'
        },
        {
          icon: 'mdi-server',
          title: 'The Homelab',
          to: '/about/homelab'
        },
        {
          icon: 'mdi-history',
          title: 'Website History',
          to: '/about/history'
        }
      ],
      services: [
        {
          icon: 'mdi-cloud-sync',
          title: 'Cloud.Daroach.Net',
          to: '/services/cloud'
        },
        {
          icon: 'mdi-api',
          title: 'DaroachTech API',
          to: '/services/api'
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
