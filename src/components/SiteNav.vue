<template>
    <div class="siteNav radial-bkgd">
        <lights class="do"
            :light="lightProps">
        </lights>

        <lights class="mo"
            :light="lightPropsMobile">
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
                },
                lightPropsMobile: {
                    id: 'light-box-heart-3',
                    defaultCanvasLength: 2000,
                    boundingBoxPadding: 20,
                    width: '2000',
                    height: '80',
                    instances: 2,
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
        padding: cRems(40px);
        text-align: center;
        
        .name {
            top: cRems(49px);
            width: 100%;
            position: relative;
            top: auto;
            margin-top: cRems(8px);

            @include medium {
                width: auto;
                margin-left: cRems(5px);
            }

            h2 {
                font-size: cRems(35px);

                @include medium {
                    font-size: cRems(30px);
                }
            }
        }

        .light-box-canvas {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translate(-50%, 0);
        }

        .nav-container {
            position: relative;
            display: flex;
            margin-top: cRems(25px);

            @include medium {
                margin-top: cRems(10px);
            }
        }

        .nav-link {
            font-size: cRems(30px);
            width: auto;
            justify-content: left;
            height: cRems(50px);
            margin-left: 0;
            margin-right: 0;

            @include medium {
                font-size: cRems(21px);
                height: cRems(40px);
            }

            &:hover {
                font-weight: bold;
            }

            &.rotated {
                transform: rotate(0deg);
            }
        }

        &.radial-bkgd {
            background: radial-gradient(ellipse at left, rgba(47, 18, 94, 0.55) 0%, rgba(47, 18, 93, 0.5) 1%, rgba(25, 9, 49, 0) 48%, rgba(24, 9, 47, 0) 50%, rgba(0, 0, 0, 0) 100%);
        }
    }
</style>