import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
    api_key: '2b45490e9387fca1e16c3bcb3a68dded',
    query: null,
    error: null,
    movies: null,
    page: null,
    //chiamata ajax
    CallApi() {
        //console.log('search now');

        //console.log(this.store.query); //

        const config = {
            method: 'get',
            url: `https://api.themoviedb.org/3/search//multi?api_key=${store.api_key}&language=en-US&query=${store.query}&page=1&include_adult=falsehttps://api.themoviedb.org/3/search/tv?api_key=${store.api_key}&page=1&query=${store.query}&include_adult=false`,
            /*     url: `https://api.themoviedb.org/3/search/movie`, */
            /* params: {
                api_key: '2b45490e9387fca1e16c3bcb3a68dded',
                query: null,

            } */

        };
        axios(config)
            .then(function (response) {
                console.log((response.data));
                store.movies = response.data.results;
                /*     this.page = response.data.page; */
                console.log(store.movies);
                store.query = '';
            })
            .catch(function (error) {
                console.log(error);
            });

    }
})