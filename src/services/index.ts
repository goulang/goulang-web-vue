import apis from './api'
import http from './http'

import { Login, Register, Topic } from "./interface"
export default class ApiService {
    //获取资源的完整路径
    static GetAssetURL(url: string) {
        return apis.BASE_URL + url;
    }


    // 登录,登录之后 用js-cookie库 或者手写, 保存一下cookie,返回的东西是啥就是啥
    static Login(params: Login) {
        return http.post(apis.login, (params),{
            headers:{
                "Content-Type":"application/json;charset=utf-8"
            }
        })
    }

    static Register(params: Register) {
        return http.post(apis.register, params)
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
    // 通过id更新一个帖子,第一个参数是id,第二个是内容,第二个是对象
    static PutTopics(topicID: string, topics: Topic) {
        return http.post(apis.topics, fd({ topicID, ...topics }))
    }
    // 通过id删除一个帖子 
    static DelTopicsById(topicID: string) {
        return http.delete(apis.topics + topicID)
    }

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