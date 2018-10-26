const Spitslot = () => import(/* webpackChunkName: "spitslot" */ '@/pages/spitslotModule/spitslot.vue')
const SpitslotRouteList = [
    { 
        path: "/spitslot",
        name: "spitslot",
        component: Spitslot
    }
]
export default SpitslotRouteList;