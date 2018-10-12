import Vue from 'vue'
import Router from 'vue-router'
// 主应用程序入口
import App from "@/App.vue"
import Index from "@/pages/index.vue";
// 路由按照模块划分
// 首页的模块
import HomeRouteList from "./route_modules/home";
// 教程的模块
import TutorialRouteList from "./route_modules/tutorial";
// 资源的模块
import ResourceRouteList from "./route_modules/resource";
// 人才的模块
import RecruitRouteList from "./route_modules/recruit";
// 合作的模块
import PartnerRouteList from "./route_modules/partner";
// 周刊模块
import WeeklyRouteList from "./route_modules/weekly";

// 登陆
// import LoginRouteList from "./route_modules/login";
// 注册
// import RegisterRouteList from "./route_modules/register";
const IndexChildrenRoutes = [...HomeRouteList,
...TutorialRouteList,
...ResourceRouteList,
...RecruitRouteList,
...PartnerRouteList,
...WeeklyRouteList,
// ...LoginRouteList,
// ...RegisterRouteList
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
