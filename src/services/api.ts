export const baseURL = "http://localhost:8080/" 
// const apiPrefix = "/"
// const prefix = baseURL + apiPrefix
const prefix = baseURL
export default {
    BASE_URL:prefix,
    // 登录
    login:prefix+"login/",
    // 注册
    register:prefix+"register/",
    // 帖子
    topics:prefix+"topics/", 
}

