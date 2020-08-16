import request from '~/utils/request'
// import cookie from 'js-cookie'

export default {
  submitLogin(user) {
    return request({
      url: '/api/ucenter/member/login',
      method: 'post',
      data: user
    })
  },
  getLoginInfo() {
    return request({
      url: '/api/ucenter/member/get-login-info',
      method: 'get'
      // 通过请求头发送token
    //   headers: { 'token': cookie.get('lakeCollege_jwt_token') }
    })
  }
}

