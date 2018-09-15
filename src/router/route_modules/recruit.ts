const Recruit = () => import(/* webpackChunkName: "recruit" */ '@/pages/recruitModule/recruit.vue')
const RecruitRouteList = [
    {
        path: "/recruit",
        name: "recruit",
        component: Recruit
    }
]
export default RecruitRouteList;