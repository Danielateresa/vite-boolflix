<script>
import { store } from '../store.js';
import SearchBox from './SearchBox.vue';
export default {
    name: 'AppHeader',
    components: {
        SearchBox,
    },
    data() {
        return {
            store
        }
    },

}
</script>

<template>
    <SearchBox @searchData="this.store.CallApi" />this

</template>

<style>

</style>