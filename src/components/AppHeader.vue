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

    <header class="site_header shadow-lg pt-2">
        <nav class="py-2 px-4 d-flex justify-content-between">
            <div class="left_nav">
                <img src="../assets/img/netflix-2015-logo.svg" alt="">
                <a class="active" href="">Home</a>
                <a href="">Serie TV</a>
                <a href="">Film</a>
                <a href="">Originali</a>
                <a href="">Aggiunti di recente</a>
                <a href="">La mia lista</a>
            </div>
            <!-- /.left_nav -->

            <div class="right_nav d-flex align-items-center pb-1">
                <SearchBox @searchData="store.CallApi" />
            </div>
            <!-- /.right_nav -->
        </nav>


    </header>
    <!-- /.site_header -->

</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as*;

header {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: $dark;
    z-index: 2;
}

img {
    width: 100px;
}

a {
    color: white;
    text-decoration: none;
    margin-left: 1.5rem
}

.active {
    font-weight: bold;
}
</style>