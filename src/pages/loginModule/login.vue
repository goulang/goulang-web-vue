<template>
  <div class="gl-modal">
    <div class="gl-login">
      <Form
        ref="formValidate"
        :model="formValidate"
        :rules="ruleValidate"
      >
        <div class="mascot-box">
          <img
            width="100%"
            src="@/assets/imgs/login.png"
            alt=""
          >
        </div>
        <div class="login-title-box">
          <h3>登录
            <Icon
              type="ios-close"
              @click="handleClose"
            />
          </h3>
        </div>
        <FormItem
          label="邮箱"
          prop="email"
        >
          <Input
            v-model="formValidate.email"
            placeholder="请输入您的登录邮箱"
          ></Input>
        </FormItem>
        <FormItem
          label="密码"
          prop="password"
        >
          <Input
            v-model="formValidate.password"
            placeholder="请输入密码"
          ></Input>
        </FormItem>
        <FormItem>
          <Button
            :style="{width:'100%'}"
            type="primary"
            :loading="upLoading"
            @click="handleSubmit('formValidate')"
          >登录</Button>
        </FormItem>
        <FormItem :style="{marginBottom:'0'}">
          <div class="register">
            <em>没有账号？</em><a @click="handleRegister">注册</a>
          </div>
          <div class="forget-pwd">
            <a @click="handleForgetPwd('forget')">忘记密码</a>
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
import ApiService from "../../services/";
import { setTimeout } from "timers";

@Component
export default class LoginPage extends Vue {
  constructor() {
    super();
  }
  data() {
    return {
      timer: null,
      upLoading: false,
      formValidate: {
        email: "",
        password: ""
      },
      ruleValidate: {
        email: [
          {
            required: true,
            type: "email",
            message: "邮箱不能为空",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            type: "string",
            message: "密码不能为空",
            trigger: "blur"
          },
          {
            required: true,
            pattern: /^.{5,20}$/,
            message: "请输入5-20位的字符",
            trigger: "blur"
          }
        ]
      }
    };
  }
  handleSubmit(name: string) {
    // this.$refs[name]["validate"]((valid) => {
    //     if (valid) {
    this.Login();
    //     } else {
    //         this.$Message.error("请检查!");
    //     }
    // })
  }
  Login() {
    //     formCustom
    // username
    // contact
    // pwd
    // console.log(2)
    let email = this.$data.formValidate.email,
      password = this.$data.formValidate.password;
    ApiService.Login({
      email,
      password
    })
      .then((res: any) => {
        // this.$store.commit("login/toggleIsLogin", true);
        // console.log(res);
        if (res.errno == 0) {
          this.$Message.success({
            content: "登录成功,2s后自动刷新!"
          });
          this.$data.timer = setTimeout(() => {
            this.$store.commit("login/toggleLoginComponent");
            this.$store.commit("login/toggleIsLogin", true);
            location.reload();
          }, 1500);
        } else {
          this.$Message.warning({
            content: "用户名或密码错误!"
          });
        }

        // if (res.errorCode == 1000) {
        //   this.$Message.success({content:"注册成功!请安心服用"});
        //   this.$data.timer = setTimeout(()=>{
        //     this.handleClose()
        //   },2000)
        // }
      })
      .catch(err => {
        this.$Message.warning({
          content: "用户名或密码错误!"
        });
      });
  }
  //切换注册
  handleRegister() {
    this.$store.commit("register/toggleRegisterComponent");
    this.$store.commit("login/toggleLoginComponent");
  }
  handleClose() {
    //关闭登录
    this.$store.commit("login/toggleLoginComponent");
  }

  //登录成功添加cookie
  handleAddLoginStatus() {
    let login: any = localStorage.setItem("login", "true");
  }

  //忘记密码
  handleForgetPwd(name: string) {
    if (name === "forget") {
      this.$router.replace({
        name
      });
      sessionStorage.setItem("name", "forget");
      sessionStorage.setItem("currentIndex", "-1".toString());
      this.$store.commit("login/toggleLoginComponent");
    } else {
      console.log("错误路由");
    }
  }
}
</script>
<style lang="scss" scoped>
em,
i {
  color: #999;
}
i {
  font-size: 28px;
}
.gl-modal {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
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
</style>