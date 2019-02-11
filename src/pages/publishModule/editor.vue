<template>
  <div>
    <Form
      :model="public"
      :label-width="80"
    >
      <FormItem
        label="标题"
        prop="title"
        class="title"
      >
        <Input
          v-model="public.title"
          placeholder="标题"
        ></Input>
      </FormItem>
    </Form>
    <div class="markdown-view-box">
      <Editor @resultContent="resultContent" />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Editor from "@/components/editor/editor.vue";
import ApiService from "@/services";
import { request } from "http";
import { setTimeout } from "timers";
@Component({
  components: {
    Editor
  }
})
export default class EditorPage extends Vue {
  data() {
    return {
      public: {
        title: ""
      }
    };
  }
  resultContent(obj: { content: string; value: string }) {
    if (this.$data.public.title == "") {
      this.$Message.error({
        content: "必须输入标题!"
      });
    } else if (obj.content == "") {
      // alert("请输入您要发布的内容!");
      this.$Message.error({
        content: "请输入您要发布的内容"
      });
      return;
    } else if (obj.content.length < 20) {
      this.$Message.warning("请输入不少于20个字符!");
      return;
    } else {
      console.log(obj.value);
      let description =
        obj.value.length > 50 ? obj.value.slice(0, 50) : obj.value;
      let pubicForm = {
        title: this.$data.public.title,
        content: obj.content,
        // value:obj.value,
        description
      };

      ApiService.PublicTopics(pubicForm).then((res: any) => {
        console.log(res);
        // if(res.status==200) {}
        if (res.error == 0) {
          this.$Message.success({
            content:"发布成功!", 
          });

          setTimeout(() => {
            this.$router.back();
          }, 60);
        }
      });
    }
  }
}
</script>
<style lang="scss" scoped>
.title {
  margin-top: 20px;
  width: 600px;
}
.submit {
  width: 120px;
}
</style>
