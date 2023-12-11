<template>
  <main>
    <img src="/assets/banner.webp" alt="" />
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

  background-color: skyblue;
  width: 100%;
  height: fit-content;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
