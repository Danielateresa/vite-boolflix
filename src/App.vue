<script >
import { store } from './store.js';
import AppMain from './components/AppMain.vue';
export default {
  name: 'App',
  components: {
    AppMain,
  },
  data() {
    return {
      store
    }
  },
  methods: {
    searchCaracters() {
      console.log('search now');
    }
  },
  mounted() {
    this.store.CallApi()
    console.log(this.store);
  }
}


</script>

<template>

  <AppMain @searchData="searchCaracters" />

</template>

<style scoped>

</style>
