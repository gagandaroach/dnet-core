<template>
  <v-card outlined>
    <v-flex lg10>
      <v-row>
        <v-col>
          <v-img
            :src="require('assets/welcome/gagan_daroach_selfie.jpeg')"
            aspect-ratio="1"
            class="ma-2"
          />
        </v-col>
        <v-col>
          <v-card-title class="justify-center" v-text="title" />
          <v-divider />
          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-text />
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-flex>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'default title'
    },
    imgPath: {
      type: String,
      default: 'assets/mc/server_info.png'
    }
  },
  computed: {
    img () {
      return null
    }
  }
}
</script>

<style>
</style>
