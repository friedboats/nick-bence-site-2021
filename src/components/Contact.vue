<template>
    <div id="contact">
        <h2>Wanna chat?</h2>
        <h3>Send me a message.<br>I'd love to hear from you.</h3>
        <div class="icons">
            <!-- <a class="icon_fa icon_resume" href="/docs/resume_2019.pdf" target="_blank"><font-awesome-icon alt="resume" :icon="['fa', 'file-alt']" /></a> -->

            <a class="icon_fa icon_linkedin" href="//www.linkedin.com/in/nicholasbence/" target="_blank"><font-awesome-icon alt="linked in" :icon="['fab', 'linkedin-in']" /></a>
            
            <!-- <a class="icon_fa icon_fb" href="//www.facebook.com/nick.bence.1" target="_blank"><font-awesome-icon alt="facebook" :icon="['fab', 'facebook-f']" /></a> -->
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
    #contact {
        text-align: center;
        margin-top: cRems(100px);
    }

    .icons {
        display: flex;
        justify-content: center;
    }

    .icon_fa {
        width: cRems(50px);
        margin: 0 cRems(10px);
        color: white;
        font-size: cRems(50px);
        transition: color 1s;
        display: block;

        @include medium {
            font-size: cRems(30px);
        }

        &:hover {
            color: #5ca24b;
        }
    }

    .icon_resume {
        color: #8d2d7a;
    }

    .icon_linkedin {
        color: #0077B5;
    }

    .icon_fb {
        color: #3C5A99;
    }
</style>