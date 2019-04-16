<template>
    <div id="app">
        <div class="main-heart" :class="{fullHeight: !lightsAreOn}">
            <lights></lights>
            <transition name="fade">
                <portfolio v-if="isPortfolioPage"></portfolio>
            </transition>
            <navigation></navigation>
            <name></name>
        </div>
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
            resize: function() {
            }
        },
        computed: {
            ...mapState({
                lightsAreOn: state => state.lightsAreRunning,
                currentPageName: state => state.currentPageName
            }),
            isPortfolioPage: function() {
                return this.currentPageName == 'work';
            }
        },
        mounted() {
        }
    }
</script>

<style lang="scss">
    @import "scss/app.scss";
</style>