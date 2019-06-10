<template>
  <section>
    <b-card no-body class="overflow-hidden">
      <b-row no-gutters>
        <b-col md="6">
          <InstagramEmbed />
        </b-col>
        <b-col md="6">
          <b-card-header header="The Stack"></b-card-header>
          <b-list-group flush>
            <b-list-group-item class="themed_dark">
              24 port Gigabit Netgear Switch
            </b-list-group-item>
            <b-list-group-item title="Dell R710" class="themed_dark">
              Computational Powerhouse Dell R710
            </b-list-group-item>
            <b-list-group-item class="themed_dark"
              >Dell T710 The Storage Behemotath</b-list-group-item
            >
          </b-list-group>
        </b-col>
      </b-row>
    </b-card>
  </section>
</template>

<script>
import InstagramEmbed from '~/components/about/InstagramEmbed.vue'

export default {
  components: {
    InstagramEmbed
  }
}
</script>

<style scoped></style>
