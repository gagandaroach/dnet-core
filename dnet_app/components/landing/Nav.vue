<template>
  <section>
    <div class="mt-3">
      <div>
        <b-button
          size="lg"
          v-b-popover.hover.bottom="'What is this page all about?'"
          title=""
          variant="outline-light"
          to="/welcome"
          active-class="active"
          >Welcome</b-button
        >
        <b-button
          size="lg"
          v-b-popover.hover.bottom="
            'A place where I share my latest learning, travels, and thoughts.'
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
            'Learn about this site\'s hoster, features, and history.'
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
