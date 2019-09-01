<template>
    <div id="home">
        <div class="home_content">
            <lights
                :light="lightProps">
            </lights>
            
            <navigation></navigation>

            <name></name>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import lights from '@/components/Lights'
    import name from '@/components/Name'
    import navigation from '@/components/Navigation'

    export default {
        name: 'home',
        data() {
            return {
                lightProps: {
                    id: 'light-box-heart',
                    defaultCanvasWidth: 708, // width at 45deg for home page
                    boundingBoxPadding: 55,
                    width: '500',
                    height: '500',
                    instances: 5,
                    maxLightRadius: 15,
                    maxBlingGrowRadius: 18,
                    blingRadius: 16,
                    blingStrokeWidth: 3,
                    shouldResize: true
                }
            }
        },
        components: {
            lights,
            name,
            navigation,
        },
        methods: {
        },
        computed: {
        },
        mounted() {
        }
    }
</script>

<!-- Add "scoped" attribute to divmit CSS to this component only -->
<style scoped lang="scss">
    #home {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;

        .name {
            cursor: default;
        }

        .light-box-canvas {
            transform: rotate(45deg);
        }
    }

    .home_content {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: cRems(500px);
        height: cRems(500px);

        &.fullHeight {
            width: 100%;
            height: 80%;
        }
    }
</style>