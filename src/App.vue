<template>
    <div id="app">
        <navigation></navigation>
        <portfolio></portfolio>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import navigation from '@/components/Navigation'
    import portfolio from '@/components/Portfolio'

    export default {
        name: 'app',
        data() {
            return {
            }
        },
        components: {
            navigation,
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