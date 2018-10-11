<template>
  <div class="app-register" @click.stop="hideRegister($event)">
    <div v-if="isClose" class="gl-register">
      <Form ref="formCustom" :model="formCustom">
        <FormItem>
          <div class="reg-title-box">
            <h3>注册
              <Icon type="ios-close" />
            </h3>
          </div>
        </FormItem>
        <FormItem prop="username">
          <Input type="text" placeholder="请输入用户名" v-model="formCustom.username"></Input>
        </FormItem>
        <FormItem prop="contact">
          <Input type="text" placeholder="请输入手机号或邮箱" v-model="formCustom.contact"></Input>
        </FormItem>
        <FormItem prop="pwd">
          <Input type="password" placeholder="请输入密码" v-model="formCustom.pwd"></Input>
        </FormItem>
        <FormItem>
          <Button :style="{width:'100%'}" type="primary" :loading="upLoading" @click="handleSubmit('formCustom')">注册</Button>
        </FormItem>
        <div class="login text-center">
          <a>已有账户登录</a>
        </div>
        <FormItem>
          <div class="other-login-mode text-center">
            <Divider>使用社交账号登录</Divider>
          </div>
          <div class="oauth text-center">
            <a href="">
              <Icon type="logo-github" />
            </a>
            <a href="">
              <Icon type="logo-github" />
            </a>
            <a href="">
              <Icon type="logo-github" />
            </a>
          </div>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class RegisterPage extends Vue {
  constructor() {
    super();
  }
  data() {
    return {
      formCustom: {
        username: "", //用户名
        contact: "", //联系方式
        pwd: "" //密码
      },
      upLoading: false,
      isClose: true
    };
  }
  handleSubmit(name: string) {
    this.$data.upLoading = true;
    if (
      this.$data.formCustom.username != "" &&
      this.$data.formCustom.pwd != "" &&
      this.$data.formCustom.contact != ""
    ) {
      this.$Message.success("注册成功!");
      this.$data.upLoading = false;
      return;
    }
    if (this.$data.formCustom.username == "") {
      this.$Message.error("请用户名!");
      this.$data.upLoading = false;
      return;
    } else if (this.$data.formCustom.contact == "") {
      this.$Message.error("请输入手机号或邮箱!");
      this.$data.upLoading = false;
      return;
    } else if (this.$data.formCustom.pwd == "") {
      this.$Message.error("请输入密码!");
      this.$data.upLoading = false;
      return;
    } else {
      this.$Message.error("注册失败!");
      this.$data.upLoading = false;
      return;
    }
  }
  // handleClose() {
  //   this.$data.isClose = false;
  // }
  // DOM操作
  // 隐藏
  hideRegister(event: any) {
    let ev = event || window.event;
    let target = ev.target || ev.srcElement;
    if (
      target.className == "app-register" ||
      target.className == "ivu-icon ivu-icon-ios-close"
    ) {
      this.$store.commit("register/toggleRegisterComponent");
    }
  }
}
</script>
<style lang="scss" scoped>
.app-register {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  em,
  i {
    color: #999;
  }
  i {
    font-size: 28px;
  }
  .gl-register {
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 15px 15px;
    width: 330px;
    margin-left: calc(-330px / 2);
    margin-top: calc(-402px / 2);
    background: #fff;
    .reg-title-box {
      h3 {
        i {
          line-height: 32px;
          font-weight: bold;
          cursor: pointer;
          float: right;
          transition: color 0.2s ease;
          &:hover {
            color: #000;
          }
        }
      }
    }
  }
  // 囊地鼠图片
  .mascot-box {
    margin-top: -16px;
  }
  .text-center {
    text-align: center;
  }
  h3 {
    font-size: 18px;
  }
  form {
    width: 300px;
    padding: 0 20px;
    .ivu-form-item {
      margin-bottom: 14px;
    }
    .other-login-mode {
      margin-bottom: 10px;
      color: #666;
      span {
        font-size: 14px;
      }
    }
    .login {
      font-size: 12px;
    }
    .oauth {
      i {
        background-color: #f5f5f5;
        border-radius: 50%;
        cursor: pointer;
        margin: 0 15px;
        padding: 5px;
      }
    }
  }
}
</style>
