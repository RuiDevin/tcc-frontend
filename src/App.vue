<script setup>
import { RouterView } from 'vue-router'
import PageHeader from './components/PageHeader.vue'
</script>

<template>
  <PageHeader />
  <RouterView />
</template>

<style>
* {
  color: inherit;
  text-decoration: inherit;
  margin: 0px;
  padding: 0px;
}

/* Remova o destaque de preenchimento automático */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  transition: background-color 5000s ease-in-out 0s;
}

input:-webkit-autofill:focus {
  border: none;
}

#app {
  min-height: 100vh;

  display: grid;
  grid-template-rows: 60px 1fr;
}
</style>
