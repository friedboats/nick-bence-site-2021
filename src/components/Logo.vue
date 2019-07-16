<template>
    <div class="logo">
        <img
            data-page="home"
            src="/assets/logo.svg"
            @click="navLinkClick"/>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: 'logo',
        data() {
            return {
            }
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
        cursor: pointer;
    }
</style>