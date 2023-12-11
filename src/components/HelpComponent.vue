<template>
  <main>
    <div id="content">
      <h1 class="title">Dúvidas frequentes</h1>
      <div class="container">
        <div class="block">
          <img class="symbol" src="/assets/abstract-shape.png" alt="" />
          <h2>Como solicitar uma assistência técnica?</h2>
          <img class="down-arrow" src="/assets/down-arrow.png" alt="" />
        </div>
        <div class="block">
          <img class="symbol" src="/assets/abstract-shape.png" alt="" />
          <h2>Vocês atendem ao domicilio?</h2>
          <img class="down-arrow" src="/assets/down-arrow.png" alt="" />
        </div>
        <div class="block">
          <img class="symbol" src="/assets/abstract-shape.png" alt="" />
          <h2>Vocês fazem atendimento online?</h2>
          <img class="down-arrow" src="/assets/down-arrow.png" alt="" />
        </div>
      </div>
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

  height: fit-content;
  background-color: skyblue;
}

#content {
  padding: 40px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  margin: 0 auto;
  color: black;
}

.title {
  margin-bottom: 40px;
  border-bottom: 5px solid black;
  padding: 20px 100px;
  width: fit-content;
  margin-inline: auto;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.block {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  border: 4px solid rgba(255, 255, 255, 0.5);
  padding: 15px 20px;

  cursor: pointer;
}

.block > p {
  margin-inline: 5px;
}

.symbol {
  height: 2.5rem;
}

.down-arrow {
  height: 2.5rem;
  justify-self: flex-end;
}

@media (max-width: 800px) {
  .title {
    padding: 0px;
    margin: 0px;
    border-bottom: 1px solid black;
  }

  h1 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1.2rem;
  }
}
</style>
