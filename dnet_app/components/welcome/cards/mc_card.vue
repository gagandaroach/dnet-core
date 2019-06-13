<template>
  <section>
    <!-- <b-card
      no-body="true"
      border-variant="dark"
      bg-variant="dark"
      text-variant="light"
    >
      <b-card-header
        header="Minecraft Server"
        class="h1"
        header-text-variant="primary"
        header-border-variant="primary"
      ></b-card-header>
      <b-card-img src="~/assets/mc/gagany.png" />
    </b-card> -->
    <b-card
      title="Minecraft Server"
      img-src="~/assets/mc/gagany.png"
      img-alt="Minecraft Server Screenshot"
      img-top
      style="max-width: 40%;"
      class="mb-2"
    >
      <b-card-text>
        A free to play vanilla Minecraft server. A place to relax, design, and
        compete with friends.
      </b-card-text>

      <b-button to="/minecraft" variant="primary">Visit</b-button>
    </b-card>
  </section>
</template>

<script>
export default {
  components: {}
}
</script>

<style scoped></style>
