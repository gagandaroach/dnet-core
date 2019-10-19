// Gagan Daroach © 2019

<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :hidden="collapse"
      :mini-variant="miniVariant"
      clipped
      fixed
      light
      bottom
      app
    >
      <v-list>
        <NavDrawer />
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <!-- <v-btn icon @click.stop="miniVariant = !miniVariant"> -->
          <v-btn icon @click.stop="drawer = false">
            <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar
      :hidden="collapse"
      clipped-left
      fixed
      flat
      light
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <!-- <v-btn icon to="/">
        <v-icon>mdi-home</v-icon>
      </v-btn> -->
      <!-- <v-toolbar-title v-text="title" to="/"/> -->
      <router-link to="/" tag="v-toolbar-title">
        {{ title }}
      </router-link>
      <v-spacer />
      <v-toolbar-items>
        <v-btn text to="/welcome">
          Welcome
        </v-btn>
        <v-btn text to="/about">
          About
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <v-container class="pa-0" fluid>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :hidden="collapse" :fixed="fixed" app>
      <span><a href="https://github.com/gagandaroach/daroachnet">Website Source Code</a></span>
      <v-spacer />
      <span>Gagan Daroach &copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import NavDrawer from '~/components/app/NavigationDrawer.vue'

export default {
  components: {
    NavDrawer
  },
  data () {
    return {
      drawer: false,
      fixed: false,
      miniVariant: false,
      title: 'DAROACH.NET'
    }
  },
  computed: {
    collapse () {
      return this.$store.state.navbar_hidden
    }
  }
}
</script>

<style scoped></style>
