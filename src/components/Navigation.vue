<template>
    <div 
        class="nav-container"> 
        <div 
            data-page="contact"
            class="nav-link nav-link-1 rotated"
            
            @mouseover="navLinkMouseOver"
            @mouseout="navLinkMouseOut"
            @click="navLinkClick">
            <!-- :class="{rotated: isHomePage, active: currentPageName == 'contact'}" -->
            <p>Contact</p>
        </div>
        <div 
            data-page="portfolio"
            class="nav-link nav-link-2 rotated"
            
            @mouseover="navLinkMouseOver"
            @mouseout="navLinkMouseOut"
            @click="navLinkClick">
            <!-- :class="{rotated: isHomePage, active: currentPageName == 'portfolio'}" -->
            <p>Work</p>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: 'Navigation',
        data() {
            return {
            }
        },
        components: {
        },
        computed: {
            ...mapState({
                currentPageName: state => state.currentPageName
            }),
            isHomePage: function() {
                return this.currentPageName == "home";
            },
            isContactPage: function() {
                return this.currentPageName == "contact";
            },
            isPortfolioPage: function() {
                return this.currentPageName == "portfolio";
            }
        },
        methods: {
            navLinkMouseOver: function() {
                this.$store.dispatch('navLinkOver');
            },
            navLinkMouseOut: function() {
                this.$store.dispatch('navLinkOut');
            },
            navLinkClick: function(e) {
                let payload = {
                                el: e.currentTarget,
                                page_id: e.currentTarget.getAttribute("data-page")
                              };

                this.$store.dispatch('navLinkClick', payload);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to divmit CSS to this component only -->
<style scoped lang="scss">
</style>