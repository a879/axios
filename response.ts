import { service } from './instance'
// axios.interceptors.response.use((response) => {
//     return response
// })

// 响应拦截器
service.interceptors.response.use(resp => {
    return resp
})

export default service
