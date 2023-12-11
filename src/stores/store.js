import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import authService from '../services/auth'

export const useAuthStore = defineStore('auth', () => {
  const state = reactive({
    token: { access: null, refresh: null },
    isAuthenticated: false,
    user: null // Adicione um estado para armazenar as informações do usuário
  })

  const isAuthenticated = computed(() => state.isAuthenticated)
  const token = computed(() => state.token)
  const user = computed(() => state.user)

  const login = async (user) => {
    try {
      const data = await authService.login(user)
      state.token.access = data.access
      state.token.refresh = data.refresh
      state.isAuthenticated = true

      // Após o login bem-sucedido, obtenha as informações do usuário
      await getUserData()
    } catch (error) {
      state.token.access = null
      state.token.refresh = null
      state.isAuthenticated = false
      return Promise.reject(error)
    }
  }

  const logout = () => {
    state.token.access = null
    state.token.refresh = null
    state.isAuthenticated = false
    state.user = null // Limpe as informações do usuário ao fazer logout
  }

  const getUserData = async () => {
    try {
      const userData = await authService.getUserData()
      console.log(userData)
      state.user = userData
    } catch (error) {
      console.error('Erro ao obter informações do usuário:', error)
    }
  }

  return { isAuthenticated, token, user, login, logout }
})

export const usePurchaseStore = defineStore('purchase', {
  state: () => ({
    purchase: null,

    serviceId: null,
    queueId: null
  }),
  actions: {
    keepPurchase(service, queue, currentElo, targetElo, price, days) {
      this.purchase = {
        service: service,
        queue: queue,
        currentElo: currentElo,
        targetElo: targetElo,
        price: price,
        time: days
      }
    },
    submitServiceId(id) {
      this.serviceId = id
    },
    submitQueueId(id) {
      this.queueId = id
    },
    clearPurchase() {
      this.purchase = null
    }
  }
})
