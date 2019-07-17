<template>
    <div id="contact">
        <div class="icons">
            <a class="icon_fa icon_email" href="mailto:nick.bence@gmail.com?subject=You%20are%20awesome%20and%20I%20want%20to%20meet%20you."><font-awesome-icon :icon="['fa', 'envelope']" /></a>
            <a class="icon_fa icon_linkedin" href="//www.linkedin.com/hp/?dnr=Ya6lTB7T8pQbDnKwY5lgrW-08pHEpsBNTvOD" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin-in']" /></a>
            <a class="icon_fa icon_fb" href="//www.facebook.com/nick.bence.1" target="_blank"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
            <a class="icon_fa icon_google" href="//plus.google.com/111917649007675262890/posts" target="_blank"><font-awesome-icon :icon="['fab', 'google']" /></a>
            <a class="icon_fa icon_twitter" href="//twitter.com/?lang=en" target="_blank"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
        </div>
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
    .icons {
        display: flex;
    }

    .icon_fa {
        width: 50px;
        margin: 0 10px;
        color: white;
        font-size: 30px;
        transition: color 1s;
        display: block;

        &:hover {
            color: white;
        }
    }

    .icon_email {
        color: white;
    }

    .icon_linkedin {
        color: #4875B4;
    }

    .icon_fb {
        color: #3B5998;
    }

    .icon_google {
        color: #DB4437;
    }

    .icon_twitter {
        color: #1DA1F2;
    }
</style>