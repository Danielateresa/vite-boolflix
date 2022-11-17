<script>
import { store } from '../store.js';
export default {
    name: 'SearchBox',
    emits: ['searchData'],
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <div class="search_box">
        <input type="search" placeholder="Cosa vuoi guardare?" v-model="store.query" @keyup.enter="$emit('searchData')">
        <button type="submit" class="btn btn-light ms-2" @click="$emit('searchData')">Cerca</button>
    </div>

</template>


<style>

</style>