<template>
  <main>
    <About />
    <Help />
    <Services />
  </main>
</template>

<script>
import About from '../components/AboutComponent.vue'
import Services from '../components/ServicesComponent.vue'
import Help from '../components/HelpComponent.vue'

export default {
  components: { About, Services, Help },
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
  transition:
    background-color 0.2s,
    color 0.2s,
    width 0.5s,
    height 0.5s;
}
</style>
