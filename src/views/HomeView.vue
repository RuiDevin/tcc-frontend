<template>
<<<<<<< HEAD
  <main id="main">
    <HomeBanner />
    <HomeServices />
=======
  <main>
    <About />
    <Help />
    <Services :sendService="sendService" />
>>>>>>> efe53f56933e2f1a6869b43a2ac8db8b6abe71bd
  </main>
</template>

<script>
<<<<<<< HEAD
import HomeBanner from '@/components/HomeBanner.vue'
import HomeServices from '@/components/HomeServices.vue'
export default {
  components: { HomeBanner, HomeServices },
  props: [],
  data() {
    return {}
=======
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
>>>>>>> efe53f56933e2f1a6869b43a2ac8db8b6abe71bd
  }
}
</script>

<style scoped>
<<<<<<< HEAD
#main {
  display: grid;
  grid-template-rows: calc(100vh - 60px) 1fr;
=======
main {
  transition:
    background-color 0.2s,
    color 0.2s,
    width 0.5s,
    height 0.5s;
>>>>>>> efe53f56933e2f1a6869b43a2ac8db8b6abe71bd
}
</style>
