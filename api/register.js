import request from '@/utils/request'
export default {

  sendMessageByMobile(mobile) {
    return request({
      url: `/api/sms/send/${mobile}`,
      method: 'get'
    })
  },

  sendMessageByEmail(email) {
    return request({
      url: `/api/mail/send/${email}`,
      method: 'get'
    })
  },

  register(member) {
    return request({
      url: '/api/ucenter/member/register',
      method: 'post',
      data: member
    })
  }
}
