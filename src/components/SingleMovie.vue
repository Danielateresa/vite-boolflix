<script>

export default {
    name: 'SingleMovie',
    props: {
        movie: Object
    },

}



</script>

<template>

    <div class="col-2 g-1 mb-4">
        <div class="card border-0">

            <img :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`">


            <div class="movie_info px-2 pt-4 h-100 overflow-auto">
                <p><span>Titolo: </span> {{ movie.title }} {{ movie.name }}</p>
                <p><span>Titolo Originale: </span>{{ movie.original_title }} {{ movie.original_name }}</p>
                <div class="flag">
                    <span>Lingua: {{ movie.original_language }}</span>
                    <img v-if="movie.original_language === 'en'" src="../assets/img/united-kingdom-flag-xs.png" alt="">
                    <img v-else-if="movie.original_language === 'it'" src="../assets/img/italy-flag-xs.png" alt="">
                    <img v-else-if="movie.original_language === 'ja'" src="../assets/img/japan-flag-xs.png" alt="">
                    <span v-else alt="">Non disponibile</span>
                </div>
                <p><span>Voto: </span>
                    <font-awesome-icon icon="fa-solid fa-star" v-for="(i) in 5"
                        :class="Math.ceil(movie.vote_average / 2) > i ? 'on' : ''" />

                </p>
                <p>{{ movie.overview }}</p>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as*;

.flag {
    img {
        width: 2rem;
        margin-left: 1rem
    }
}

.on {
    color: #ffff00;
}

.card {

    color: white;
    font-size: 12px;

    &:hover .movie_info {
        display: block;

    }
}

.movie_info {
    position: absolute;
    display: none;
    color: white;
    background-color: black;

    span {
        font-weight: bolder;
    }
}
</style>