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
<<<<<<< HEAD
  margin: 0px;
  padding: 0px;
=======
  color: inherit;
  padding: 0px;
  margin: 0px;
>>>>>>> efe53f56933e2f1a6869b43a2ac8db8b6abe71bd
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
<<<<<<< HEAD
  grid-template-rows: 60px 1fr;
=======
  grid-template-columns: 1fr;
  grid-template-rows: 8vh minmax(92vh, 1fr);

  background-size: cover;
  color: black;

  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;
>>>>>>> efe53f56933e2f1a6869b43a2ac8db8b6abe71bd
}
</style>
