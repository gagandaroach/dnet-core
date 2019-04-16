<template>
  <div>
    <md-toolbar class="md-large md-accent">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          
        </div>

        <div class="md-toolbar-section-end">
          <md-button :href="cloudUrl" class="md-icon-button">
            <md-icon>cloud</md-icon>
          </md-button>

          <md-button :href ="portUrl" class="md-icon-button">
            <md-icon>settings</md-icon>
          </md-button>
        </div>
      </div>

      <div class="md-toolbar-row md-toolbar-offset">
    <h3 class="md-title"><md-icon>local_cafe</md-icon> daroach.net</h3>
    </div>
    </md-toolbar>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  props: {
    msg: String
  }, computed: {
    cloudUrl() {
      return "https://cloud.daroach.net/"
    },
    portUrl() {
      return "https://portainer.daroach.net/"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.md-toolbar-row {
  text-align: center;
}
a {
  color: inherit;
  text-decoration: inherit;
}
</style>
