<template>
    <div id="app" v-bind:class="{'backgroundAnimation': changeBackground}">
        <button @click="testAnimation">Test</button>
        <name></name>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import Name from '@/components/Name'

    export default {
        name: 'app',
        data() {
            return {
            }
        },
        components: {
            Name
        },
        methods: {
            testAnimation() {
                this.$store.dispatch('switchScroll');
            }
        },
        computed: {
            ...mapState({
                changeBackground: state => state.isNameToggled
            })
        }
    }
</script>

<style lang="scss">
    @import "scss/app.scss";
</style>