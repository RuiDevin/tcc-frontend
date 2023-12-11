// order.js
import api from '../plugins/api'

class OrderService {
  async createOrder(data) {
    try {
      const response = await api.post('/servico/', data)
      const orderData = response.data
      return orderData
    } catch (error) {
      console.error('Erro ao criar nova ordem de serviço:', error)
      throw error
    }
  }

  async getOrder() {
    try {
      const response = await api.get('/servico/')
      const orderData = response.data
      return orderData
    } catch (error) {
      console.error('Erro ao obter ordens de serviço:', error)
      throw error
    }
  }

  // async getInfo(data) {
  //   try {
  //     const response = await api.get('/link/')
  //     const info = response.data
  //     return info
  //   } catch (error) {
  //     console.error('Erro ao obter info:', error)
  //     throw error
  //   }
  // }
}

export default new OrderService()
