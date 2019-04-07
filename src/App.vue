<template>
    <div id="app">
        <div 
            class="main-heart"
            :class="{fullHeight: !lightsAreOn}"
        >
            <lights></lights>
            <navigation></navigation>
            <name></name>
        </div>
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
            resize: function() {
            }
        },
        computed: {
            ...mapState({
                lightsAreOn: state => state.lightsAreRunning,
            })
        },
        mounted() {
            this.resize();
            window.addEventListener("resize", this.resize);
        }
    }
</script>

<style lang="scss">
    @import "scss/app.scss";
</style>