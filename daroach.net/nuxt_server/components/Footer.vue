<template>
  <div>
    <footer class="app-footer">
      <b-row>
        <b-col class="left ml-1">
          <span><a v-b-tooltip.hover :title="source_code_popup_text" href="https://github.com/gagandaroach/daroachnet">{{ source_code_link_title }}</a></span>
        </b-col>
        <b-col class="right mr-1">
          <a v-b-tooltip.hover :title="copyright_popup_text" href="mailto:gagandaroach@gmail.com?Subject=Hello Gagan, I like daroach.net!" target="_top"><span>Gagan Daroach &copy; 2019</span></a>
        </b-col>
      </b-row>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      source_code_popup_text: 'Complete full stack code example for this website are available on Github. Also see the complete development history of this website, one changed line at a time.',
      source_code_link_title: 'Website Source Code',
      copyright_popup_text: 'Questions, Comments, or Concerns? Email me :).'
    }
  }
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
