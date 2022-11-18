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

  <main class="site_main ">
    <div class="container pt-5">
      <h5 class="text-uppercase pb-2 mt-5">originali netflix</h5>

      <MovieList />

    </div>
  </main>
  <!-- /.site_main -->

</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as*;


h5 {
  color: $light;
  margin-left: -0.5rem;
}
</style>
