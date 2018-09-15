const Tutorial = () => import(/* webpackChunkName: "tutorial" */ '@/pages/tutorialModule/tutorial.vue')
const TutorialRouteList = [
    {
        path: "/tutorial",
        name: "tutorial",
        component: Tutorial
    }
]
export default TutorialRouteList;