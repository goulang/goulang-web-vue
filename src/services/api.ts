export const baseURL = "http://127.0.0.1:8080/" 
// const apiPrefix = "/"
// const prefix = baseURL + apiPrefix
const prefix = baseURL
export default {
    BASE_URL:prefix,
    // 登录
    login:prefix+"login/",
    // 注册
    regist:prefix+"regist/",
    // 帖子
    topics:prefix+"topics/", 
}

