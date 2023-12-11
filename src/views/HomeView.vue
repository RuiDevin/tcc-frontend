<template>
  <main id="main">
    <HomeBanner />
    <HomeServices />
  </main>
</template>

<script>
import HomeBanner from '@/components/HomeBanner.vue'
import HomeServices from '@/components/HomeServices.vue'
export default {
  components: { HomeBanner, HomeServices },
  props: [],
  data() {
    return {}
  }
}
</script>

<style scoped>
#main {
  display: grid;
  grid-template-rows: calc(100vh - 60px) 1fr;
}
</style>
