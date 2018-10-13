const UserHome = () => import(/* webpackChunkName: "home" */ '@/pages/userModule/user/userHome.vue')
const UserHomeRouteList = [
    {
        // 这里的path使用了 根路径
        // 因此url看起来会是这样子http://localhost:8080/#/home,
        // 否则去掉个路径,  则是http://localhost:8080/#/index/home
        path: "/UserHome",
        name: "UserHome",
        component: UserHome
    }
]
export default UserHomeRouteList;