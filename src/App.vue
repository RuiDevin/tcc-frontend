<script setup>
import { RouterView } from 'vue-router'
import PageHeader from './components/PageHeader.vue'
</script>

<template>
  <PageHeader style="height: var(--header-height)" />
  <RouterView style="margin-top: var(--header-height)" />
</template>

<style>
* {
  color: inherit;
  text-decoration: inherit;
}

:root {
  --header-height: 8vh;
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
  grid-template-rows: 1fr;
  position: relative;
}
</style>
