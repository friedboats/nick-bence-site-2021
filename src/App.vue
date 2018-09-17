<template>
    <div id="app" v-bind:class="{'backgroundAnimation': changeBackground}">
        <vue-particles class="bkgd_main" v-if="!changeBackground"
          color="#999999"
          :particleOpacity="0.3"
          :particlesNumber="80"
          shapeType="circle"
          :particleSize="4"
          linesColor="#ff0099"
          :linesWidth="1"
          :lineLinked="false"
          :lineOpacity="0.2"
          :linesDistance="200"
          :moveSpeed="100"
          :hoverEffect="true"
          hoverMode="repulse"
          :clickEffect="true"
          clickMode="push"
        >
        </vue-particles>
        <!-- <button @click="testAnimation">Test</button> -->
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