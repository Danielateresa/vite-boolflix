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
    <div class="search_box d-flex align-items-center">
        <input class="rounded border-0 p-1" type="search" placeholder="Cosa vuoi guardare?" v-model="store.query"
            @keyup.enter="$emit('searchData')">
        <button type="submit" class="btn btn-light ms-2 rounded border-0 px-2 py-1"
            @click="$emit('searchData')">Cerca</button>
    </div>

</template>


<style lang="scss" scoped>

</style>