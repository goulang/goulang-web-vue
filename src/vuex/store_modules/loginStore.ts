//登陆模块LoginStore
export default {
    namespaced:true,

    state: {
        // 登陆组件是否能够显示在全局中,默认是false,不显示,
        // 其中为了防止前期注册用户加载速度,直接使用v-show来进行判断组件是否需要显示
        loginComponentToggle: false
    },
    mutations: {
        // 此函数用来异步处理登陆组件的显示与隐藏,因此,不需要传递第二个参数,
        // 这里最好异步响应结果否则容易造成SPA崩溃,原因是
        // 因为是Webpack整体的加载方式很容易出现网络问题,对于JS的文件的加载不完全,因此异步加载切换容易点
        toggleLoginComponent: (state: any) => {
            return state.loginComponentToggle = !state.loginComponentToggle
        }
    }
}