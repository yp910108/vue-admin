import axios from 'axios'
import {Message} from 'element-ui'
import store from '@/store'
import {getToken} from './auth'

const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000
})

service.interceptors.request.use((config) => {
  if (store.getters.token) {
    config.headers['X-Token'] = getToken()
  }
  return config
}, (error) => {
  console.warn(error)
  Promise.reject(error)
})

service.interceptors.response.use((response) => {
  return response
}, (error) => {
  console.warn('err' + error)
  Message({
    message: error.message,
    type: 'error',
    duration: 5 * 1000
  })
  return Promise.reject(error)
})

export default service
