<template>
    <div id="app">
        <blings></blings>
        <portfolio></portfolio>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import blings from '@/components/Blings'
    import portfolio from '@/components/Portfolio'

    export default {
        name: 'app',
        data() {
            return {
            }
        },
        components: {
            blings,
            portfolio
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