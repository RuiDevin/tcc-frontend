<template>
  <main>
    <div id="content">
      <h2>Quem somos</h2>
      <p>
        Somos uma empresa inovadora dedicada a fornecer soluções de alta qualidade para nossos
        clientes.
      </p>
      <p>Nossos valores fundamentais incluem integridade, excelência e trabalho em equipe.</p>
      <p>
        Estamos comprometidos em impulsionar o sucesso de nossos clientes e criar um ambiente de
        trabalho positivo para nossos colaboradores.
      </p>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {},
  computed: {},
  methods: {}
}
</script>

<style scoped>
main {
  display: flex;

  transition:
    background-color 0.2s,
    color 0.2s,
    width 0.5s,
    height 0.5s;

  height: 92vh;
  background-color: skyblue;
}

#content {
  margin: 40px;

  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
