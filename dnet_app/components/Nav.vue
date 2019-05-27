<template>
  <section>
    <div class="mt-3">
      <b-button-group size="lg">
        <b-button
          v-b-popover.hover.bottom="
            'See my thoughts on the latest technologies, politics, and memes.'
          "
          title=""
          variant="outline-light"
          to="/blog"
          active-class="active"
          >Blog</b-button
        >
        <b-button
          v-b-popover.hover.bottom="
            'What is Daroach?\nLearn about me and my site.'
          "
          title=""
          variant="outline-light"
          to="/about"
          active-class="active"
          >About</b-button
        >
        <b-dropdown variant="outline-light" size="lg" text="Services">
          <b-dropdown-item
            v-b-popover.hover.left="'A Personal Dropbox Server'"
            href="https://cloud.daroach.net"
            >Cloud
          </b-dropdown-item>
          <b-dropdown-item
            v-b-popover.hover.left="'A Personal Netflix Server'"
            href="https://media.daroach.net"
            >Plex
          </b-dropdown-item>
          <b-dropdown-item
            v-b-popover.hover.left="'Minecraft server for the boyz.'"
            to="/minecraft"
            >Minecraft
          </b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item
            v-b-popover.hover.left="
              'Allows for administration of the homelab\'s docker containers.'
            "
            href="https://portainer.daroach.net"
            >Portainer
          </b-dropdown-item>
        </b-dropdown>
      </b-button-group>
    </div>
  </section>
</template>

<style></style>
