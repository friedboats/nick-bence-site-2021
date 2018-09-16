<template>
    <div id="app" v-bind:class="{'backgroundAnimation': changeBackground}">
        <vue-particles class="bkgd_main" v-if="!changeBackground"
          color="#ff0099"
          :particleOpacity="0.7"
          :particlesNumber="80"
          shapeType="star"
          :particleSize="4"
          linesColor="#dedede"
          :linesWidth="1"
          :lineLinked="false"
          :lineOpacity="0.4"
          :linesDistance="50"
          :moveSpeed="3"
          :hoverEffect="true"
          hoverMode="remove"
          :clickEffect="true"
          clickMode="remove"
        >
        </vue-particles>
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
        },
        mounted() {
          console.log(this.changeBackground)
        }
    }
</script>

<style lang="scss">
    @import "scss/app.scss";
</style>