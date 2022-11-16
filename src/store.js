import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({

    error: null,
    Movies: null,
    categorySearch: null,
    //chiamata ajax
    CallApi() {
        console.log('search now');

        /*  console.log(this.store.query); */

        const config = {
            method: 'get',
            url: 'get',
            /* url: `https://api.themoviedb.org/3/search/movie?api_key=${this.api_Key}&language=en-US&query=${this.query}`, */
            url: `https://api.themoviedb.org/3/search/movie`,
            params: {
                api_key: '2b45490e9387fca1e16c3bcb3a68dded',
                query: 'matrix'
            }

        };
        axios(config)
            .then(function (response) {
                console.log((response.data));
            })
            .catch(function (error) {
                console.log(error);
            });

    }
})