<template>
    <div class="siteNav radial-bkgd">
        <logo></logo>
        <navigation></navigation>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import logo from '@/components/Logo'
    import navigation from '@/components/Navigation'

    export default {
        name: 'siteNav',
        data() {
            return {
            }
        },
        components: {
            logo,
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
    @import '../scss/app';

    .siteNav {
        position: absolute;
        top: 0;
        left: 0;
        padding: 20px;
        
        .nav-container {
            position: relative;
            display: block;
        }

        .nav-link {
            font-size: 16px;
            width: auto;
            justify-content: left;
            height: 50px;
            margin-left: 6px;
            margin-right: 0;

            &:hover {
                font-weight: bold;
            }

            &.rotated {
                transform: rotate(0deg);
            }
        }

        .nav-link-1, .nav-link-2 {
            border-top: none;
        }

        &.radial-bkgd {
            background: radial-gradient(ellipse at left, rgba(47, 18, 94, 0.55) 0%, rgba(47, 18, 93, 0.5) 1%, rgba(25, 9, 49, 0) 48%, rgba(24, 9, 47, 0) 50%, rgba(0, 0, 0, 0) 100%);
        }
    }
</style>