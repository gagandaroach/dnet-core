<template>
  <div>
    <b-navbar class="main" type="dark" variant="secondary" sticky>
      <b-container>
        <b-navbar-brand to="/">daroach.net</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/blog" active-class="active" right>Blog</b-nav-item>
            <b-nav-item to="/about" active-class="active" right
              >About</b-nav-item
            >
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
        </b-collapse>
      </b-container>
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
