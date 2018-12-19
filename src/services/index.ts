import apis from './api'
import http from './http.js'

export default class ApiService {
    //获取资源的完整路径
    static getAssetURL(url: string) {
        return apis.BASE_URL + url;
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