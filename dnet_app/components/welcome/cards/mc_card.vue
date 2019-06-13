<template>
  <section>
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
  </section>
</template>

<script>
export default {
  components: {}
}
</script>

<style scoped></style>
