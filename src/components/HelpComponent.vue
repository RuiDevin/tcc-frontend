<template>
  <main>
    <div id="content">
      <h1 class="title">Dúvidas frequentes</h1>
      <div class="container">
        <div class="block">
          <img class="symbol" src="/assets/abstract-shape.png" alt="" />
          <p>Como solicitar uma assistência técnica?</p>
          <img class="down-arrow" src="/assets/down-arrow.png" alt="" />
        </div>
        <div class="block">
          <img class="symbol" src="/assets/abstract-shape.png" alt="" />
          <p>Vocês atendem ao domicilio?</p>
          <img class="down-arrow" src="/assets/down-arrow.png" alt="" />
        </div>
        <div class="block">
          <img class="symbol" src="/assets/abstract-shape.png" alt="" />
          <p>Vocês fazem atendimento online?</p>
          <img class="down-arrow" src="/assets/down-arrow.png" alt="" />
        </div>
      </div>
      <!-- <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            src="https://maps.google.com/maps?q=itinga%20loja&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
            frameborder="0"
            scrolling="no"
          ></iframe>
        </div>
      </div> -->
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
  padding-block: 40px;

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

  font-size: 1.5rem;
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

.mapouter {
  border-radius: 20px;
  height: 500px;
  width: 100%;
  background: #fff;
}

.gmap_canvas {
  border-radius: 20px;
  overflow: hidden;
  height: 100%;
  width: 100%;
}

.gmap_canvas iframe {
  position: relative;
  z-index: 2;
  height: 100%;
  width: 100%;
}
</style>
