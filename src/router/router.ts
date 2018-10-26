import Vue from 'vue'
import Router from 'vue-router'
// 主应用程序入口
import App from "@/App.vue"
import Index from "@/pages/index.vue";
// 路由按照模块划分
// 首页的模块
import HomeRouteList from "./route_modules/home";
// 槽点的模块
import SpitslotRouteList from "./route_modules/spitslot";
// 书籍的模块
import BooksRouteList from "./route_modules/books";
// 人才的模块
import RecruitRouteList from "./route_modules/recruit";
// 问答的模块
import IssueRouteList from "./route_modules/issue";
// 周刊模块
import WeeklyRouteList from "./route_modules/weekly";

//个人中心路由
//我的主页模块
import UserHomeRouteList from "./route_modules/user_modules/userHome";
// 用户通知
import InformRouteList from "./route_modules/user_modules/inform";
// 用户设置
import SettingRouteList from "./route_modules/user_modules/setting";
// 基本设置
// import BasicRouteList from "./route_modules/user_modules/setbasic";

const IndexChildrenRoutes = [...HomeRouteList,
...SpitslotRouteList,
...BooksRouteList,
...RecruitRouteList,
...IssueRouteList,
...WeeklyRouteList,   
...UserHomeRouteList, //个人中心
...InformRouteList,   //用户通知
...SettingRouteList,  //用户设置
// ...BasicRouteList,    //基本设置
]
Vue.use(Router)
export default new Router({
  // 这默认请求重定向,一般推荐使用name,举例 
  /**
   * redirect: {
   *    name: "index"
   *   }, 
   * 
   */
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "",
      component: App,
      redirect: {
        name: "index"
      }
    },
    {
      path: "/",
      component: App,
      redirect: {
        name: "index"
      }
    },
    {
      path: "/index",
      name: "index",
      component: Index,
      redirect: {
        name: "home"
      },
      // 从这里开始往下,都是以模块划分的路由,每一个路由都需要引入
      children: IndexChildrenRoutes
    }
  ]
})
