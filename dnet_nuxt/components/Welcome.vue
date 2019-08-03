<template>
  <div>
    <h1 :class=titleClass >DAROACH.NET</h1>
    <h2 >Hello Visitor {{ visitorNumber }}</h2>
    <hr />
    s
  </div>
</template>

<script>
export default {
  data () {
    return {
      visitorNumber: 1
    }
  },
  method: { },
  computed: {
    titleClass () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 'display-2'
        case 'sm': return 'display-3'
        case 'md': return 'display-4'
        case 'lg': return 'display-4'
        case 'xl': return 'display-4'
        default: return 'display-2'
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
