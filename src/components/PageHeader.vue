<template>
  <header>
    <RouterLink to="/" class="logo">
      <img src="/assets/logo.png" alt="" />
      <h3 class="hiddenName">Ruivo Solutions</h3>
    </RouterLink>
    <section class="user">
      <div class="user-item" @click="handleLogin">
        <span to="/login">{{ username }}</span>
        <img src="/assets/userfield.png" alt="Foto de usuário" v-if="isAuthenticated" />
      </div>
    </section>
    <section ref="dropdown" class="dropdown" v-if="showDropdown">
      <RouterLink to="/order" class="dropdown-item" @click="hideDropdown">Orders</RouterLink>
      <span class="dropdown-item" @click="handleLogout(), hideDropdown()">Disconnect</span>
    </section>
  </header>
</template>

<script>
import { useAuthStore } from '../stores/store.js'

export default {
  data() {
    return {
      showDropdown: false
    }
  },
  computed: {
    isAuthenticated() {
      return useAuthStore().isAuthenticated
    },
    username() {
      const authStore = useAuthStore()

      const userEmail = authStore.user ? authStore.user.email : 'Fazer login'
      const username = userEmail.split('@')[0]

      return username
    }
  },
  methods: {
    handleLogin() {
      if (this.isAuthenticated) {
        this.showDropdown = !this.showDropdown
      } else {
        this.$router.push('/login')
      }
    },
    handleLogout() {
      useAuthStore().logout()
    },
    hideDropdown() {
      this.showDropdown = false
    }
  }
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(25, 25, 40);
  color: whitesmoke;
  padding-inline: 10px;
}

.logo {
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 1em;
}

.logo img {
  height: 30px;
  filter: invert();
}

.user {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-right: 10px;
}

.user div {
  display: flex;
  align-items: center;
  gap: 8px;
}

.user img {
  height: 30px;
}

.user-item {
  cursor: pointer;
  color: white;
  transition: color 0.2s;
}

.user-item:hover {
  color: rgb(185, 185, 185);
}

.dropdown {
  position: absolute;
  right: 20px;
  top: 60px;
  display: flex;
  flex-direction: column;
  background-color: rgba(25, 25, 40, 0.15);
}

.dropdown-item {
  padding: 15px 40px;
  cursor: pointer;
  color: rgb(225, 225, 225);
  background-color: rgb(25, 25, 40);
}

.dropdown-item:hover {
  background-color: rgb(30, 30, 45);
  color: white;
}

@media (max-width: 300px) {
  .hiddenName {
    display: none;
  }
}
</style>
