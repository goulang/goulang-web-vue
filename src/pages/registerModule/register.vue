<template>
  <div class="app-register">
    <div class="gl-register">
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" >
        <FormItem>
          <div class="reg-title-box">
            <h3>注册<Icon type="ios-close"  @click="handleClose"  /></h3>
          </div>
        </FormItem>
         <FormItem label="注册用户名" prop="name">
            <Input v-model="formValidate.name" placeholder="请输入您要注册的用户名"></Input>
        </FormItem>
         <FormItem label="密码" prop="password">
            <Input v-model="formValidate.password" placeholder="请输入密码"></Input>
        </FormItem>
         <FormItem label="确认密码" prop="passwordAgin">
            <Input v-model="formValidate.passwordAgin" placeholder="请再次输入密码"></Input>
        </FormItem>
         <FormItem label="邮箱" prop="mail">
            <Input v-model="formValidate.mail" placeholder="请填写邮箱"></Input>
        </FormItem>
        <FormItem>
          <Button
            :style="{width:'100%'}"
            type="primary" 
            @click="handleSubmit('formValidate')"
          >注册</Button>
        </FormItem>
        <div class="login text-center">
          <a @click="handleLogin">已有账户登录</a>
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
import ApiService from "../../services/";
@Component
export default class RegisterPage extends Vue {
  constructor() {
    super();
  }
  data() {
    return {
      formValidate:{
        name:"",
        password:"",
        passwordAgin:"",
        mail:"",
      },
      ruleValidate:{
        name:[{required:true, message: "注册的用户名不能为空", trigger: 'blur'},
        {required:true,pattern: /^.{5,20}$/, message: "请输入5-20位的字符", trigger: 'blur' ,transform(value) {return (value).trim();}}],
        password:[{required:true,type: 'string', message: "注册的密码不能为空", trigger: 'blur'},
        {required:true, pattern: /^.{5,20}$/, message: "请输入5-20位的字符", trigger: 'blur'}],
        passwordAgin:[{required:true,type: 'string', message: "注册的密码不能为空", trigger: 'blur'},
        {required:true, pattern: /^.{5,20}$/, message: "请输入5-20位的字符", trigger: 'blur'}],
        mail:[{required:true,  type: 'email',message: "邮箱不能为空", trigger: 'blur'}]
      } 
    };
  }
  handleSubmit (name:any) {
      this.$refs[name]["validate"]((valid) => {
          if (valid) {
              this.Register()
          } else {
              this.$Message.error("请检查!");
          }
      })
  } 
  Register = () => {
    //     formCustom
    // username
    // contact
    // pwd
    let name = this.$data.formCustom.username,
      password = this.$data.formCustom.pwd,
      email = this.$data.formCustom.contact;
    ApiService.Register({
      name,
      password,
      email
    });
  };
  //切换登录
  handleLogin() {
    this.$store.commit("login/toggleLoginComponent");
    this.$store.commit("register/toggleRegisterComponent");
  }
  handleClose() {
    //关闭注册
    this.$store.commit("register/toggleRegisterComponent");
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
