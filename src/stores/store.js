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

export const useFormStore = defineStore('form', {
  state: () => ({
    form: null
  }),
  actions: {
    keepForm(name, email, message) {
      this.form = {
        name: name,
        email: email,
        message: message
      }
    },
    clearPurchase() {
      this.purchase = null
    }
  }
})
