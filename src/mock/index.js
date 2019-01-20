import Mock from 'mockjs'
import loginAPI from './login'
import transactionAPI from './transaction'

// 登录相关
Mock.mock(/\/login\/login/, 'post', loginAPI.loginByUserName)
Mock.mock(/\/user\/info/, 'get', loginAPI.getUserInfo)
Mock.mock(/\/login\/logout/, 'post', loginAPI.logout)

// 账单相关
Mock.mock(/\/transaction\/list/, 'get', transactionAPI.getList)

export default Mock
