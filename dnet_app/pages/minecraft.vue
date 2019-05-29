<template>
  <section>
    <Navbar />

    <PageTitle
      title="Minecraft Server"
      description="A fun place to procrastinate your life's responsibiliteis."
    />

    <b-container>
      <b-row id="rules">
        <b-col>
          <h1>Server Rules</h1>
          <ol>
            <li>Treat thy neighbor how one would treat themself.</li>
            <li></li>
          </ol>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6" lg="4">
          <b-card no-body="true">
            <b-card-header header="How to Connect"></b-card-header>
            <b-card-body>Server Field: <code>daroach.net</code></b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import PageTitle from '~/components/PageTitle.vue'
export default {
  components: {
    Navbar,
    PageTitle
  }
}
</script>

<style scoped>
#rules {
  text-align: center;
}
</style>
