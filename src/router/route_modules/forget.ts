const Forgetpwd = () => import(/* webpackChunkName: "forgetpwd" */ '@/pages/forgetModule/forgetpwd.vue')
const ForgetpwdRouteList = [
    {
        // 这里的path使用了 根路径
        // 因此url看起来会是这样子http://localhost:8080/#/forgetpwd,
        // 否则去掉个路径,  则是http://localhost:8080/#/index/forgetpwd
        path: "/user/forget",
        name: "forget",
        component: Forgetpwd
    }
]
export default ForgetpwdRouteList;