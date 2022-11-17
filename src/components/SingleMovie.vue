<script>
export default {
    name: 'SingleMovie',
    props: {
        movie: Object
    }
}


</script>

<template>

    <div class="col-2 gx-1">
        <div class="card border-0">
            <img :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`">
            <!--  @mousehover="store.showInfo = true" -->

            <div class="movie_info px-2 pt-4 h-100">
                <p>Titolo: {{ movie.title }} {{ movie.name }}</p>
                <p>Titolo Originale: {{ movie.original_title }} {{ movie.original_name }}</p>
                <div class="flag">
                    <span>Lingua: {{ movie.original_language }}</span>
                    <img v-if="movie.original_language === 'en'" src="../assets/img/united-kingdom-flag-xs.png" alt="">
                    <img v-else-if="movie.original_language === 'it'" src="../assets/img/italy-flag-xs.png" alt="">
                    <img v-else-if="movie.original_language === 'ja'" src="../assets/img/japan-flag-xs.png" alt="">
                    <img v-else="movie.original_language !== 'ja' && movie.original_language !== 'it' && movie.original_language !== 'en'"
                        src="" alt="">
                </div>
                <p>Voto:
                    <font-awesome-icon icon="fa-solid fa-star" v-for="(i) in 5"
                        :class="Math.ceil(movie.vote_average / 2) > i ? 'on' : ''" />

                </p>
                <p>{{ movie.overview }}</p>
            </div>
        </div>
    </div>

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

.card {
    background-color: black;
    color: white;
    font-size: 12px;
}

.movie_info {
    position: absolute;
    background-color: black;
    border: 1px solid gray
}
</style>