import api from '../plugins/api'

class AuthService {
  async login(user) {
    try {
      const response = await api.post('/token/', user)
      const token = response.data
      return token
    } catch (error) {
      console.error('Erro no login:', error)
      throw error
    }
  }

  // async getUserData() {
  //   try {
  //     const response = await api.get('/user-details/')
  //     const userData = response.data
  //     return userData
  //   } catch (error) {
  //     console.error('Erro ao obter dados do usuário:', error)
  //     throw error
  //   }
  // }
}

export default new AuthService()
