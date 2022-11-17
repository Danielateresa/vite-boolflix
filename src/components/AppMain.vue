<script >
import { store } from '../store.js';
export default {
  name: 'AppMain',
  data() {
    return {
      store
    }
  },
}
</script>

<template>

  <div class="container">

    <div class="movie_box">
      <ul>
        <li :movie="movie" v-for="movie in store.movies">


          <div class="cover_box">
            <img :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`" alt="">
          </div>
          <p>Titolo: {{ movie.title }} {{ movie.name }}</p>
          <p>Titolo Originale: {{ movie.original_title }} {{ movie.original_name }}</p>
          <div class="flag">
            <span>Lingua: {{ movie.original_language }}</span>
            <img v-if="movie.original_language === 'en'" src="../assets/img/united-kingdom-flag-xs.png" alt="">
            <img v-else-if="movie.original_language === 'it'" src="../assets/img/italy-flag-xs.png" alt="">
            <img v-else-if="movie.original_language === 'ja'" src="../assets/img/japan-flag-xs.png" alt="">
            <img
              v-else="movie.original_language !== 'ja' && movie.original_language !== 'it' && movie.original_language !== 'en'"
              src="" alt="">
          </div>
          <p>Voto: {{ Math.ceil(movie.vote_average / 2) }}</p><!-- v-for per stampare in n di stelle? -->
          <!-- /single movie-->

        </li>
      </ul>
    </div>
    <!-- /.movie_box -->


  </div>

</template>

<style lang="scss" scoped>
.flag {
  img {
    width: 2rem;
    margin-left: 1rem
  }
}
</style>
