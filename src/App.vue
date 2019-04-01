<template>
    <div id="app">
        <blings></blings>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import blings from '@/components/Blings'

    export default {
        name: 'app',
        data() {
            return {
            }
        },
        components: {
            blings
        },
        methods: {
        },
        computed: {
        },
        mounted() {
        }
    }
</script>

<style lang="scss">
    @import "scss/app.scss";
</style>