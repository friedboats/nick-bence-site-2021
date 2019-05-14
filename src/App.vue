<template>
    <div id="app">        
        <!-- <transition name="fade">
            <lights
                canvas-id='light-box-bkgd'
                v-if="!isHomePage"
                canvas-width='1500'
                canvas-height='1500'>
            </lights>
        </transition> -->
        
        <transition name="fade">
            <name class="topPage" v-if="!isHomePage"></name>
        </transition>


        <transition name="fade-out">
            <div class="main-heart" v-if="isHomePage">
                
                <lights
                    canvas-id='light-box-heart'
                    canvas-width='500'
                    canvas-height='500'>
                </lights>
                
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