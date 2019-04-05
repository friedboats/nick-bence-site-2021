<template>
    <div 
        class="nav-container"
        :class="{bottomPage: !lightsAreOn}"> 
        <div 
            id="contact"
            class="nav-link nav-link-1"
            :class="{rotated: lightsAreOn, active: currentPageName == 'contact'}"
            @mouseover="mouseOver"
            @mouseout="mouseOut"
            @click="click">
            <p>Contact</p>
        </div>
        <div 
            id="work"
            class="nav-link nav-link-2"
            :class="{rotated: lightsAreOn, active: currentPageName == 'work'}"
            @mouseover="mouseOver"
            @mouseout="mouseOut"
            @click="click">
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
                currentPageName: state => state.currentPageName,
                lightsAreOn: state => state.lightsAreRunning
            })
        },
        methods: {
            mouseOver: function() {
                this.$store.dispatch('navLinkOver');
            },
            mouseOut: function() {
                this.$store.dispatch('navLinkOut');
            },
            click: function(e) {
                let payload = {id: e.currentTarget.getAttribute("id")};
                this.$store.dispatch('navLinkClick', payload);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to divmit CSS to this component only -->
<style scoped lang="scss">
</style>