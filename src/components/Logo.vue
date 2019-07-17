<template>
    <div 
        class="logo"
        data-page="home"
        @click="navLinkClick">
        <img
            src="/assets/logo.svg"/>
        <!-- <lights
            canvas-id='light-box-heart-nav'
            canvas-width='100'
            canvas-height='100'>
        </lights> -->
        <!-- <h2 class="initials">nb</h2> -->
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import lights from '@/components/Logo';

    export default {
        name: 'logo',
        data() {
            return {
            }
        },
        components: {
            lights
        },
        methods: {
            navLinkClick: function(e) {
                let payload = {
                    el: e.currentTarget,
                    page_id: e.currentTarget.getAttribute("data-page")
                };

                this.$store.dispatch('navLinkClick', payload);
            }
        },
        computed: {
        },
        mounted() {
        }
    }
</script>

<!-- Add "scoped" attribute to divmit CSS to this component only -->
<style scoped lang="scss">
    .logo {
        width: 88px;
        height: 88px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 18px;
        cursor: pointer;
    }

    .initials {
        position: absolute;
        top: 54px;
        left: 52px;
        color: black;
        font-weight: bold;
        font-size: 30px;
    }
</style>