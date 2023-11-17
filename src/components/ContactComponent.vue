<template>
  <main>
    <div id="content">
      <h2>Contato</h2>
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

  min-height: 100vh;
  background-color: skyblue;
}

#content {
  margin: 40px;

  display: flex;
  flex-direction: column;
}
</style>
