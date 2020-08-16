import request from '~/utils/request'

export default {
  createOrder(courseId) {
    return request({
      url: `/api/trade/order/auth/save/${courseId}`,
      method: 'post'
    })
  },
  getById(orderId) {
    return request({
      url: `/api/trade/order/auth/get/${orderId}`,
      method: 'get'
    })
  },
  isBuy(courseId) {
    return request({
      url: `/api/trade/order/auth/is-buy/${courseId}`,
      method: 'get'
    })
  },
  getList() {
    return request({
      url: '/api/trade/order/auth/list',
      method: 'get'
    })
  },
  removeById(orderId) {
    return request({
      url: `/api/trade/order/auth/remove/${orderId}`,
      method: 'delete'
    })
  },
  queryPayStatus(orderNo) {
    return request({
      url: `/api/trade/order/query-pay-status/${orderNo}`,
      method: 'get'
    })
  }
}
