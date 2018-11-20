const Editor = () => import(/* webpackChunkName: "editor" */ '@/components/editor/editor.vue')
const EditorRouteList = [
    {
        path: "/editor",
        name: "editor",
        component: Editor
    }
]
export default EditorRouteList;