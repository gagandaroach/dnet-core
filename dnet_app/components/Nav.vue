<template>
  <section>
    <b-nav fill pills>
      <!-- <b-nav-item to="/" active>home</b-nav-item> -->
      <b-nav-item to="/about">about</b-nav-item>
      <b-nav-item to="/blog">blog</b-nav-item>
      <b-nav-item href="https://cloud.daroach.net">cloud</b-nav-item>
      <b-nav-item-dropdown id="nav-admin-dropdown" text="admin" right>
        <b-dropdown-item href="https://portainer.daroach.net"
          >portainer
        </b-dropdown-item>
      </b-nav-item-dropdown>
    </b-nav>
  </section>
</template>

<style></style>
