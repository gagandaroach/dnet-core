<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="primary" class="main" sticky>
      <b-navbar-brand to="/">
        daroach.net
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/welcome" active-class="active">
            Welcome
          </b-nav-item>
          <b-nav-item to="/about/me" active-class="active">
            About
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.main {
  font-family: 'Ubuntu Mono', sans-serif;
  /* margin-top: 40px; */
  /* padding-block: 30px; */
}
.brand {
  text-align: center;
  font-family: 'Ubuntu Mono', sans-serif;
}
</style>
