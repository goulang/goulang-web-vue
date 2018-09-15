const Partner = () => import(/* webpackChunkName: "partner" */ '@/pages/partnerModule/partner.vue')
const PartnerRouteList = [
    { 
        path: "/partner",
        name: "partner",
        component: Partner
    }
]
export default PartnerRouteList;