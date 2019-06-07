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
              ><ul>
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
                  No animal farms with more than 50 animals.
                </li>
              </ul></b-card-body
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
            <b-img fluid src="~/assets/mc_server_info.png"></b-img>
            <b-card-body>Server Address: <code>daroach.net</code></b-card-body>
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
                  Always the latest Offical Version
                </li>
                <li>Large Biomes</li>
                <li>Fun & Cool Players</li>
              </ul>
            </b-card-body>
          </b-card>
          <br />
          <b-card no-body="true" border-variant="warning">
            <b-card-header
              header="Server Technology"
              class="display-4"
              header-text-variant="warning"
              header-border-variant="warning"
            ></b-card-header>
            <b-card-body>
              <ul>
                <li>Automatic server backups every six hours.</li>
                <li>
                  An instantiation of the
                  <a href="https://hub.docker.com/r/itzg/minecraft-server/"
                    ><code>itzg/minecraft-server</code></a
                  >
                  docker container.
                </li>
                <li>
                  32GB of dedicated RAM space.
                </li>
                <li>
                  Dual Intel Xeon L5520 @ 2.27GHz
                </li>
              </ul>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <br />
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
