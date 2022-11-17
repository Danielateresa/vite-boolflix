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

  <main class="site_main">
    <div class="container">

      <div class="movie_box">
        <ul>
          <li :movie="movie" v-for="movie in store.movies">

            <div class="single_movie">
              <div class="cover_box">
                <div class="row">
                  <div class="col-2 card">
                    <img :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`" alt="">

                    <p>Titolo: {{ movie.title }} {{ movie.name }}</p>
                    <p>Titolo Originale: {{ movie.original_title }} {{ movie.original_name }}</p>
                    <div class="flag">
                      <span>Lingua: {{ movie.original_language }}</span>
                      <img v-if="movie.original_language === 'en'" src="../assets/img/united-kingdom-flag-xs.png"
                        alt="">
                      <img v-else-if="movie.original_language === 'it'" src="../assets/img/italy-flag-xs.png" alt="">
                      <img v-else-if="movie.original_language === 'ja'" src="../assets/img/japan-flag-xs.png" alt="">
                      <img
                        v-else="movie.original_language !== 'ja' && movie.original_language !== 'it' && movie.original_language !== 'en'"
                        src="" alt="">
                    </div>
                    <p>Voto:
                      <font-awesome-icon icon="fa-solid fa-star" v-for="(i) in 5"
                        :class="Math.ceil(movie.vote_average / 2) > i ? 'on' : ''" />

                    </p>
                  </div>
                </div>
              </div>
            </div>
            <!-- /.single_movie-->

          </li>
        </ul>
      </div>
      <!-- /.movie_box -->

    </div>
  </main>
  <!-- /.site_main -->

</template>

<style lang="scss" scoped>
.flag {
  img {
    width: 2rem;
    margin-left: 1rem
  }
}

.on {
  color: yellow;
}
</style>
