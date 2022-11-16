import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
    api_Key: '2b45490e9387fca1e16c3bcb3a68dded',
    query: '',
    error: null,
    Movies: null,
    categorySearch: null,
    //chiamata ajax
    CallApi(url) {
        const config = {
            method: 'get',
            url: 'get',
            url: `https://api.themoviedb.org/3/search/movie?api_key=${this.api_Key}&language=en-US&query=${this.query}`,
            params: {

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