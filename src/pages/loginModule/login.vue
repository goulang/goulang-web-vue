<template>
  <div class="app-login" @click.stop="hideLogin($event)">
    <div class="gl-login">
      <Form ref="formCustom" :model="formCustom">
        <div class="mascot-box">
          <img width="100%" src="@/assets/imgs/login.png" alt="">
        </div>
        <div class="login-title-box">
          <h3>登录
            <Icon type="ios-close" />
          </h3>
        </div>
        <FormItem prop="username">
          <Input type="text" placeholder="请输入手机号或邮箱" v-model="formCustom.username"></Input>
        </FormItem>
        <FormItem prop="pwd">
          <Input type="password" placeholder="请输入密码" v-model="formCustom.pwd"></Input>
        </FormItem>
        <FormItem>
          <Button :style="{width:'100%'}" type="primary" :loading="upLoading" @click="handleSubmit('formCustom')">登录</Button>
        </FormItem>
        <FormItem :style="{marginBottom:'0'}">
          <div class="register">
            <em>没有账号？</em><a>注册</a>
          </div>
          <div class="forget-pwd">
            <a>忘记密码</a>
          </div>
        </FormItem>
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
// import store from '@/vuex';
@Component
export default class LoginPage extends Vue {
  constructor() {
    super();
  }
  data() {
    return {
      formCustom: {
        username: "", //用户名
        pwd: "" //密码
      },
      upLoading: false
    };
  }
  handleSubmit(name: string) {
    this.$data.upLoading = true;
    if (
      this.$data.formCustom.username != "" &&
      this.$data.formCustom.pwd != ""
    ) {
      this.$Message.success("登录成功!");
      this.$data.upLoading = false;
      return;
    }
    if (this.$data.formCustom.username == "") {
      this.$Message.error("请输入手机号或邮箱!");
      this.$data.upLoading = false;
      return;
    } else if (this.$data.formCustom.pwd == "") {
      this.$Message.error("请输入密码!");
      this.$data.upLoading = false;
      return;
    } else {
      this.$Message.error("登录失败!");
      this.$data.upLoading = false;
      return;
    }
  }
  // DOM操作
  // 隐藏
  hideLogin(event: any) {
    let ev = event || window.event;
    let target = ev.target || ev.srcElement;
    if (
      target.className == "app-login" ||
      target.className == "ivu-icon ivu-icon-ios-close"
    ) {
      this.$store.commit("login/toggleLoginComponent");
    }
  }
}
</script>
<style lang="scss" scoped>
.app-login {
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
  .gl-login {
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 15px 15px;
    width: 330px;
    margin-left: calc(-330px / 2);
    margin-top: calc(-402px / 2);
    background: #fff;
  }
  // 囊地鼠图片
  .mascot-box {
    margin-top: -16px;
  }
  .login-title-box {
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
  .text-center {
    text-align: center;
  }
  form {
    width: 300px;
    padding: 0 20px;
    .ivu-form-item {
      margin-bottom: 14px;
    }
    .register {
      float: left;
    }
    .forget-pwd {
      float: right;
    }
    .other-login-mode {
      margin-bottom: 10px;
      color: #666;
      span {
        font-size: 14px;
      }
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