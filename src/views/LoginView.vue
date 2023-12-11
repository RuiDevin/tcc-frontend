<template>
  <main id="main">
    <div class="container" @keyup.enter="handleLoginSubmit">
      <h1>Login</h1>
      <div class="row">
        <input
          class="input-text"
          ref="email"
          id="email"
          v-model="email"
          type="text"
          placeholder="Insira seu email"
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
          placeholder="Insira sua senha"
          @input="restrictSpaceCharacter"
        />
        <img
          class="input-icon"
          :style="{ left: inputSpace }"
          src="/assets/passwordfield.png"
          alt="Cadeado de senha"
        />
        <img
          class="input-icon input-eye"
          :style="{ right: inputSpace }"
          src="/assets/hide.png"
          alt="Botão de mostrar senha"
          @click="togglePasswordVisibility"
        />
      </div>
      <div class="others-row">
        <p>Esqueci a senha</p>
      </div>
      <button @click="handleLoginSubmit">Entrar</button>
      <RouterLink class="router" to="/register">Não possui uma conta? Registre-se</RouterLink>
    </div>
  </main>
</template>

<script>
import { useAuthStore } from '../stores/store'

export default {
  data() {
    return {
      previousPath: null,

      // password input status ( text / password ) to change pwd visibility
      passwordInputType: 'password',
      inputSpace: '12px',
      rememberPassword: true,

      // login form data
      email: null,
      password: null
    }
  },
  created() {
    this.previousPath = this.$route.query.previousPath
  },
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

    togglePasswordVisibility() {
      this.passwordInputType = this.passwordInputType === 'text' ? 'password' : 'text'
    },

    handleLoginSubmit() {
      const authStore = useAuthStore()

      this.resetFieldClasses()
      this.hasInvalidField = false

      const email = this.email
      const password = this.password

      if (!email || email.length < 5) {
        this.hasInvalidField = true
        this.$refs.email.classList.add('invalid-field')
      }

      if (!password || password.length < 5) {
        this.hasInvalidField = true
        this.$refs.password.classList.add('invalid-field')
      }

      if (this.hasInvalidField) return

      // Chame a ação de login da store com o nome de usuário e senha
      authStore
        .login({ email, password })
        .then(() => {
          // Se o login for bem-sucedido, redirecione para a rota anterior ou a rota padrão
          if (this.previousPath) {
            this.$router.push(this.previousPath)
          } else {
            this.$router.push('/')
          }
        })
        .catch((error) => {
          // Se houver um erro no login, você pode lidar com ele aqui
          console.error('Erro ao fazer login:', error)
        })
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
