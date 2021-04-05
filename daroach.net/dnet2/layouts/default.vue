<template>
  <div class="h-screen bg-red-900">
    <div class="h-10">
      <Navbar />
    </div>
    <div class="m-auto">
      <Nuxt />
    </div>
    <div class="dnet-footer">
      <Footer />
    </div>
  </div>
</template>

<style>
.dnet-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
