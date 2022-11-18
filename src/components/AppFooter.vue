<script>
export default {
    name: 'AppFooter',
}

</script>

<template>

    <div class="site_footer text-muted w-100 d-flex align-items-center justify-content-center">
        <div class="footer_text d-flex">
            <h6>Boolflix App</h6>
            <h6>Daniela de Leo</h6>
            <h6>Classe 72</h6>
        </div>
    </div>
    <!-- /.site_footer -->

</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as*;

.site_footer {
    position: fixed;
    bottom: 0;
    height: 50px;
    background-color: $dark ;

    h6 {
        margin: 0 1rem;
    }
}
</style>