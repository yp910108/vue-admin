import request from 'utils/request'

export function loginByUserName(username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/login/login',
    methods: 'post',
    data
  })
}
