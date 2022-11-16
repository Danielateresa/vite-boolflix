<script >
import { store } from './store.js';
export default {
  name: 'App',
  components: {
    //componenti
  },
  data() {
    return {
      store
    }
  },
  mounted() {
    this.store.CallApi()
    console.log(this.store);
  }
}


</script>

<template>

</template>

<style scoped>

</style>
