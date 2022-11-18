import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
    api_key: '2b45490e9387fca1e16c3bcb3a68dded',
    query: null,
    error: null,
    movies: null,
    movieUrl: 'https://api.themoviedb.org/3/search/movie',
    tvUrl: 'https://api.themoviedb.org/3/search/tv',

    GenerateUrlMovies() {
        const url = `${store.movieUrl}?api_key=${store.api_key}&query=${store.query}`;
        return axios.get(url);
    },
    GenerateUrlTv() {
        const url = `${store.tvUrl}?api_key=${store.api_key}&query=${store.query}`;
        return axios.get(url);
    },

    CallApi() {
        //console.log('search now');

        //console.log(this.store.query); //


        /*  axios(store.config)
             .then(function (response) {
                
                 store.movies = response.data.results;
                 /*     this.page = response.data.page; 
                 console.log(store.movies);
                 store.query = '';
             }) */


        Promise.all([store.GenerateUrlMovies(), store.GenerateUrlTv()])
            .then(results => {
                console.log(results[1].data.results);
                store.movies = results[1].data.results;
            })
            .catch(function (error) {
                console.log(error);
            });

    },

})