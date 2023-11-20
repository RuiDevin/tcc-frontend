<template>
  <main>
    <About />
    <Help />
    <Services :sendService="sendService" />
  </main>
</template>

<script>
import { useHomeStore } from '../stores/store.js'

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
  methods: {
    sendService(service) {
      this.$router.push({
        path: '/services',
        query: { type: service }
      })
    }
  }
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
