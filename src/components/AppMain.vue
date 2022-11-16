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
    <input type="search" placeholder="Cosa vuoi guardare?" v-model="store.query">
    <button type="submit" class="btn btn-light ms-2" @click="$emit('searchData')">Cerca</button>

    <!-- trasformare in componente MovieList/MovieItem-->
    <div class="movie_box">
      <ul>
        <li :movie="movie" v-for="movie in store.movies">
          <p>Titolo: {{ movie.title }}</p>
          <p>Titolo Originale: {{ movie.original_title }}</p>
          <p>Lingua: {{ movie.original_language }}</p>
          <p>Voto: {{ movie.vote_average }}</p>
        </li>
      </ul>
    </div>


  </div>

</template>

<style scoped>

</style>
