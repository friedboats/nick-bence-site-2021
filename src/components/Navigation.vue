<template>
    <div 
        class="nav-container"> 
        <div class="nav-link-content">
            <!-- <font-awesome-icon class="nav-icon icon-bell" v-if="!isHomePage" icon="bell" /> -->
            <div 
                data-page="contact"
                class="nav-link nav-link-1 rotated"
                :class="{'nav-active': isContactPage}"
                @mouseover="navLinkMouseOver"
                @mouseout="navLinkMouseOut"
                @click="navLinkClick">
                <span>Contact</span>
            </div>
        </div>
        <div class="nav-link-content">
            <!-- <font-awesome-icon class="nav-icon icon-wrench" v-if="!isHomePage" icon="wrench" /> -->
            <div 
                data-page="portfolio"
                class="nav-link nav-link-2 rotated"
                :class="{'nav-active': isPortfolioPage}"
                @mouseover="navLinkMouseOver"
                @mouseout="navLinkMouseOut"
                @click="navLinkClick">
                <span>Work</span>
            </div>
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
    .nav-container {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        bottom: cRems(25px);
        left: 50%;
        transform: translate(-50%);

        @include breakpointUp($large) {
            bottom: 0;
        }
    }

    .nav-link-content {
        display: flex;
        align-items: center;
        margin-left: cRems(20px);
        margin-right: cRems(20px);
    }

    .nav-icon {
        margin-right: cRems(5px);
    }

    .icon-bell {
        color: #8d2d7a;
    }

    .icon-wrench {
        color: #5ca24b;
    }

    .nav-link {
        color: $colorWhite;
        font-family: 'Merriweather Sans', sans-serif;
        font-size: cRems(28px);
        margin: 0;
        width: cRems(130px);
        height: cRems(60px);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.3;
        cursor: pointer;
        letter-spacing: cRems(3px);
        transition: border-top .5s, color 1s, opacity 0.5s cubic-bezier(0.1, 0.1, 0.1, 0.1);
        z-index: 1;
        font-weight: bold;

        @include breakpointUp($large) {
            font-size: cRems(21px);
        }

        &:hover {
            opacity: 1;
            color: $colorBtnHover;
        }

        &.nav-active {
            opacity: 1;
        }
    }

    .nav-link-1 {
        border-top: 1px #8d2d7a ridge;
        margin-right: cRems(50px);

        &.rotated {
            transform: rotate(45deg);
            margin-right: cRems(90px);

            @include breakpointUp($large) {
                margin-right: cRems(120px);
            }
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