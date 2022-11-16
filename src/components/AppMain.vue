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

    <!-- trasformare in componente SearchComponent-->
    <input type="search" placeholder="Search movie" v-model="store.query">
    <button type="submit" class="btn btn-light ms-2" @click="$emit('searchData')">Search</button>

    <!-- trasformare in componente MovieList/MovieItem-->
    <div class="movie_box">v-if=""
      <ul>
        <li :movie="movie" v-for="movie in store.movies">{{ movie.title }}</li>
      </ul>
    </div>


  </div>

</template>

<style scoped>

</style>
