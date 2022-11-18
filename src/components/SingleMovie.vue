<script>
export default {
    name: 'SingleMovie',
    props: {
        movie: Object
    },
    data() {
        return {
            lang: {
                en: '../assets/img/united-kingdom-flag-xs.png',
                it: '../assets/img/italy-flag-xs.png',
                ja: '../assets/img/japan-flag-xs.png',
            },
            imageUrl: 'https://image.tmdb.org/t/p/',
        }
    },
    methods: {
        getFlag(lang) {
            if (lang === 'en') {
                return this.lang.en
            } else if (lang === 'it') {
                return this.lang.it
            } else if (lang === 'ja') {
                return this.lang.ja
            } else {
                return 'ciao'
            }
        }
    }
}


</script>

<template>

    <div class="col-2 g-1 mb-4">
        <div class="card border-0">

            <img :src="`${imageUrl}w342${movie.poster_path}`">



            <div class="movie_info px-2 pt-4 h-100 overflow-auto">
                <p><span>Titolo: </span> {{ movie.title }} {{ movie.name }}</p>
                <p><span>Titolo Originale: </span>{{ movie.original_title }} {{ movie.original_name }}</p>
                <div class="flag">
                    <span>Lingua: {{ movie.original_language }}</span>
                    <img :src="getFlag(movie.original_language)" alt="">
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