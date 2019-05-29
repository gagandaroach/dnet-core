<template>
  <section>
    <Navbar />

    <PageTitle
      title="Daroach.net Minecraft"
      description="A fun place to procrastinate your life's responsibiliteis."
    />

    <hr />

    <b-container>
      <b-row id="rules">
        <b-col>
          <b-card
            no-body="true"
            border-variant="danger"
            body-border-variant="danger"
          >
            <b-card-header
              header="Server Rules"
              class="display-4"
              header-text-variant="danger"
              header-border-variant="danger"
            ></b-card-header>
            <b-card-body
              ><ol>
                <li>
                  <b>The Golden Rule</b> Treat your neighbor how you would treat
                  yourself.
                </li>
                <li>
                  So <b>NO</b> griefing, stealing, or uncalled-for player
                  killing!
                </li>
                <li>Cut down trees entirely. No dangling logs in the air.</li>
                <li>
                  Don't make your animal farms contain more than 50 entities. In
                  excess, this will lag the server. This is a Java Minecraft
                  Bottleneck I do not know how to fix, so we have to deal with
                  it.
                </li>
              </ol></b-card-body
            >
          </b-card>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col md="6" lg="6">
          <b-card no-body="true" border-variant="info">
            <b-card-header
              header="How to Connect"
              class="display-4"
              header-text-variant="info"
              header-border-variant="info"
            ></b-card-header>
            <b-card-body>Server Address: <code>daroach.net</code></b-card-body>
            <b-card-img
              src="~/assets/mc_server_info.png"
              fluid="true"
            ></b-card-img>
          </b-card>
        </b-col>
        <b-col md="6" lg="6">
          <b-card no-body="true" border-variant="success">
            <b-card-header
              header="Server Features"
              class="display-4"
              header-text-variant="success"
              header-border-variant="success"
            ></b-card-header>
            <b-card-body>
              <ul>
                <li>Vanilla Minecraft</li>
                <li>
                  I keep the server up to date with the latest official version.
                </li>
                <li>Large Biomes</li>
                <li>Automatic daily server backups.</li>
                <li>
                  An instantiation of the offical minecraft docker container. -
                  So really good performance!
                </li>
              </ul>
            </b-card-body>
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
