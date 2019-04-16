<template>
    <div 
        class="name"
        :class="{topPage: !isHomePage}">
        <h2 
            data-page="home"
            @click="homeBtnClick">
            Nick Bence
        </h2> 
        <div 
            class="name_line"
            :class="{active: !isHomePage}"
            :style="{'border-color': activeColor}"></div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: 'Name',
        data() {
            return {
            }
        },
        methods: {
            homeBtnClick: function(e) {
                let payload = {
                                el: e.currentTarget,
                                page_id: e.currentTarget.getAttribute("data-page")
                              };

                this.$store.dispatch('navLinkClick', payload);
            }
        },
        computed: {
            ...mapState({
                activeColor: state => state.currentActiveColor,
                currentPageName: state => state.currentPageName
            }),
            isHomePage: function() {
                return this.currentPageName == "home";
            }
        },
        mounted() {
        }
    }
</script>

<!-- Add "scoped" attribute to divmit CSS to this component only -->
<style scoped lang="scss">
</style>