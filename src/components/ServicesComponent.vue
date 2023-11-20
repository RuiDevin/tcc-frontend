<template>
  <main>
    <div id="content">
      <h1 class="title">Serviços de conserto</h1>
      <div class="container">
        <div
          class="item"
          :class="{ selected: selected == 'Computador' }"
          @click="selectItem('Computador')"
        >
          <p>Computador</p>
          <img src="assets/computador.png" alt="" />
        </div>
        <div
          class="item"
          :class="{ selected: selected == 'Notebook' }"
          @click="selectItem('Notebook')"
        >
          <p>Notebook</p>
          <img src="assets/notebook.png" alt="" />
        </div>
        <div
          class="item"
          :class="{ selected: selected == 'Celular' }"
          @click="selectItem('Celular')"
        >
          <p>Celular</p>
          <img src="assets/celular.png" alt="" />
        </div>
        <div
          class="item"
          :class="{ selected: selected == 'Console' }"
          @click="selectItem('Console')"
        >
          <p>Console</p>
          <img src="assets/console.png" alt="" />
        </div>
      </div>
      <button>Continuar</button>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      selected: 'Computador'
    }
  },
  created() {},
  computed: {},
  methods: {
    selectItem(name) {
      this.selected = name
    }
  }
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

  /* min-height: 100vh; */
  background-color: skyblue;
  color: white;
}

#content {
  padding-bottom: 60px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  flex-grow: 1;
  color: black;
  gap: 20px;
}

.title {
  margin-bottom: 40px;
  border-bottom: 5px solid black;
  padding: 20px 100px;
  width: fit-content;
  margin-inline: auto;
}

.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, 350px);
  justify-content: center;
  gap: 40px;
}

.item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  font-size: 2rem;
  width: 350px;
  height: 350px;
  background-color: white;
  color: black;
  border: 3px solid black;
  border-radius: 30px;

  cursor: pointer;
  transition: background-color 0.5s border-color 1.5s;
}

.item img {
  height: 150px;
}

.item:hover {
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 3px 3px 3px 3px black;
}

.selected {
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 3px 3px 3px 3px black;
}

button {
  margin-top: 40px;
  font-size: 2rem;
  width: 50vw;
  margin-inline: auto;
  padding: 20px 60px;
  border-radius: 15px;
  cursor: pointer;
  background-color: black;
  color: white;
}

button:hover {
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
