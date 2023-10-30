import axios from 'axios'
import { LOCAL_STORAGE_TOKEN_KEY } from '../../constants'

const baseInstance = axios.create({
  baseURL: import.meta.env.VITE_API_ORIGIN,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const apiInstance = baseInstance

apiInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)
    config.headers.Authorization = `Bearer ${accessToken}`
    return config
  },
  (error) => Promise.reject(error)
)

apiInstance.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true
      const { data } = await baseInstance.post('/auth/refresh')
      localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, data.accessToken)
      config.headers.Authorization = `Bearer ${data.accessToken}`
      return axiosApiInstance(originalRequest)
    } else {
      // This is important, so that unhandled cases make axios throw errors
      return Promise.reject(error)
    }
  }
)
