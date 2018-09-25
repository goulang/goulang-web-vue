const Weekly = () => import(/* webpackChunkName: "glweekly" */ '@/pages/weeklyModule/weekly.vue')
const WeeklyRouteList = [
    {
        // 这里的path使用了 根路径
        // 因此url看起来会是这样子http://localhost:8080/#/glweekly,
        // 否则去掉个路径,  则是http://localhost:8080/#/index/glweekly
        path: "/weekly",
        name: "weekly",
        component: Weekly
    }
]
export default WeeklyRouteList;