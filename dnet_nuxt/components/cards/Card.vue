<template>
  <div>
    <b-card
      :title="title"
      :img-src="img_src"
      :img-alt="img_alt"
      img-top
      class="mb-2"
    >
      <b-card-text>
        {{ text }}
      </b-card-text>
      <b-button :to="btnHref" :variant="btnVariant">
        {{ btnText }}
      </b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    col: {
      type: String,
      default: 'col-12'
    },
    title: {
      type: String,
      default: 'card title'
    },
    subtitle: {
      type: String,
      default: 'card subtitle'
    },
    text: {
      type: String,
      default: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },
    imgSrc: {
      type: String,
      default: 'https://picsum.photos/600/300/?image=25'
    },
    imgAlt: {
      type: String,
      default: 'image_alt_text'
    },
    btnVariant: {
      type: String,
      default: 'primary'
    },
    btnHref: {
      type: String,
      default: '#'
    },
    btnText: {
      type: String,
      default: 'Go somewhere'
    }
  },
  data () {
    return {
      nothing: 0
    }
  }
}
</script>

<style>

</style>
