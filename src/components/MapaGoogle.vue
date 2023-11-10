<template>
    <div class="mapouter">
      <div class="gmap_canvas">
        <iframe
          width="100%"
          height="560"
          :src="mapUrl"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      endereco: String,
    },
    computed: {
      mapUrl() {
        const enderecoFormatado = encodeURIComponent(this.endereco);
        return `https://maps.google.com/maps?q=${enderecoFormatado}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
      },
    },
  };
  </script>
  
  <style scoped>
  * {
    transition: width 0.5s, height 0.5s;
  }
  .mapouter {
    text-align: right;
    height: 60vw;
    width: 50vw;
  }
  
  .gmap_canvas {
    overflow: hidden;
    background: none !important;
    height: 100%;
    width: 100%;
  }
  </style>
  