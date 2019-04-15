<template>
    <div 
        class="name"
        :class="{topPage: !lightsAreOn}">
        <h2 
            @click="nameClicked">
            Nick Bence
        </h2> 
        <div 
            class="name_line"
            :class="{active: !lightsAreOn}"></div>
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
            nameClicked: function() {
                this.$store.dispatch('nameClick');
            }
        },
        computed: {
            ...mapState({
                lightsAreOn: state => state.lightsAreRunning
            })
        },
        mounted() {
        }
    }
</script>

<!-- Add "scoped" attribute to divmit CSS to this component only -->
<style scoped lang="scss">
</style>