import apis from './api'
import http from './http.js'

import { Login, Register, Topic } from "./interface"
export default class ApiService {
    //获取资源的完整路径
    static GetAssetURL(url: string) {
        return apis.BASE_URL + url;
    }


    // 登录
    static Login(params: Login) {
        return http.post(apis.login, xw(params))
    }

    static Register(params: Register) {
        return http.post(apis.regist, params)

    }

    // 帖子
    // 得到全部的帖子
    static GetTopics() {
        return http.get(apis.topics)
    }
    // 得到具体的某一个帖子
    static GetTopicsById(topicID: string) {
        return http.get(apis.topics + topicID)
    }
    // 新增帖子,发帖
    static PublicTopics(topics: Topic) {
        return http.post(apis.topics, fd(topics))
    }
    // // 通过id删除一个帖子,缺少一个字段,是token还是session??????
    // static DelTopicsById(topicID:string){
    //     return http.delete(apis.topics+topicID)
    // }
 

}

let _reqToken = (token: string = "", config: any = {}) => {
    if (config.headers) {
        config.headers.Authorization = 'Bearer ' + token
        return config
    }
    return {
        ...config, headers: { 'Authorization': 'Bearer ' + token }
    }
}



let xw = (body: any = {}) => {
    let params = new URLSearchParams()
    for (var key in body) {
        params.append(key, body[key])
    }
    return params;
}

let fd = (body: any = {}) => {
    let formData = new FormData();
    for (let key in body) {
        formData.append(key, body[key]);
    }
    return formData
};