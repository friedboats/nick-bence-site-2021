<template>
    <div 
        class="nav-container"> 
        <div 
            data-page="contact"
            class="nav-link nav-link-1 rotated"
            @mouseover="navLinkMouseOver"
            @mouseout="navLinkMouseOut"
            @click="navLinkClick">
            <span>Contact</span>
        </div>
        <div 
            data-page="portfolio"
            class="nav-link nav-link-2 rotated"
            @mouseover="navLinkMouseOver"
            @mouseout="navLinkMouseOut"
            @click="navLinkClick">
            <span>Work</span>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: 'navigation',
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
<style lang="scss">
    @import '../scss/app';

    .nav-container {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        bottom: 0;
    }

    .nav-link {
        color: $colorWhite;
        font-family: 'Merriweather Sans', sans-serif;
        font-size: cRems(21px);
        margin: 0;
        width: cRems(130px);
        height: cRems(60px);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 1;
        cursor: pointer;
        letter-spacing: 3px;
        transition: border-top .5s, color 1s, opacity 0.5s cubic-bezier(0.1, 0.1, 0.1, 0.1);
        z-index: 1;

        &:hover {
            opacity: 1;
            color: $colorBtnHover;
            border-top-width: 4px;
        }
    }

    .nav-link-1 {
        border-top: 1px #8d2d7a ridge;
        margin-right: 0px;

        &.rotated {
            transform: rotate(45deg);
            margin-right: cRems(120px);
        }
    }
    
    .nav-link-2 {
        border-top: 1px #5ca24b ridge;
        margin-left: 0px;

        &.rotated {
            transform: rotate(-45deg);
            margin-left: cRems(120px);
        }
    }
</style>