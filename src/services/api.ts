export const baseURL = "http://www.goulang.org:8080/" 
// export const apiPrefix = ""
// const apiPrefix = "/"
// export const prefix = baseURL + apiPrefix
export const prefix = baseURL    
export default {
    BASE_URL:prefix,
    // 登录
    login:prefix+"login",
    // 注册
    register:prefix+"register",
    // 帖子
    topics:prefix+"topics", 
}




