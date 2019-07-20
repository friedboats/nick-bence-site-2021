<template>
    <div id="home">
        <lights
            canvas-id='light-box-heart'
            canvas-width='500'
            canvas-height='500'>
        </lights>
        
        <navigation></navigation>

        <name></name>
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