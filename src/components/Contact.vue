<template>
    <div id="contact">
        <h2 class="page-title">Contact</h2>
            <a class="email_icon" href="mailto:nick.bence@gmail.com?subject=You%20are%20awesome%20and%20I%20want%20to%20meet%20you."><font-awesome-icon :icon="['fa', 'envelope']" /></a>
            <a href="//www.linkedin.com/hp/?dnr=Ya6lTB7T8pQbDnKwY5lgrW-08pHEpsBNTvOD" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin-in']" /></a>
            <a href="//www.facebook.com/nick.bence.1" target="_blank"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
            <a href="//plus.google.com/111917649007675262890/posts" target="_blank"><font-awesome-icon :icon="['fab', 'google']" /></a>
            <a href="//twitter.com/?lang=en" target="_blank"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: 'contact',
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
<style scoped lang="scss">
</style>