
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
        class="quill-editor"
      >
      </quill-editor>
    </div>
    <div class="bottom">
      <Button
        type="success"
        long
        class="submit"
        @click="submit"
      >发布</Button>
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
      content: "",
      value: "",
      editorOption: {
        placeholder: "请输入您要发布的内容"
      }
    };
  },
  methods: {
    onEditorReady(editor) {
      // 准备编辑器
    },
    onEditorBlur(editor) {
      // console.log(editor);
    }, // 失去焦点事件
    onEditorFocus(editor) {
      // console.log(editor);
    }, // 获得焦点事件
    onEditorChange(editor) {
      // console.log(editor);
      this.$data.value = editor.text;
    }, // 内容改变事件
    submit() {
      // console.log(this.$data.content)
      this.$emit("resultContent", {
        content: this.$data.content,
        value: this.$data.value
      });
    }
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
    margin-bottom: 80px;
    .quill-editor {
      height: 600px;
      background-color: #fff;

      //   width: 100%;
      //   height: 400px;
    }
  }
  .bottom {
    width: 100%;

    .submit {
      width: 180px;
      height: 40px;
      float: right;
      margin-right: 160px;
    }
  }
}
</style>
 