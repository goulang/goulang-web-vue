const Basic = () => import(/* webpackChunkName: "basic" */ '@/pages/userModule/setting/basic.vue')
const BasicRouteList = [
    {
        // 这里的path使用了 根路径
        // 因此url看起来会是这样子http://localhost:8080/#/home,
        // 否则去掉个路径,  则是http://localhost:8080/#/index/home
        path: "/user/setting/basic",
        name: "basic",
        component: Basic
    }
]
export default BasicRouteList;