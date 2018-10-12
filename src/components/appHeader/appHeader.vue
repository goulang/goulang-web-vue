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
        <div class="login-btn">
          <Button type="primary" icon="md-paper-plane" shape="circle" class="sign-in" @click="showContent('login')">登陆</Button>
          <Button type="dashed" icon="md-add" shape="circle" class="sign-up" @click="showContent('register')">注册</Button>
        </div>
        </Col>
      </Row>
    </div>
  </Affix>
</template>
<script lang="ts">
import { tabJson } from "@/assets/json/tabJson";
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Appheader extends Vue {
  constructor() {
    super();
  }
  tabJson: Array<object> = tabJson;
  tabIndex = 0;

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
  }

  // 跳转页面路由,禁止修改
  showContent(item: any, index: number): void {
    switch (item) {
      case "login": {
        this.$store.commit("login/toggleLoginComponent");
        sessionStorage.removeItem("currentIndex");
        sessionStorage.removeItem("name");
        // this.navStyle(0);
        // this.pushRouter(item);
        return;
      }
      case "register": {
        this.$store.commit("register/toggleRegisterComponent");
        sessionStorage.removeItem("currentIndex");
        sessionStorage.removeItem("name");
        // this.navStyle(0);
        // this.pushRouter(item);
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
}
</script>
<style scoped lang="scss">
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
        margin-top: 12px;
        width: 240px;
        .search-btn {
          cursor: pointer;
        }
      }
    }
    .gl-user-box {
      margin-top: 12px;
      float: left;
      margin-left: 31.6px;
      text-align: right;
      .sign-in {
        margin-right: 5px;
      }
      .sign-up {
        margin-left: 5px;
      }
    }
  }
}
</style>


