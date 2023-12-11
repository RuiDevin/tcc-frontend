<template>
  <main>
    <div class="content">
      <h2>Nova ordem de serviço</h2>
      <form @submit.prevent="enviarFormulario">
        <label for="nome">Título</label>
        <input placeholder="Insira um título" type="text" id="nome" v-model="nome" required />

        <label for="mensagem">Descrição</label>
        <textarea
          placeholder="Escreva aqui o seu problema"
          rows="10"
          id="mensagem"
          v-model="mensagem"
          required
        ></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      nome: '',
      email: '',
      mensagem: ''
    }
  },
  methods: {
    enviarFormulario() {
      // Aqui você pode adicionar a lógica para enviar os dados do formulário
      console.log('Dados do formulário:', this.nome, this.email, this.mensagem)
    }
  }
}
</script>

<style scoped>
main {
  background-color: rgb(25, 5, 40);
  color: white;
  text-align: center;

  padding: 2em;
}

h2 {
  margin-block: 15px 20px;
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
}
label {
  font-size: 1.3em;
}
.content {
  background-color: rgb(25, 25, 40);
  padding: 30px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  min-width: 300px;
  border: 2px solid rgb(255, 255, 255, 0.5);
  max-width: 400px;
  margin: auto;
}
form {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}
input,
textarea {
  border: none;
  color: black;
  background-color: white;
  padding: 1em;
  border: 2px solid black;
}
input::placeholder,
textarea::placeholder {
  color: black;
  font-weight: bold;
}
button {
  padding: 16px;

  border: none;
  background-color: black;
  color: white;
}
button:hover {
  background-color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
}
</style>
