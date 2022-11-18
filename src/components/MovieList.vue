<script>
import { store } from '../store.js';
import SingleMovie from './SingleMovie.vue';
export default {
    name: 'MovieList',
    components: {
        SingleMovie,
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>

    <div class="movie_box ">
        <div class="row overflow-hidden">

            <SingleMovie :movie="movie" v-for="movie in store.movies" />

        </div>
    </div>
    <!-- /.movie_box -->

</template>

<style>

</style>