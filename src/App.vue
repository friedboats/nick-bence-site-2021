<template>
    <div id="app">
        <lights></lights>
        <navigation></navigation>
        <name></name>
        <!-- <portfolio></portfolio> -->
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import lights from '@/components/Lights'
    import name from '@/components/Name'
    import navigation from '@/components/Navigation'
    import portfolio from '@/components/Portfolio'

    export default {
        name: 'app',
        data() {
            return {
            }
        },
        components: {
            lights,
            name,
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