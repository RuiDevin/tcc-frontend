<template>
  <main>
    <div id="content">
      <h1>{{ $route.query.type }}</h1>
      <button @click="this.$router.push({ path: '/' })">VOLTAR</button>
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
  padding: 40px 20px;

  transition:
    background-color 0.2s,
    color 0.2s,
    width 0.5s,
    height 0.5s;

  background-color: skyblue;
}

#content {
  margin: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  gap: 20px;

  background-color: black;
  color: white;
  border-radius: 20px;
}

button {
  border-radius: 20px;
  color: black;
  padding: 20px;
}
</style>
