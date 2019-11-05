<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="primary" class="main" sticky>
      <b-navbar-brand to="/">
        {{ brand }}
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item v-for="(item, index) in nav_items" :to="item.link" :key="index" active-class="active">
            {{ item.text }}
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      brand: 'daroach.net',
      nav_items: [
        { text: 'Welcome', link: '/welcome' },
        { text: 'About', link: '/about/me' }
      ]
    }
  }
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
