<script >
import { store } from './store.js';
import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue';
export default {
  name: 'App',
  components: {
    AppMain,
    AppHeader
  },
  data() {
    return {
      store
    }
  }
}


</script>

<template>

  <AppHeader />
  <AppMain />

</template>

<style scoped>

</style>
