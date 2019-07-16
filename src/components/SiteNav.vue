<template>
    <div class="siteNav">
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
            height: 65px;

            &:hover {
                border-top-width: 1px;
            }

            &.rotated {
                transform: rotate(0deg);
                margin: 0;
            }
        }
    }

    .logo {
        margin-bottom: 20px;
        
    }
</style>