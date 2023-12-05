axios.interceptors.response.use((response) => {
    return response
})

// 移除拦截器
axios.interceptors.request.eject();