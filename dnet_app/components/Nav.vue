<template>
  <section>
    <b-nav justified pills>
      <b-nav-item to="/" active>home</b-nav-item>
      <b-nav-item to="/about">about</b-nav-item>
      <b-nav-item to="/blog">blog</b-nav-item>
      <b-nav-item-dropdown
        id="nav-users-dropdown"
        text="services"
        extra-toggle-classes="nav-link-custom"
        right
      >
        <b-dropdown-item href="https://cloud.daroach.net"
          >cloud</b-dropdown-item
        >
      </b-nav-item-dropdown>
      <b-nav-item-dropdown
        id="nav-admin-dropdown"
        text="admin"
        extra-toggle-classes="nav-link-custom"
        right
      >
        <b-dropdown-item href="https://portainer.daroach.net"
          >portainer
        </b-dropdown-item>
      </b-nav-item-dropdown>
    </b-nav>
  </section>
</template>

<style></style>
