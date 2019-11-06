<template>
  <div>
    <footer class="app-footer">
      <b-row>
        <b-col class="left ml-1">
          <span><a href="https://github.com/gagandaroach/daroachnet">Website Source Code</a></span>
        </b-col>
        <b-col class="right mr-1">
          <span>Gagan Daroach &copy; 2019</span>
        </b-col>
      </b-row>
    </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.app-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 2px;
}

.app-footer, a, a:hover {
  background-color: var(--primary);
  color: white;
}
.left {
  text-align: left;
}
.right {
  text-align: right;
}
</style>
