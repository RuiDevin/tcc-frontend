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

export const useHomeStore = defineStore('home', {
  state: () => ({
    service: null
  }),
  actions: {
    keepSelection(service) {
      this.service = service
    },
    clearSelection() {
      this.service = null
    }
  }
})
