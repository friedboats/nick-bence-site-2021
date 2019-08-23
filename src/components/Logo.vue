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
        width: cRems(88px);
        height: cRems(88px);
        margin-left: auto;
        margin-right: auto;
        margin-bottom: cRems(18px);
        cursor: pointer;
    }

    .initials {
        position: absolute;
        top: cRems(54px);
        left: cRems(52px);
        color: black;
        font-weight: bold;
        font-size: cRems(30px);
    }
</style>