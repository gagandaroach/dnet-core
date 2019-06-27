<template>
  <div>
    <b-navbar class="main" type="dark" variant="primary" sticky>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="">
          <b-nav-item
            v-b-popover.hover.bottom=""
            to="/welcome"
            active-class="active"
            >Welcome</b-nav-item
          >
          <b-nav-item
            v-b-popover.hover.bottom=""
            to="/blog"
            active-class="active"
            >Blog</b-nav-item
          >
          <b-nav-item
            v-b-popover.hover.bottom=""
            to="/about"
            active-class="active"
            >About</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
      <b-navbar-brand to="/">daroach.net</b-navbar-brand>
      <b-collapse id="nav-collapse2" is-nav>
        <b-navbar-nav class="ml-auto" right>
          <b-nav-item
            v-b-popover.hover.bottom="'A Personal Dropbox Server'"
            href="https://cloud.daroach.net"
            right
            >Cloud</b-nav-item
          >
          <b-nav-item
            v-b-popover.hover.bottom="'A Personal Netflix Server'"
            href="https://media.daroach.net"
            right
            >Media</b-nav-item
          >
          <b-nav-item
            v-b-popover.hover.bottom="'Minecraft server for the boyz.'"
            to="/minecraft"
            active-class="active"
            right
            >Minecraft</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-navbar-toggle target="nav-collapse2"></b-navbar-toggle>
      <!-- <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown id="nav-admin-dropdown" text="Services" right>
              <b-dropdown-item
                v-b-popover.hover.left="'A Personal Dropbox Server'"
                href="https://cloud.daroach.net"
                >Cloud
              </b-dropdown-item>
              <b-dropdown-item
                v-b-popover.hover.left="'A Personal Netflix Server'"
                href="https://media.daroach.net"
                >Plex
              </b-dropdown-item>
              <b-dropdown-item
                v-b-popover.hover.left="'Minecraft server for the boyz.'"
                to="/minecraft"
                >Minecraft
              </b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item
                v-b-popover.hover.left="
                  'Allows for administration of the homelab\'s docker containers.'
                "
                href="https://portainer.daroach.net"
                >Portainer
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse> -->
    </b-navbar>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style scoped>
.main {
  /* margin-top: 40px; */
  text-align: center;
  /* padding-block: 30px; */
}
</style>
