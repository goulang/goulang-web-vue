const Reset = () => import(/* webpackChunkName: "reset" */ '@/pages/forgetModule/reset.vue')
const ResetRouteList = [
    {
        // 这里的path使用了 根路径
        // 因此url看起来会是这样子http://localhost:8080/#/reset,
        // 否则去掉个路径,  则是http://localhost:8080/#/index/reset
        path: "/user/reset",
        name: "reset",
        component: Reset
    }
]
export default ResetRouteList;