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

    <header class="site_header">

        <SearchBox @searchData="store.CallApi" />

    </header>
    <!-- /.site_header -->

</template>

<style>

</style>