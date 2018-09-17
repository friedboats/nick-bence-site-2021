<template>
    <div id="name_container">
        <div class="name" v-bind:class="{'hidden': showName}">
            <div class='letter greeting animated rubberBand'>Hello, my name is...</div>
            <div class='letter my_name' v-bind:class="{'animated zoomInLeft': !showName}">Nick Bence</div>
        </div>
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
            animationEndHandler(e) {
                e.currentTarget.removeEventListener(e.type, this.animationEndHandler);
                
                setTimeout(() => {
                    this.$store.dispatch('switchScroll');
                }, 1000);
            }
        },
        computed: {
                ...mapState({
                showName: state => state.isNameToggled
            })
        },
        mounted() {
            let el = document.getElementsByClassName("name")[0];
            el.addEventListener('animationend', this.animationEndHandler);
        }
    }
</script>

<!-- Add "scoped" attribute to divmit CSS to this component only -->
<style scoped lang="scss">
</style>