<script >
import { store } from '../store.js';
import MovieList from './MovieList.vue';

export default {
  name: 'AppMain',
  components: {
    MovieList,
  },
  data() {
    return {
      store
    }
  },
}

</script>

<template>

  <main class="site_main">
    <div class="container pt-5">
      <h5 class="text-uppercase pb-2">originali netflix</h5>

      <MovieList />

    </div>
  </main>
  <!-- /.site_main -->

</template>

<style lang="scss" scoped>
h5 {
  color: white;
  margin-left: -0.5rem;
}
</style>
