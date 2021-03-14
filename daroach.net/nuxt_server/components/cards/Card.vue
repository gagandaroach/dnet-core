<template>
  <div>
    <b-card
      :title="title"
      :img-src="imgSrc"
      :img-alt="imgAlt"
      bg-variant="dark"
      img-top
      class="mb-2"
    >
      <b-card-text>
        {{ text }}
      </b-card-text>

      <b-button :href="btnHref" variant="primary">
        {{ btnText }}
      </b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
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
    imgMaxHeight: {
      type: Number,
      default: 400
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
  }
}
</script>

<style>

</style>
