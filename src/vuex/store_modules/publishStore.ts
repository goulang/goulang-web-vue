//发布模块
export default {
    namespaced: true,

    state: {
        // 发布组件是否能够显示在全局中,默认是false,不显示,
        publishComponentToggle: false
    },
    mutations: {
        togglePublishComponent: (state: any) => {
            return state.publishComponentToggle = !state.publishComponentToggle
        }
    }
}