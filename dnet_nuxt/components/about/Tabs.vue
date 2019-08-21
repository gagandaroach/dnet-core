<template>
  <v-container fluid>
    <v-tabs
      v-model="tab"
      grow
      centered
      background-color="transparent"
      color="white"
    >
      <v-tab
        v-for="item in tabs"
        :key="item.name"
      >
        <!-- :href="`about/${item.href}`" -->
        {{ item.name }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in tabs"
        :key="item.name"
      >
        <v-card flat>
          <br>
          <v-card-text>{{ item.text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      tab: null,
      tabs: [
        {
          name: 'The Homelab',
          href: 'homelab',
          text: 'test askdjf lasjdfkl ajsdfkl jaskldfj aklsdjfkl asjdflk asjdklf ajskldfja klsdjfakl sdjfkla sjdklfja sldkfjakls dfjklasdj fklasjd flaksjd flk'
        },
        {
          name: 'The Hoster',
          href: 'me',
          text: 'test askdjf lasjdfkl ajsdfkl jaskldfj aklsdjfkl asjdflk asjdklf ajskldfja klsdjfakl sdjfkla sjdklfja sldkfjakls dfjklasdj fklasjd flaksjd flk'
        },
        {
          name: 'Site History',
          href: 'history',
          text: 'test askdjf lasjdfkl ajsdfkl jaskldfj aklsdjfkl asjdflk asjdklf ajskldfja klsdjfakl sdjfkla sjdklfja sldkfjakls dfjklasdj fklasjd flaksjd flk'
        }
      ]
    }
  }
}
</script>
