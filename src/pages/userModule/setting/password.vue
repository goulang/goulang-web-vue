<template>
  <div class="setting-password setting-item">
    <div class="setting-title">
      <h3>修改密码</h3>
      <p>可以更换您的密码</p>
    </div>
    <div class="set-password">
      <div class="password-container">
        <Form ref="formCustom">
          <FormItem label="原密码" prop="username">
            <Input type="text" placeholder="请输入原密码"></Input>
            <a class="forget" href="">密码忘记了？</a>
          </FormItem>
          <FormItem label="新密码" prop="username">
            <Input type="text" placeholder="请输入新密码"></Input>
          </FormItem>
          <FormItem label="确认新密码" prop="username">
            <Input type="text" placeholder="请确认新密码"></Input>
          </FormItem>
          <FormItem prop="username">
            <Button type="primary">保存修改</Button>
          </FormItem>
        </Form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {
  }
})
export default class PasswordPage extends Vue {
  constructor() {
    super();
  }
}
</script>

<style lang="scss" scoped>
// 修改密码
.setting-password{
  position: relative;
  .forget{
    position: absolute;
    top: 0;
    right: 0;
    &:hover{
      text-decoration: underline;
    }
  }
}
</style>