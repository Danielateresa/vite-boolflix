<script >
import { store } from '../store.js';
export default {
  name: 'AppMain',
  emits: ['searchData'],
  components: {

  },
  data() {
    return {
      store
    }
  }
}
</script>

<template>

  <div class="container">

    <input type="search" placeholder="Search movie" v-model="store.query">
    <button type="submit" class="btn btn-light ms-2" @click="$emit('searchData')">Search</button>

  </div>

</template>

<style scoped>

</style>
