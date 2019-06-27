<template>
  <section>
    <div class="mt-3">
      <div>
        <b-button
          v-b-popover.hover.bottom="'Newcomers click here!'"
          squared
          size="lg"
          title=""
          variant="outline-primary"
          class="but"
          to="/welcome"
          active-class="active"
          >Welcome</b-button
        >
        <b-button
          v-b-popover.hover.bottom="'A place of discussions and learnings.'"
          squared
          size="lg"
          title=""
          variant="outline-primary"
          class="but"
          to="/blog"
          active-class="active"
          >Blog</b-button
        >
        <b-button
          v-b-popover.hover.bottom="
            'Learn more about this website and its creator.'
          "
          squared
          size="lg"
          title=""
          variant="outline-primary"
          class="but"
          to="/about"
          active-class="active"
          >About</b-button
        >
      </div>
    </div>
  </section>
</template>

<style>
.but {
  color: white;
}
</style>
