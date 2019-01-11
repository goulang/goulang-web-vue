<template>
  <div class="markdown-view-box">
    我是发布文章的页面
    <Editor />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Editor from "@/components/editor/editor.vue";
@Component({
  components: {
    Editor
  }
})
export default class EditorPage extends Vue {}
</script>
<style lang="scss" scoped>
</style>
