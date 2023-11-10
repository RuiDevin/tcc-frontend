<script setup>
import { RouterLink, RouterView } from 'vue-router'
import PageHeader from './components/PageHeader.vue'
</script>

<template>
  <PageHeader style="height: var(--header-height);"/>
  <RouterView style="margin-top: var(--header-height);"/>
</template>

<style>
* {
  color: inherit;
  text-decoration: inherit;
}

:root {
  --header-height: 8vh;
}

#app {
  display: grid;
  grid-template-rows: 1fr;
  position: relative;
}

</style>
