<template>
  <div class="gl-login">
    <Form ref="formCustom" :model="formCustom">
      <div class="mascot-box">
        <img width="100%" src="@/assets/imgs/login.png" alt="">
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
          <i>没有账号？</i><a>注册</a>
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
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class LoginPage extends Vue {
  data (){
    // const validateUserName = (rule:any, value:any, callback:any) => {
    //   if (value === '') {
    //     callback(new Error('请输入手机号或邮箱'));
    //   } else {
    //     callback();
    //   }
    // };
    // const validatepwd = (rule:any, value:any, callback:any) => {
    //   if (value === '') {
    //     callback(new Error('请输入密码'));
    //   } else {
    //     callback();
    //   }
    // };
    return {
      formCustom: {
        username: '',   //用户名
        pwd: '',      //密码
      },
      upLoading: false,
      // ruleCustom: {
      //   //验证规则
      //   username: [
      //     { validator: validateUserName, trigger: 'blur' }
      //   ],
      //   pwd: [
      //     { validator: validatepwd, trigger: 'blur' }
      //   ],
      // }
    }
  }
  handleSubmit (name:string) {
    this.upLoading = true;
    if(this.formCustom.username != "" && this.formCustom.pwd != ""){
      this.$Message.success("登录成功!");
      this.upLoading = false;
      return
    }
    if (this.formCustom.username == "") {
      this.$Message.error("请输入手机号或邮箱!");
      this.upLoading = false;
      return
    } else if(this.formCustom.pwd == "") {
      this.$Message.error("请输入密码!");
    this.upLoading = false;
      return
    } else {
      this.$Message.error('登录失败!');
      this.upLoading = false;
      return
    }
  }
}
</script>
<style lang="scss" scoped>
em,i{
  color: #999;
}
.gl-login {
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 15px 15px;
  width: 330px;
  margin-left: calc(-330px/2);
  margin-top: calc(-402px/2);
  background: #fff;
}
// 囊地鼠图片
.mascot-box{
  margin-top: -16px;
}
.text-center{
  text-align: center;
}
form{
  width: 300px;
  padding:0 20px;
  .ivu-form-item{
    margin-bottom: 14px;
  }
  .register{
    float: left;
  }
  .forget-pwd{
    float: right;
  }
  .other-login-mode{
    margin-bottom: 10px; 
    color: #666;
  }
  .oauth {
    font-size: 28px;
    i{
      background-color: #f5f5f5;
      border-radius:50%;
      cursor: pointer;
      margin: 0 15px;
      padding: 5px;
    }
  }
}
</style>
