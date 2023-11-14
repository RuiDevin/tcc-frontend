<script>
// import MapaGoogle from '../components/MapaGoogle.vue'
import { useFormStore } from '../stores/store.js'
import { useAuthStore } from '../stores/store.js'

export default {
  components: {},
  data() {
    return {
      var1: null,
      va2: false,
      var3: {},
      var4: []
    }
  },
  computed: {
    isAuthenticated() {
      const authStore = useAuthStore()
      return authStore.isAuthenticated
    }
  },
  methods: {
    handleSubmit(name, email, message) {
      if (!this.isAuthenticated) {
        this.$router.push({
          path: '/account',
          query: { currentPath: this.$route.fullPath }
        })
      }

      const formStore = useFormStore()
      formStore.keepForm(name.toLowerCase(), email.toLowerCase(), message)
    }
  }
}
</script>

<template>
  <main id="main">
    <section id="about">
      <h2>Quem somos</h2>
      <p>
        Ruivo Solutions, especializada em oferecer serviços de alta qualidade em assistência técnica
        para celulares, computadores e notebooks. Nosso compromisso é fornecer soluções eficientes
        para suas necessidades tecnológicas.
      </p>
    </section>

    <section id="servicos">
      <h2>Serviços</h2>
      <div>
        <p>Oferecemos uma variedade de serviços para atender suas necessidades tecnológicas:</p>
        <ul>
          <li>Reparo de celulares e smartphones</li>
          <li>Manutenção de computadores e laptops</li>
          <li>Upgrade de hardware e software</li>
          <li>Recuperação de dados</li>
          <li>Configuração de rede</li>
          <li>e muito mais...</li>
        </ul>
      </div>
    </section>

    <section id="orcamento">
      <h2>Peça um orçamento</h2>
      <form @submit.prevent="handleSubmit">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required />

        <label for="email">E-mail:</label>
        <input type="email" id="email" name="email" required />

        <label for="mensagem">Mensagem:</label>
        <textarea id="mensagem" name="mensagem" rows="6" required></textarea>

        <div class="buttons">
          <button type="submit">Limpar</button>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </section>

    <section id="contact">
      <h2>Fale Conosco</h2>
      <p>Entre em contato conosco para obter mais informações.</p>
      <p>E-mail: contato@ruivosolutions.com</p>
      <p>Telefone: (123) 456-7890</p>
    </section>

    <section id="localizacao">
      <h2>Localização</h2>
      <p>Rua Tech, nº 123, Centro, Cidade Tech. CEP: 12345-678</p>
    </section>

    <section id="faq">
      <h2>Perguntas Frequentes</h2>
      <ul>
        <!-- Perguntas frequentes aqui -->
      </ul>
    </section>
  </main>
</template>

<style scoped>
#main {
  color: black;
  min-height: 92vh;
}

section {
  min-height: 100vh;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

section:nth-child(odd) {
  background-color: gray;
}

#about {
  text-align: center;
  height: 92vh;
}

#orcamento {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

#orcamento > h2 {
  font-weight: bolder;
}

form {
  display: flex;
  flex-direction: column;

  gap: 5px;
  padding: 20px;

  border-radius: 15px;
  background-color: white;
}

form > input {
  width: 250px;
  border-radius: 8px;
  padding: 5px;
  border: 1px solid black;
}

form > textarea {
  border-radius: 8px;
  padding: 5px;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
}

button {
  margin-top: 10px;
  padding: 10px 25px;
  border-radius: 8px;

  background-color: black;
  color: white;
  border: none;
  align-self: center;
  width: fit-content;
  height: fit-content;
}
</style>
