import axios from 'axios'

// post 请求
axios({
    method: 'post',
    url: '',
    data: {

    }
})

// get 请求
axios({
    method: 'get',
    url: ''
})

// 全局配置
axios.defaults.baseURL = ''

axios.create({
    baseURL: ''
})

export const service = axios.create({
    baseURL: '',
    timeout: 5000
})

// 移除拦截器
axios.interceptors.request.eject(service);