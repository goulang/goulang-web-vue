//登陆模块LoginStore
export default {
    namespaced: true,

    state: {
        // 登陆组件是否能够显示在全局中,默认是false,不显示,
        // 其中为了防止前期注册用户加载速度,直接使用v-show来进行判断组件是否需要显示
        loginComponentToggle: false
    },
    mutations: {
        toggleLoginComponent: (state: any) => {
            return state.loginComponentToggle = !state.loginComponentToggle
        }
    }
}