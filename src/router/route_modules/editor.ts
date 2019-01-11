const Editor = () => import(/* webpackChunkName: "editor" */ '@/pages/publishModule/editor.vue')
const EditorRouteList = [
    {
        path: "/editor",
        name: "editor",
        component: Editor
    }
]
export default EditorRouteList;