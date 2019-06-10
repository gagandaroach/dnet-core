<template>
  <section>
    <Navbar />

    <PageTitle
      title="Daroach.net Minecraft"
      description="A fun place to procrastinate your life's responsibilities."
      background="#56962c"
    />

    <div class="body">
      <MinecraftCarousel />
      <b-container>
        <b-card-group deck>
          <b-card
            no-body="true"
            border-variant="danger"
            body-border-variant="dark"
            bg-variant="dark"
          >
            <b-card-header
              header="Server Rules"
              class="h1"
              header-text-variant="danger"
              header-border-variant="danger"
            ></b-card-header
            ><b-list-group flush>
              <b-list-group-item class="themed_dark">
                <b>The Golden Rule</b> Treat your neighbor how you would treat
                yourself.
              </b-list-group-item>
              <b-list-group-item class="themed_dark">
                So <b>NO</b> griefing, stealing, or uncalled-for player killing!
              </b-list-group-item>
              <b-list-group-item class="themed_dark"
                >Cut down trees entirely. No dangling logs in the
                air.</b-list-group-item
              >
              <b-list-group-item class="themed_dark">
                No animal farms with more than 50 animals.
              </b-list-group-item>
            </b-list-group>
          </b-card>
        </b-card-group>
      </b-container>

      <b-container>
        <b-card-group columns class="mt-3">
          <b-card no-body="true" bg-variant="dark" border-variant="info">
            <b-card-header
              header="How to Connect"
              class="h1"
              header-text-variant="info"
              header-border-variant="info"
            ></b-card-header>
            <b-img fluid src="~/assets/mc/server_info.png"></b-img>
            <b-card-body style="color: white"
              >Just input the Server Address:
              <code>daroach.net</code></b-card-body
            >
          </b-card>
          <b-card no-body="true" border-variant="success" bg-variant="dark">
            <b-card-header
              header="World Details"
              class="h1"
              header-text-variant="success"
              header-border-variant="success"
            ></b-card-header>
            <b-list-group flush>
              <b-list-group-item class="themed_dark"
                >Vanilla Minecraft</b-list-group-item
              >
              <b-list-group-item class="themed_dark">
                Always the Official latest Version
              </b-list-group-item>
              <b-list-group-item class="themed_dark"
                >Large Biomes</b-list-group-item
              >
              <b-list-group-item class="themed_dark"
                >Fun & Cool Players</b-list-group-item
              >
            </b-list-group>
          </b-card>
          <b-card
            no-body="true"
            border-variant="warning"
            bg-variant="dark"
            text-variant="light"
          >
            <b-card-header
              header="Server Tech Specs"
              class="h1"
              header-text-variant="warning"
              header-border-variant="warning"
            ></b-card-header>
            <b-list-group flush>
              <b-list-group-item class="themed_dark"
                >Automatic server backups every six hours.</b-list-group-item
              >
              <b-list-group-item class="themed_dark">
                An instantiation of the
                <a href="https://hub.docker.com/r/itzg/minecraft-server/"
                  ><code>itzg/minecraft-server</code></a
                >
                docker container.
              </b-list-group-item>
              <b-list-group-item class="themed_dark">
                32GB of dedicated RAM space.
              </b-list-group-item>
              <b-list-group-item class="themed_dark">
                Dual Intel Xeon L5520 @ 2.27GHz
              </b-list-group-item>
            </b-list-group>
          </b-card>
        </b-card-group>
      </b-container>

      <br />
    </div>
  </section>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import PageTitle from '~/components/PageTitle.vue'
import MinecraftCarousel from '~/components/mc/MinecraftCarousel.vue'
export default {
  components: {
    Navbar,
    PageTitle,
    MinecraftCarousel
  }
}
</script>

<style scoped>
#rules {
  text-align: center;
}
.body {
  background-image: url('~assets/mc/dirt_background.png');
  background-repeat: repeat;
  text-align: center;
  font-family: 'Minecraft Regular', Courier, monospace;
}
#PageTitle {
  background-image: url('~assets/mc/dirt_background.png');
  background-repeat: repeat;
  font-family: 'Minecraft Regular', Courier, monospace;
}
.themed_dark {
  background-color: var(--dark);
  color: white;
}
</style>
