<template>
  <Affix>
    <div class="gl-header">
      <Row type="flex" class="header-main">
        <Col offset="2" span="2" class="gl-logo clearfix">
        <img src="@/assets/imgs/logo.jpg" class="gl-logo-img" alt="gl-logo" @click="goulang()">
        </Col>
        <Col span="10" class="gl-nav-col">
        <nav class="gl-nav">
          <ul class="gl-nav-box clearfix">
            <li class="gl-nav-item" :class="{'current-nav':index==tabIndex}" v-for="(item,index) of tabJson" :key="index">
              <span @click="showContent(item,index)">{{item.title}}</span>
            </li>
          </ul>
        </nav>
        </Col>
        <!-- this is goulang's search,maybe you can find something -->
        <Col class="search-box clearfix" span="6">
        <Input search placeholder="搜索 GouLang..." class="search-ipt" />
        </Col>
        <Col span="6" class="gl-user-box clearfix">
        <div v-if="!isLogin" class="login-btn">
          <Button type="primary" icon="md-paper-plane" shape="circle" class="sign-in" @click="showContent('login')">登陆</Button>
          <Button type="dashed" icon="md-add" shape="circle" class="sign-up" @click="showContent('register')">注册</Button>
        </div>
        <div v-else class="gl-user-info">
          <div class="gl-user-avatar">
            <Dropdown>
              <a href="javascript:void(0)">
                <img src="@/assets/imgs/logo.jpg" alt="">
              </a>
              <DropdownMenu slot="list">
                <DropdownItem v-for="(item, index) in userHomeJson" :key="index">
                  <span @click="handleUserList(item,index)">{{item.title}}</span>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <!-- <Button class="writing" type="info" icon="md-create" ghost>发布</Button> -->
          <Button class="writing" type="info" icon="ios-paper-outline" ghost>发布</Button>
          <Button shape="circle" title="通知" icon="ios-notifications-outline"></Button>
        </div>
        </Col>
      </Row>
    </div>
  </Affix>
</template>
<script lang="ts">
import { tabJson } from "@/assets/json/tabJson";
import { userHomeJson } from "@/assets/json/userJson";
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Appheader extends Vue {
  constructor() {
    super();
  }
  tabJson  : Array<object> = tabJson;
  userHomeJson : Array<object> = userHomeJson;
  tabIndex = 0;

  data () {
    return {
      isLogin: false
    }
  }

  /* 本页面组件通用函数STR*/
  // 跳转页面
  pushRouter(name: string): void {
    // console.log(name);
    this.$router.replace({
      name
    });
    sessionStorage.setItem("name", name);
  }
  //   改变导航点击选中样式
  navStyle(currentIndex: number): void {
    // console.log(currentIndex);
    this.tabIndex = currentIndex;
    sessionStorage.setItem("currentIndex", currentIndex.toString());
  }
  /* 当前通用函数END*/
  //   等价于下面的data
  //   data() {
  //     return {
  //       tabJson: tabJson
  //     };
  //   }
  //   刷新页面初始化操作
  created(): void {
    let name: any = sessionStorage.getItem("name")
      ? sessionStorage.getItem("name")
      : "home".toString();
    // console.log(name);
    name = name.toString();
    let currentIndex: any = sessionStorage.getItem("currentIndex")
      ? Number(sessionStorage.getItem("currentIndex"))
      : 0;
    this.pushRouter(name);
    this.navStyle(currentIndex);
    this.handleGetLoginStatus()
  }

  // 跳转页面路由,禁止修改
  showContent(item: any, index: number): void {
    switch (item) {
      case "login": {
        this.$store.commit("login/toggleLoginComponent");
        return;
      }
      case "register": {
        this.$store.commit("register/toggleRegisterComponent");
        return;
      }
      default: {
        console.log("#c 没有有效的路由","color:#ff0");
      }
    }
    if (item == undefined) {
      return;
    }
    let routeName: string = item["name"];
    let currentIndex: number = index;
    
    this.navStyle(currentIndex);
    this.pushRouter(routeName);
  }
  //   点击首页的logo
  goulang() {
    this.navStyle(0);
    this.pushRouter("home");
  }

  //登录状态
  handleGetLoginStatus (){
    this.$data.isLogin = localStorage.getItem("login");
    // if (this.$data.isLogin) {

    // }
  }

  //用户头像下面的列表跳转
  handleUserList (item: any, idx: number) :void {
    console.log(item["name"])
    let routeName: string = item["name"];
    let currentIndex: number = 0;
    
    this.navStyle(currentIndex);
    this.pushRouter(routeName);
    switch (item["name"]) {
      case "homepage": {
        return
      }
      case "collections": {
        return
      }
      case "praise": {
        return
      }
      case "settings": {
        return
      }
      case "exit": {
        localStorage.removeItem("login");
        this.navStyle(currentIndex);
        this.pushRouter("home");
        location.reload();
        return
      }
      default: {
        console.log("#c 没有有效的路由","color:#ff0");
      }
    }
  }

  //通知
  handleInform (){
    // this.$store.commit("inform/toggleInformComponent");
  }


}
</script>
<style scoped lang="scss">
i{
  font-size: 32px;
  color: #2d8cf0;
}
.gl-header {
  height: 60px;
  width: 100%;
  min-width: 980px;
  background-color: #fff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  .header-main {
    width: 1040px;
    margin: auto;
    .gl-logo {
      width: 50px;
      height: 50px;
      margin-top: 5px;
      margin-right: 5px;
      position: relative;
      margin-left: 0;
      .gl-logo-img {
        position: absolute;
        z-index: 5;
        left: 0;
        top: 0;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
        transition: all 1.5s;
      }
      @keyframes goulang {
        0% {
          transform: scale(1);
          opacity: 0.5;
        }
        50% {
          transform: scale(1.2);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 0.5;
        }
      }
      .login-span {
        position: absolute;
        left: 0;
        top: 0;
        background-color: #333333;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        -webkit-animation: goulang 4s linear infinite;
        z-index: 0;
      }
      .login-span-out {
        -webkit-animation-delay: 2s;
      }
    }
    .gl-nav-col {
      .gl-nav {
        .gl-nav-box {
          .gl-nav-item {
            float: left;
            height: 60px;
            line-height: 60px;
            color: #333;
            font-size: 15px;
            span {
              display: inline-block;
              margin: 0 15px;
              text-align: center;
              position: relative;
              color: #333;
              cursor: pointer;
              transition: color 0.2s linear, background-color 0.2s linear,
                border 0.2s linear, box-shadow 0.2s linear;
              &:hover {
                color: #1396ff;
              }
              &::after {
                background-color: #1396ff;
                content: "";
                height: 3px;
                position: absolute;
                left: 0;
                bottom: 0;
                width: 0;
                filter: alpha(opacity=0);
                -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
                -webkit-opacity: 0;
                -khtml-opacity: 0;
                -moz-opacity: 0;
                -ms-opacity: 0;
                -o-opacity: 0;
                opacity: 0;
                -webkit-transition: all 300ms linear 0ms;
                -khtml-transition: all 300ms linear 0ms;
                -moz-transition: all 300ms linear 0ms;
                -ms-transition: all 300ms linear 0ms;
                -o-transition: all 300ms linear 0ms;
                transition: all 300ms linear 0ms;
              }
              &:hover:after {
                width: 100%;
                filter: alpha(opacity=100);
                -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
                -webkit-opacity: 1;
                -khtml-opacity: 1;
                -moz-opacity: 1;
                -ms-opacity: 1;
                -o-opacity: 1;
                opacity: 1;
                -webkit-transition: all 300ms linear 0ms;
                -khtml-transition: all 300ms linear 0ms;
                -moz-transition: all 300ms linear 0ms;
                -ms-transition: all 300ms linear 0ms;
                -o-transition: all 300ms linear 0ms;
                transition: all 300ms linear 0ms;
              }
            }
          }
          .current-nav {
            span {
              color: #1396ff;
              &:after {
                width: 100%;
                filter: alpha(opacity=100);
                -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
                -webkit-opacity: 1;
                -khtml-opacity: 1;
                -moz-opacity: 1;
                -ms-opacity: 1;
                -o-opacity: 1;
                opacity: 1;
                -webkit-transition: all 300ms linear 0ms;
                -khtml-transition: all 300ms linear 0ms;
                -moz-transition: all 300ms linear 0ms;
                -ms-transition: all 300ms linear 0ms;
                -o-transition: all 300ms linear 0ms;
                transition: all 300ms linear 0ms;
              }
            }
            &:hover {
              color: #1396ff;
            }
          }
        }
      }
    }
    .search-box {
      .search-ipt {
        margin-top: 14px;
        width: 240px;
        .search-btn {
          cursor: pointer;
        }
      }
    }
    .gl-user-box {
      margin-top: 14px;
      float: left;
      margin-left: 31.6px;
      text-align: right;
      .login-btn{
        .sign-in {
          margin-right: 5px;
        }
        .sign-up {
          margin-left: 5px;
        }
      }
      .gl-user-info{
        padding: 0 20px;
        button{
          margin-right: 25px;
        }
        .writing{
          border-color: #dcdee2;
          color: #999;
          &:hover{
            color: #1396ff;
            border-color: #1396ff;
          }
        }
        .gl-user-avatar{
          text-align: left;
          float: right;
          width: 32px;
          height: 32px;
          a{
            display: inline-block;
            width: 100%;
            height: 100%;
            img{
              width: 100%;
              height: 100%;
              border-radius: 50%;
            }
          }
          .ivu-dropdown-item{
            padding: 0;
            span{
              display: inline-block;
              width: 100%;
              padding: 7px 16px;
            }
          }
        }
      }
    }
  }
}
</style>


