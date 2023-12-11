<template>
  <main>
    <div class="container">
      <template v-for="service in services" :key="service.type">
        <RouterLink
          class="card"
          :to="{ path: '/form', query: { type: service.type.toLowerCase() } }"
        >
          <h1>{{ service.type }}</h1>
          <img :src="'/assets/' + service.image" alt="" />
        </RouterLink>
      </template>
    </div>
  </main>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      services: [
        { type: 'CELULAR', image: 'celular.png' },
        { type: 'NOTEBOOK', image: 'notebook.png' },
        { type: 'DESKTOP', image: 'desktop.png' },
        { type: 'CONSOLE', image: 'console.png' }
      ]
    }
  },
  created() {},
  mounted() {},
  computed: {},
  watch: {},
  methods: {}
}
</script>

<style scoped>
main {
  display: flex;
  background-color: rgb(25, 5, 40);
  border-top: 1px solid white;
  min-height: 50vh;
  padding: 3em;
}
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  width: fit-content;
  margin: auto;
  gap: 3em;
}
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 5px solid var(--color-text);
  height: 240px;
  width: 240px;
  gap: 1.5em;
  transition: background-color 0.3s ease;
}
.card:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
h1 {
  font-weight: bold;
  color: var(--color-text);
  border-bottom: 1px solid var(--color-text);
}
img {
  height: 100px;
  filter: invert();
}
@media (max-width: 900px) {
  .container {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 620px) {
  .container {
    grid-template-columns: 1fr;
  }
}
</style>
