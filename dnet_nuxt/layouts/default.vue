<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" clipped fixed app>
      <v-list>
        <NavDrawer />
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn icon @click.stop="miniVariant = !miniVariant">
            <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar clipped-left fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-toolbar-items>
        <v-btn text to="/">
          Home
        </v-btn>
        <v-btn text to="/about">
          About Me
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <v-container class="pa-0">
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
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
      title: 'daroach.net'
    }
  }
}
</script>
