const Resource = () => import(/* webpackChunkName: "resource" */ '@/pages/resourceModule/resource.vue')
const ResourceRouteList = [
    { 
        path: "/resource",
        name: "resource",
        component: Resource
    }
]
export default ResourceRouteList;