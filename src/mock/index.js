import Mock from 'mockjs'
import loginAPI from './login'

Mock.mock(/\/login\/login/, 'post', loginAPI.loginByUserName)
Mock.mock(/\/user\/info/, 'get', loginAPI.getUserInfo)

export default Mock
