//注册模块RegisterStore
export default {
    namespaced: true,

    state: {
        // 注册组件是否能够显示在全局中,默认是false,不显示,
        // 其中为了防止前期注册用户加载速度,直接使用v-show来进行判断组件是否需要显示
        registerComponentToggle: false
    },
    mutations: {
        toggleRegisterComponent: (state: any) => {
            return state.registerComponentToggle = !state.registerComponentToggle
        }
    }
}