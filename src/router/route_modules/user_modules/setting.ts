const Setting = () => import(/* webpackChunkName: "setting" */ '@/pages/userModule/setting/setting.vue')
const SettingRouteList = [
    {
        // 这里的path使用了 根路径
        // 因此url看起来会是这样子http://localhost:8080/#/home,
        // 否则去掉个路径,  则是http://localhost:8080/#/index/home
        path: "/user/setting",
        name: "setting",
        component: Setting
    }
]
export default SettingRouteList;