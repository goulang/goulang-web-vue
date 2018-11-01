const Details = () => import(/* webpackChunkName: "details" */ '@/components/details/details.vue')
const DetailsRouteList = [
    {
        path: "/d",
        name: "d",
        component: Details
    }
]
export default DetailsRouteList;