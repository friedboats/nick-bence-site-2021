<template>
    <div id="app">
        <transition name="fade">
            <name class="topPage" v-if="!isHomePage"></name>
        </transition>

        <transition name="rotate">
            <div class="main-heart" v-if="isHomePage">
                
                <lights></lights>
                
                <navigation></navigation>

                <name></name>
                
            </div>
        </transition>
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
                currentPageName: state => state.currentPageName
            }),
            isHomePage: function() {
                return this.currentPageName == 'home';
            },
            isPortfolioPage: function() {
                return this.currentPageName == 'portfolio';
            }
        },
        mounted() {
        }
    }
</script>

<style lang="scss">
    @import "scss/app.scss";
</style>