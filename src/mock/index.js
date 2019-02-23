import Mock from 'mockjs'
import loginAPI from './login'
import transactionAPI from './transaction'
import articleAPI from './article'

// 登录相关
Mock.mock(/\/login\/login/, 'post', loginAPI.loginByUserName)
Mock.mock(/\/user\/info/, 'get', loginAPI.getUserInfo)
Mock.mock(/\/login\/logout/, 'post', loginAPI.logout)

// 账单相关
Mock.mock(/\/transaction\/list/, 'get', transactionAPI.getList)

// 文章相关
Mock.mock(/\/article\/list/, articleAPI.getList)
Mock.mock(/\/article\/detail/, 'get', articleAPI.getArticle)
Mock.mock(/\/article\/pv/, 'get', articleAPI.getPv)
Mock.mock(/\/article\/create/, 'post', articleAPI.createArticle)
Mock.mock(/\/article\/update/, 'post', articleAPI.updateArticle)

export default Mock
