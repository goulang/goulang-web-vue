
<template>
  <div class="content">
    <div class="editor">

      <quill-editor
        v-model="content"
        ref="myQuillEditor"
        :options="editorOption"
        @blur="onEditorBlur($event)"
        @focus="onEditorFocus($event)"
        @change="onEditorChange($event)"
      >
      </quill-editor>
    </div>
  </div>
</template>
<script>
import { quillEditor } from "vue-quill-editor"; //调用编辑器
// import "quill/dist/quill.core.css";
// import "quill/dist/quill.snow.css";
// import "quill/dist/quill.bubble.css";
export default {
  components: {
    "quill-editor": quillEditor
  },
  data() {
    return {
      content: `请输入您要发布的内容`,
      editorOption: {
        
      }
    };
  },
  methods: {
    onEditorReady(editor) {
      // 准备编辑器
    },
    onEditorBlur() {}, // 失去焦点事件
    onEditorFocus() {}, // 获得焦点事件
    onEditorChange() {} // 内容改变事件
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
  }
};
</script>
 <style lang="scss" scoped>
.content {
  width: 100%;

  .editor {
    width: 90%;
    margin: 0 auto;
    height: 600px;
      background-color: #fff;
  }
}
</style>
 