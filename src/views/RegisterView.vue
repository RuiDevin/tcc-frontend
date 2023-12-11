<template>
  <main id="main">
    <div class="container">
      <h1>Criar conta</h1>
      <div class="row">
        <input
          class="input-text"
          ref="name"
          id="name"
          v-model="fullname"
          type="text"
          placeholder="Nome completo"
          @input="restrictNoLetters"
        />
        <img
          class="input-icon"
          :style="{ left: inputSpace }"
          src="/assets/userfield.png"
          alt="Imagem de login"
        />
      </div>
      <div class="row">
        <input
          class="input-text"
          ref="username"
          id="username"
          v-model="username"
          type="text"
          placeholder="Crie um usuário"
          @input="restrictSpecialCharacters"
        />
        <img
          class="input-icon"
          :style="{ left: inputSpace }"
          src="/assets/userfield.png"
          alt="Imagem de login"
        />
      </div>
      <div class="row">
        <input
          class="input-text"
          ref="email"
          id="email"
          v-model="email"
          type="text"
          placeholder="Insira um email existente"
          @input="restrictSpaceCharacter"
        />
        <img
          class="input-icon"
          :style="{ left: inputSpace }"
          src="/assets/emailfield.png"
          alt="Imagem de login"
        />
      </div>
      <div class="row">
        <input
          class="input-text"
          ref="password"
          id="password"
          v-model="password"
          :type="passwordInputType"
          placeholder="Crie uma senha"
          @input="restrictSpaceCharacter"
        />
        <img
          class="input-icon"
          :style="{ left: inputSpace }"
          src="/assets/passwordfield.png"
          alt="Cadeado de senha"
        />
        <img
          class="input-icon"
          style="right: 12px; cursor: pointer"
          src="/assets/hide.png"
          alt="Botão de mostrar senha"
          @click="togglePasswordVisibility"
        />
      </div>
      <button @click="handleRegisterSubmit">Confirmar cadastro</button>
      <RouterLink class="router" to="/login">Fazer login</RouterLink>
    </div>
  </main>
</template>

<script>
import { useAuthStore } from '../stores/store'

export default {
  data() {
    return {
      // password input status ( text / password ) to change pwd visibility
      passwordInputType: 'password',
      inputSpace: '12px',

      // new user data
      fullname: null,
      username: null,
      password: null,
      email: null
    }
  },
  created() {},
  computed: {},
  methods: {
    restrictSpecialCharacters(event) {
      const input = event.target
      input.value = input.value.toLowerCase().replace(/[^\w\d]/gi, '')
    },
    restrictSpaceCharacter(event) {
      const input = event.target
      input.value = input.value.replace(/\s/g, '')
    },
    restrictNoLetters(event) {
      const input = event.target
      input.value = input.value.replace(/[^\w\s]/gi, '')
      input.value = input.value.replace(/[!\d]/gi, '')
    },

    togglePasswordVisibility() {
      this.passwordInputType = this.passwordInputType === 'text' ? 'password' : 'text'
    },

    handleRegisterSubmit() {
      this.resetFieldClasses()
      this.hasInvalidField = false

      const fullname = this.fullname
      const username = this.username
      const password = this.password
      const email = this.email

      if (!fullname || fullname.length < 10) {
        this.hasInvalidField = true
        this.$refs.name.classList.add('invalid-field')
      }

      if (!username || username.length < 5) {
        this.hasInvalidField = true
        this.$refs.username.classList.add('invalid-field')
      }

      if (!email || email.length < 12) {
        this.hasInvalidField = true
        this.$refs.email.classList.add('invalid-field')
      }

      if (!password || password.length < 5) {
        this.hasInvalidField = true
        this.$refs.password.classList.add('invalid-field')
      }

      if (this.hasInvalidField) return

      this.$router.push('/login')
    },

    resetFieldClasses() {
      Object.keys(this.$refs).forEach((ref) => {
        if (this.$refs[ref].classList) {
          this.$refs[ref].classList.remove('invalid-field')
        }
      })
    }
  }
}
</script>

<style scoped>
#main {
  display: grid;
  align-items: center;
  justify-content: center;

  background-color: rgb(50, 50, 100);
  color: black;
}

.container {
  color: orange;
  background-color: rgba(25, 25, 40, 0.8);

  display: flex;
  flex-direction: column;
  justify-content: center;

  width: fit-content;
  height: fit-content;

  margin-inline: 5vw;
  padding: 40px 30px;
  gap: 15px;

  border: 1px solid orange;
  border-radius: 5px;
}

h1 {
  text-align: center;
  margin-block: 15px;
  font-weight: bold;
}

.row {
  display: flex;
  align-items: center;
  position: relative;
}

label {
  padding-left: 8px;
}
p {
  cursor: pointer;
  font-size: 0.9rem;
  text-align: center;
}

.input-text,
button {
  padding-inline: 38px;
  height: 2.75em;
  border-radius: 5px;
}
.input-icon {
  position: absolute;
  width: 16px;
}

.input-text {
  width: 100%;
  background-color: transparent;

  color: black;
  outline: none;
  border: none;
  background-color: rgb(220, 220, 220);
}

.input-eye {
  cursor: pointer;
}

.router {
  cursor: pointer;
  text-align: center;
  font-size: 0.9rem;
}

.container p:hover,
.container label:hover,
.router:hover {
  color: orangered;
}

button {
  background-color: orange;
  color: white;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  background-color: orangered;
}

.invalid-field {
  color: rgb(190, 0, 0);
  outline: 1px solid rgb(190, 0, 0);
}

.invalid-field::placeholder {
  color: rgb(190, 0, 0);
}
</style>
