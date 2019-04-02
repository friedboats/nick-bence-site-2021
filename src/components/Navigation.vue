<template>
    <div class="nav-container"> 
        <div 
            class="nav-link nav-link-1"
            @mouseover="mouseOver"
            @mouseout="mouseOut"
            @click="click">
            <p>Contact</p>
        </div>
        <div class="light-box-container">
            <lights></lights>
            <h2 class="name">Nick Bence</h2>
        </div>
        <div 
            class="nav-link nav-link-2"
            @mouseover="mouseOver"
            @mouseout="mouseOut"
            @click="click">
            <p>Work</p>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import lights from '@/components/Lights'

    export default {
        name: 'Navigation',
        data() {
            return {
            }
        },
        components: {
            lights
        },
        computed: {
        },
        methods: {
            mouseOver: function() {
                this.$store.dispatch('navLinkOver');
            },
            mouseOut: function() {
                this.$store.dispatch('navLinkOut');
            },
            click: function() {
                this.$store.dispatch('navLinkClick');
            }
        }
    }
</script>

<!-- Add "scoped" attribute to divmit CSS to this component only -->
<style scoped lang="scss">
</style>