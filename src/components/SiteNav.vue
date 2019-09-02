<template>
    <div class="siteNav radial-bkgd">
        <lights
            :light="lightProps">
        </lights>

        <name></name>

        <navigation></navigation>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import logo from '@/components/Logo'
    import name from '@/components/Name'
    import lights from '@/components/Lights'
    import navigation from '@/components/Navigation'

    export default {
        name: 'siteNav',
        data() {
            return {
                lightProps: {
                    id: 'light-box-heart-2',
                    defaultCanvasLength: 2000,
                    boundingBoxPadding: 20,
                    width: '2000',
                    height: '100',
                    instances: 5,
                    maxLightRadius: 9,
                    maxBlingGrowRadius: 12,
                    blingRadius: 10,
                    blingStrokeWidth: 2,
                    shouldResize: true
                }
            }
        },
        components: {
            logo,
            name,
            lights,
            navigation
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
<style lang="scss">
    .siteNav {
        // position: absolute;
        // top: 0;
        // left: 0;
        // padding: 20px;
        padding: 40px;
        text-align: center;
        
        .name {
            top: 49px;
            width: 100%;
            position: relative;
            top: auto;
            margin-top: 8px;

            @include medium {
                width: auto;
                margin-left: 5px;
            }

            h2 {
                //font-size: 20px;
                //letter-spacing: 6px;

                @include medium {
                    //font-size: 34px;
                }
            }
        }

        .light-box-canvas {
            position: absolute;
            margin-top: -40px;
            margin-bottom: -40px;
            left: 50%;
            transform: translate(-50%);
            //width: 100%;

            @include medium {
            }
        }

        .nav-container {
            position: relative;
            display: flex;
            margin-top: cRems(20px);
        }

        .nav-link {
            font-size: cRems(21px);
            width: auto;
            justify-content: left;
            height: cRems(40px);
            margin-left: 0;
            margin-right: 0;

            &:hover {
                font-weight: bold;
            }

            &.rotated {
                transform: rotate(0deg);
            }
        }

        .nav-link-1, .nav-link-2 {
            // border-top: none;
        }

        &.radial-bkgd {
            background: radial-gradient(ellipse at left, rgba(47, 18, 94, 0.55) 0%, rgba(47, 18, 93, 0.5) 1%, rgba(25, 9, 49, 0) 48%, rgba(24, 9, 47, 0) 50%, rgba(0, 0, 0, 0) 100%);
        }
    }
</style>