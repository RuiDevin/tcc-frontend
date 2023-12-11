<template>
<<<<<<< HEAD
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
=======
  <header :class="{ headerWhileDropdown: showDropdown }">
    <RouterLink to="/" class="item header-logo">
      <p>Ruivo Solutions</p>
    </RouterLink>
    <div class="item">
      <div class="item-user" @click="redirectToAccount">
        <span>{{ username }}</span>
        <img v-if="isAuthenticated" class="user-image" src="/assets/usuario.png" alt="" />
      </div>
    </div>
    <div v-if="showDropdown" class="dropdown">
      <header>
        <img
          src="https://t.ctcdn.com.br/JlHwiRHyv0mTD7GfRkIlgO6eQX8=/640x360/smart/i257652.jpeg"
          alt=""
        />
      </header>
      <body>
        <span>Conta</span>
        <span>Minhas compras</span>
        <span @click="logoutAccount()">Desconectar</span>
      </body>
    </div>
>>>>>>> efe53f56933e2f1a6869b43a2ac8db8b6abe71bd
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
<<<<<<< HEAD
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
=======

  computed: {
    username() {
      const authStore = useAuthStore()
      return authStore.user ? authStore.user.username : 'Entrar'
    },

    isAuthenticated() {
      const authStore = useAuthStore()
      return authStore.isAuthenticated
    }
  },

  methods: {
    redirectToAccount() {
      if (this.isAuthenticated) {
        this.showDropdown = !this.showDropdown
      } else {
        this.$router.push('/account')
      }
    },
    logoutAccount() {
      const authStore = useAuthStore()
      authStore.logout()
>>>>>>> efe53f56933e2f1a6869b43a2ac8db8b6abe71bd
      this.showDropdown = false
    }
  }
}
</script>

<style scoped>
header {
<<<<<<< HEAD
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
=======
  background-color: rgb(8, 58, 91);
  color: white;
  font-size: 1.2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: background-color 0.2s;
  position: relative;
}

.headerWhileDropdown {
  background-color: rgb(8, 58, 91);
}

.item {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 3px;
  height: 100%;
  padding-inline: 15px;

  cursor: pointer;
  transition: color 0.2s;
}

.item:hover {
  color: lightcyan;
}

.item-user {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

header-logo > img {
  height: 6vh;
>>>>>>> efe53f56933e2f1a6869b43a2ac8db8b6abe71bd
}

.dropdown {
  position: absolute;
<<<<<<< HEAD
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
=======
  right: 0px;
  top: 120%;
  width: 220px;
  margin-right: 10px;

  display: grid;
  flex-direction: column;

  background-color: rgb(8, 58, 91);
  font-size: 1.1rem;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
.dropdown > header > img {
  width: 100%;
  height: 40px;
  display: block;
  margin: 0 auto;
  object-fit: cover;
}
.dropdown > body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  cursor: pointer;
}

.dropdown > body > span {
  padding-block: 12px;
}
.dropdown > body > span:last-of-type {
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
.dropdown > body > span:hover {
  background-color: rgb(8, 78, 121);
}

.user-image {
  height: 4vh;
  border: 1px solid white;
  border-radius: 50px;
>>>>>>> efe53f56933e2f1a6869b43a2ac8db8b6abe71bd
}
</style>
