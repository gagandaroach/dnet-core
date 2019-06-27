<template>
  <section>
    <div class="mt-3">
      <div>
        <b-button
          size="lg"
          v-b-popover.hover.bottom="'Newcomers click here!'"
          title=""
          variant="outline-light"
          to="/welcome"
          active-class="active"
          >Welcome</b-button
        >
        <b-button
          size="lg"
          v-b-popover.hover.bottom="
            'A place of discussions and learning I am sharing to the world.'
          "
          title=""
          variant="outline-light"
          to="/blog"
          active-class="active"
          >Blog</b-button
        >
        <b-button
          size="lg"
          v-b-popover.hover.bottom="
            'Learn more about this website and its creator.'
          "
          title=""
          variant="outline-light"
          to="/about"
          active-class="active"
          >About</b-button
        >
      </div>
    </div>
  </section>
</template>

<style></style>
