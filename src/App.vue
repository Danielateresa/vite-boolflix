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
  /*methods: {
    searchCaracters() {
       console.log('search now');

      console.log(this.store.query); 
    }
  },*/
  mounted() {
    this.store.CallApi()
    console.log(this.store);


  }
}


</script>

<template>

  <AppMain @searchData="this.store.CallApi" />

</template>

<style scoped>

</style>
