<template>
  <div id="main">
    <div class="container">
      <h2 class="title-block">Acesse sua conta</h2>
      <div class="input-block">
        <div class="input-user" :class="{ inputRed: placeholder.error == 1 }">
          <img src="" alt="" />
          <input
            :placeholder="placeholder.login"
            type="text"
            id="username"
            v-model="formData.username"
            @input="restrictSpecialCharacters"
          />
        </div>
        <div class="input-email" :class="{ inputRed: placeholder.error == 3 }" v-if="signMode">
          <img src="" alt="" />
          <input
            :placeholder="placeholder.email"
            type="text"
            id="email"
            v-model="formData.email"
            @input="restrictSpecialCharacters"
          />
        </div>
        <div class="input-password" :class="{ inputRed: placeholder.error == 2 }">
          <img src="" alt="" />
          <input
            :placeholder="placeholder.senha"
            :type="showPassword ? 'text' : 'password'"
            id="password"
            v-model="formData.password"
            @input="restrictSpecialCharacters"
          />
          <img src="" style="cursor: pointer" @click="togglePasswordVisibility" alt="" />
        </div>
      </div>
      <div class="button-block">
        <button @click="login">Entrar</button>
        <button class="register-button" @click="toggleSignMode">Registrar-se</button>
        <button class="register-button" @click="sendAccount">L</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '../stores/store.js'
import axios from 'axios'

export default {
  data() {
    return {
      previousPath: null,
      showPassword: false,
      signMode: false,

      formData: {
        username: '',
        password: '',
        email: ''
      },

      placeholder: {
        login: 'Usuário',
        senha: 'Senha',
        email: 'E-mail',
        error: 0
      }
    }
  },

  created() {
    this.previousPath = this.$route.query.currentPath
  },

  methods: {
    sendAccount() {
      const lule = {
        username: 'Gabriel',
        password: '1234',
        email: 'deucerto@gmail.com'
      }

      axios
        .post('http://0.0.0.0:19003/api/usuarios', lule)
        .then((response) => {})
        .catch((error) => {})
    }
  },

  toggleSignMode() {
    this.signMode = !this.signMode
  },

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword
  },

  restrictSpecialCharacters(event) {
    const input = event.target
    input.value = input.value.replace(/[^\w.@]/gi, '')
  },

  login() {
    const authStore = useAuthStore()
    const username = this.formData.username
    const password = this.formData.password

    if (username.length < 3) {
      this.placeholder.login = 'Insira um login'
      this.placeholder.error = 1
      return
    }

    if (!password) {
      this.placeholder.senha = 'Insira uma senha'
      this.placeholder.error = 2
      return
    }

    authStore.login(username.toLowerCase(), password)

    if (this.previousPath != null) {
      this.$router.push(this.previousPath)
    } else {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
#main {
  background-color: rgba(0, 0, 0, 0.8);
  padding: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  background-color: white;
  color: black;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 50px;
  gap: 30px;
}

h2 {
  color: rgb(0, 160, 255);
  padding-block: 15px;
}

.input-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.input-user,
.input-password,
.input-email {
  position: relative;
  display: flex;
  align-items: center;
  background-color: rgb(205, 205, 205);
  flex-grow: 1;
  width: 100%;
  border: 1px solid transparent;
  border-radius: 10px;
}

input {
  background-color: rgb(205, 205, 205);
  padding: 10px;
  border: none;
  width: 100%;
  border: none;
  min-width: 200px;
  border-radius: 10px;
}

input:focus {
  outline: none;
}

img {
  height: 16px;
  padding: 10px;
}

span {
  position: absolute;
  right: 5px;
}

.button-block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

button {
  color: white;
  border-radius: 10px;
  padding: 7px 25px;
  cursor: pointer;
  transition: color 0.2s;
  border: none;
}

button:nth-child(odd) {
  background-color: black;
}
button:nth-child(even) {
  background-color: black;
}

button:hover {
  background: none;
  background-color: blue;
}

.inputRed {
  border: 1px solid red;
}
</style>
``
