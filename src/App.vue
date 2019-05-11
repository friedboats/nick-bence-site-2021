<template>
    <div id="app">
        <!-- <div class="main-heart" :class="{fullHeight: !isHomePage}"> -->
        <transition name="fade">
            <name class="topPage" v-if="!isHomePage"></name>
        </transition>

        <div class="main-heart">
            <transition name="fade">
                <lights v-if="isHomePage"></lights>
            </transition>
            
            <transition name="fade">
                <navigation v-if="isHomePage"></navigation>
            </transition>

            <transition name="fade">
                <name v-if="isHomePage"></name>
            </transition>
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