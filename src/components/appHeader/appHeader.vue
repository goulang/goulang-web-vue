<template>
  <div class="app-header">
    <Row class="col-header" type="flex" justify="center">
      <Col offset="2" span="1" class="app-logo">
      <img src="@/assets/imgs/logo.jpg" class="app-logo-img" alt="" @click="goulang()">
      <span class="login-span login-span-inner"></span>
      <span class="login-span login-span-out"></span>
      </Col>
      <Col span="9" class="app-nav-col">
      <nav class="app-nav">
        <ul class="app-nav-box clearfix">
          <li class="app-nav-item" :class="{'current-nav':index==tabIndex}" v-for="(item,index) of tabJson" :key="index" @click="showContent(item,index)">{{item.title}}</li>
        </ul>
      </nav>
      </Col>
      <!-- this is goulang's search,maybe you can find something -->
      <Col class="search-box" span="5">
      <Input placeholder="搜索Goulang..." class="search-ipt">
      <Icon type="md-search" slot="append" class="search-btn" />
      </Input>
      </Col>
      <Col span="5" class="app-user-box">
      <Button type="primary" icon="md-paper-plane" shape="circle" class="sign-in" @click="showContent('login')">登陆</Button>
      <Button icon="md-add" shape="circle" class="sign-up" @click="showContent('register')">注册</Button>
      </Col>
    </Row>
  </div>
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
    console.log(name);
    this.$router.replace({
      name
    });
    sessionStorage.setItem("name", name);
  }
  //   改变导航点击选中样式
  navStyle(currentIndex: number): void {
    console.log(currentIndex);
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
        sessionStorage.removeItem("currentIndex");
        sessionStorage.removeItem("name");
        this.navStyle(0);
        this.pushRouter(item);
        return;
      }
      case "register": {
        sessionStorage.removeItem("currentIndex");
        sessionStorage.removeItem("name");
        this.navStyle(0);
        this.pushRouter(item);
        return;
      }
      default: {
        console.log("没有有效的路由");
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
    //  这两行保存不需要了
    // sessionStorage.removeItem("currentIndex");
    // sessionStorage.removeItem("name");
    this.navStyle(0);
    this.pushRouter("home");
  }
}
</script>
<style scoped lang="scss">
.app-header {
  height: 60px;
  width: 100%;
  min-width: 980px;
  background-color: #ffffff;
  box-shadow: 0 0 11px 0 #454545;
  .col-header {
    .app-logo {
      width: 50px;
      height: 50px;
      margin-top: 5px;
      margin-right: 5px;
      position: relative;
      .app-logo-img {
        position: absolute;
        z-index: 5;
        left: 0;
        top: 0;
        width: 50px;
        height: 50px;
        border-radius: 50%;

        cursor: pointer;
        transition: all 1.5s;

        &:hover {
          top: 10px;
          border: 1px solid #999;
          transform: rotate(360deg) scale(1.5);
        }
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
    .app-nav-col {
      .app-nav {
        .app-nav-box {
          .app-nav-item {
            padding-left: 2vw;
            padding-right: 2vw;
            float: left;
            height: 60px;
            line-height: 60px;
            cursor: pointer;
            &:hover {
              background-color: #ccc;
              color: #ffffff;
            }
          }
          .current-nav {
            background-color: #ccc;
            color: #ffffff;
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
    .app-user-box {
      margin-top: 12px;

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


