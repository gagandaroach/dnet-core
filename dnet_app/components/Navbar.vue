<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-brand to="/">daroach.net</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/about" right>about</b-nav-item>
          <b-nav-item to="/blog" right>blog</b-nav-item>
          <b-nav-item href="https://cloud.daroach.net/" right>cloud</b-nav-item>
          <b-nav-item-dropdown id="nav-admin-dropdown" text="admin" right>
            <b-dropdown-item href="https://portainer.daroach.net"
              >portainer</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style scoped></style>
