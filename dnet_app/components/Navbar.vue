<template>
  <div>
    <b-navbar type="dark" variant="secondary" sticky>
      <b-container>
        <b-navbar-brand to="/">daroach.net</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/about" active-class="active" right
              >About</b-nav-item
            >
            <b-nav-item to="/blog" active-class="active" right>Blog</b-nav-item>
            <b-nav-item href="https://cloud.daroach.net/" right
              >Cloud</b-nav-item
            >
            <b-nav-item-dropdown id="nav-admin-dropdown" text="Misc" right>
              <b-dropdown-item href="https://portainer.daroach.net"
                >Portainer</b-dropdown-item
              >
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

<style scoped></style>
