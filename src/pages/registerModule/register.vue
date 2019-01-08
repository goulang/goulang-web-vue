<template>
  <div class="app-register">
    <div class="gl-register">
      <Form
        ref="formValidate"
        :model="formValidate"
        :rules="ruleValidate"
      >
        <FormItem>
          <div class="reg-title-box">
            <h3>注册
              <Icon
                type="ios-close"
                @click="handleClose"
              />
            </h3>
          </div>
        </FormItem>
        <FormItem
          label="邮箱"
          prop="email"
        >
          <Input
            v-model="formValidate.email"
            placeholder="请填写邮箱"
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
import { setTimeout } from "timers";
@Component
export default class RegisterPage extends Vue {
  constructor() {
    super();
  }
  data() {
    return {
      formValidate: {
        email: "891177434@qq.com",
        password: "123456"
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
            message: "注册的密码不能为空",
            trigger: "blur"
          },
          {
            required: true,
            pattern: /^.{5,20}$/,
            message: "请输入5-20位的字符",
            trigger: "blur"
          }
        ]
      },
      timer: null
    };
  }
  handleSubmit(name: string) {
    // this.$refs[name]["validate"]((valid) => {
    //     if (valid) {
    this.Register();
    //     } else {
    //         this.$Message.error("请检查!");
    //     }
    // })
  }
  Register() {
    //     formCustom
    // username
    // contact
    // pwd
    // console.log(2)
    let name = this.$data.formValidate.name,
      password = this.$data.formValidate.password,
      email = this.$data.formValidate.mail;
    ApiService.Register({
      name,
      password,
      email
    }).then((res: any) => {
      // console.log(res)
      if (res.errorCode == 1000) {
        this.$Message.success({ content: "注册成功!请安心服用" });

        this.$data.timer = setTimeout(() => {
          this.handleClose();
          this.Login();
        }, 2000);
      }
    });
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
