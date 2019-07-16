<template>
    <div id="app">   
        <!-- HOME page -->
        <transition name="fade-out">
            <home v-if="isHomePage"></home>
        </transition>

        <!-- CONTACT page -->
        <transition name="fade">
            <contact v-if="isContactPage"></contact>
        </transition>

        <!-- PORTFOLIO page -->
        <transition name="fade">
            <portfolio v-if="isPortfolioPage"></portfolio>
        </transition>
        
        <!-- SITE NAV side / top -->
        <transition name="fade">
            <siteNav v-if="!isHomePage"></siteNav>
        </transition>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import home from '@/components/Home'
    import siteNav from '@/components/SiteNav'
    import contact from '@/components/Contact'
    import portfolio from '@/components/Portfolio'

    export default {
        name: 'app',
        data() {
            return {
            }
        },
        components: {
            home,
            siteNav,
            name,
            contact,
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
            },
            isContactPage: function() {
                return this.currentPageName == 'contact';
            }
        },
        mounted() {
        }
    }
</script>

<style lang="scss">
    @import "scss/app.scss";
</style>