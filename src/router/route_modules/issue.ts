const Issue = () => import(/* webpackChunkName: "issue" */ '@/pages/issueModule/issue.vue')
const IssueRouteList = [
    { 
        path: "/issue",
        name: "issue",
        component: Issue
    }
]
export default IssueRouteList;