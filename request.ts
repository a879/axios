import { service } from './instance'
// axios.interceptors.request.use((config) => {
//     return config
// })

service.interceptors.request.use(config => {

    config.params = {
        ...config.params
    }

    return config
})

export default service
