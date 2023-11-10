// store.js
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    user: null
  }),
  actions: {
    login(username, password) {
      this.isAuthenticated = true
      this.user = { username: username, password: password }
    },
    logout() {
      this.isAuthenticated = false
      this.user = null
    }
  }
})

export const usePurchaseStore = defineStore('purchase', {
  state: () => ({
    purchase: null
  }),
  actions: {
    keepPurchase(
      totalPrice,
      currentEloName,
      currentEloImage,
      targetEloName,
      targetEloImage,
      deadline
    ) {
      this.purchase = {
        totalPrice: totalPrice,
        currentEloName: currentEloName,
        currentEloImage: currentEloImage,
        targetEloName: targetEloName,
        targetEloImage: targetEloImage,
        deadline: deadline
      }
    },
    clearPurchase() {
      this.purchase = null
    }
  }
})