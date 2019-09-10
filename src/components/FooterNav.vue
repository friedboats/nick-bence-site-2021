<template>
    <div class="footerNav">
        <p>Nick Bence &copy;2019</p>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: 'footerNav',
        data() {
            return {
            }
        },
        components: {
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
    .footerNav {
        width: 100%;
        text-align: center;
        background: $colorDarkPurple;
        position: fixed;
        bottom: 0;
        //border-top: 1px $colorWhite solid;

        p {
            font-size: cRems(15px);
            margin-top: cRems(10px);
            margin-bottom: cRems(10px);
        }
    }
</style>