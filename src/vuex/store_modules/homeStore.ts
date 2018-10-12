// HomeStore
export default {
    namespaced: true,
    state: {
        attention: true,
    },
    mutations: {
        //切换关注的状态
        handleAttention: (state: any, obj: any) => {
            state.attention = obj.attention
        },
    },
    actions: {

    }
}