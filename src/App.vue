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
  text-decoration: inherit;
  color: inherit;
  padding: 0px;
  margin: 0px;
}

/* Remova o destaque de preenchimento automático */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  transition: background-color 5000s ease-in-out 0s;
}

/* Remova a borda que pode ser adicionada ao focar no input */
input:-webkit-autofill:focus {
  border: none;
}

#app {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 8vh minmax(92vh, 1fr);
  color: white;

  background-size: cover;
}
</style>
