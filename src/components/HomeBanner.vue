<template>
  <main>
    <div class="image"></div>
    <div class="content">
      <div class="text">
        <h2>Ruivo Solutions</h2>
        <h4>A melhor assistência técnica do brasil</h4>
        <p>Joinville - Santa Catarina</p>
      </div>
      <button @click="scrollDown">Ver serviços</button>
    </div>
  </main>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      hasScrolled: false
    }
  },
  created() {},
  mounted() {},
  computed: {},
  watch: {},
  methods: {
    scrollDown() {
      if (this.hasScrolled) return
      window.scrollBy({
        top: window.innerHeight / 2, // Valor negativo para rolar para cima
        behavior: 'smooth'
      })
      this.hasScrolled = false
    }
  }
}
</script>

<style scoped>
main {
  display: grid;
  grid-template-rows: calc(50vh - 60px) 50vh;
  background-color: rgb(25, 5, 40);
}
.image {
  background-image: url(/assets/assist.webp);
  background-size: cover;
  background-position: center;
}
.content {
  font-size: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-text);
  gap: 2em;
  width: fit-content;
  margin: auto 2em;
  justify-self: center;
}
h2 {
  font-size: 2em;
  color: orange;
}
h4 {
  font-size: 1em;
}
p {
  font-size: 0.75em;
}
button {
  border: none;
  border: 2px solid orange;
  background-color: transparent;
  color: orange;
  padding: 20px 60px;
  border-radius: 15px;
  cursor: pointer;
}
button:hover {
  box-shadow: 0px 0px 5px orange;
}
</style>
