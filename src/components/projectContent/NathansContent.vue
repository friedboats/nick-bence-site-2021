<template>
    <div id="nathansContent">
        <div class="project-headline"><h2>Nathans |</h2><h3> Ticket To Fun</h3></div>

        <p>“Starbucks For Life” was an interesting campaign for me. What stood out the most was the thought process, the build approach and attention to detail. This, in my opinion, is what brought the site to life, making it more than an application for the user, but an experience.</p>
        
        <h3 class="sub-headline">First... The Site</h3>
        <slick
            class="slick-container"
            ref="slick"
            :options="slickOptions">
            <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
            <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
            <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
            <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
            <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
        </slick>
        
        <h3 class="sub-headline">Thought Process</h3>
        <p>One of my main roles on this campaign was to collaborate with the client and their 3rd party creative agency to discuss their ideas, concepts and challenges and help provide solutions to those areas.</p>
        <p>One of the challenges that I’d like to highlight was how to communicate to a user when they earned a single game piece, up to when they collected all 3 game pieces, winning a prize, all while making their experience something special and memorable. Here is what we came up with...</p>
        <p class="figure-description">Single animation</p>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import Slick from 'vue-slick';

    export default {
        name: 'nathansContent',
        data() {
            return {
                slickOptions: {
                    slidesToShow: 1,
                }
            }
        },
        components: {
            Slick
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