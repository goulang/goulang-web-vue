import axios from 'axios'
axios.defaults.withCredentials = false
axios.defaults.timeout = 100000
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.interceptors.request.use(config => {
    return config
});
axios.interceptors.response.use(response => {
    return response.data
    // const data = response.data
    // switch(data.errno){
    //     case '0':
    //         return data;
    //         break
    //     case '-1':
    //         return data;
    //         break
    //     default:
    //         return data
    // }
}, (err) => {
    // 这里是返回状态码不为200时候的错误处理
    if (err && err.response) {
        switch (err.response.status) {
            case 400:
                err.message = '请求错误'
                break

            case 401:
                err.message = '未授权，请登录'
                // window.onload.href = ""
                break

            case 403:
                err.message = '拒绝访问'
                break

            case 404:
                err.message = `请求地址出错: ${err.response.config.url}`
                break

            case 408:
                err.message = '请求超时'
                break

            case 500:
                err.message = '服务器内部错误'
                break

            case 501:
                err.message = '服务未实现'
                break

            case 502:
                err.message = '网关错误'
                break

            case 503:
                err.message = '服务不可用'
                break

            case 504:
                err.message = '网关超时'
                break

            case 505:
                err.message = 'HTTP版本不受支持'
                break

            default:
        }
    } else if (err) {
        // err.message = '逻辑错误'
    }

    return Promise.reject(err)
})

export default axios

