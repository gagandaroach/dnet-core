<template>
  <div>
    <b-navbar
      class="main"
      type="dark"
      variant="primary"
      toggleable="md"
      sticky
      print
    >
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

      <b-navbar-brand class="brand" to="/">daroach.net</b-navbar-brand>
      <b-collapse id="nav-collapse" is-nav>
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
  font-family: 'Bungee', sans-serif;
  /* margin-top: 40px; */
  text-align: center;
  /* padding-block: 30px; */
}
.brand {
  text-align: center;
  font-family: 'Bungee', sans-serif;
}
</style>
