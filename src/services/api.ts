export const baseURL = "http://localhost:9000/" 
// export const apiPrefix = "api/"
// const apiPrefix = "/"
// const prefix = baseURL + apiPrefix
export const prefix = baseURL + "api/"
export default {
    BASE_URL:prefix,
    // 登录
    login:prefix+"login",
    // 注册
    register:prefix+"register",
    // 帖子
    topics:prefix+"topics", 
}




