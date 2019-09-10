<template>
    <div id="schwansContent">
        <div class="project-headline"><h2>Schwans |</h2><h3> Tailgate At Your Place</h3></div>

        <p>This was a repeat experience for us with our Schwans client on their second annual “Tailgate at Your Place” engagement. We built this site with consumer engagement as the key focus to help drive sales for Schwan’s pizza brands during the football season. Consumers could come onto the site and participate in a variety of activities for sweeps entries and instant win game plays.</p>
        <p>The amount of components we built for this launch was, well a ton... and organizing the flow and navigation for so many things was a challenge, but we were happy with how it turned out for the users.</p>
        
        <h3 class="sub-headline">All The Things</h3>
        <p>Here is the site and all the components that went into the experience, which included an Advergame, Instant Win Game, Quiz, Poll, Recipe Uploader, Tip Uploader, Recipe and Tip Gallery and Social Share.</p>

        <slick
            class="slick-container"
            ref="slickSite"
            :options="slickOptionsSite">
            <a href="assets/sliders/schwans/site/schwans_splash_01.jpg"><img src="assets/sliders/schwans/site/schwans_splash_01.jpg" alt=""></a>
            <a href="assets/sliders/schwans/site/schwans_spalsh_02.jpg"><img src="assets/sliders/schwans/site/schwans_spalsh_02.jpg" alt=""></a>
            <a href="assets/sliders/schwans/site/schwans_reg_01.jpg"><img src="assets/sliders/schwans/site/schwans_reg_01.jpg" alt=""></a>
            <a href="assets/sliders/schwans/site/schwans_pizza_pick_01.jpg"><img src="assets/sliders/schwans/site/schwans_pizza_pick_01.jpg" alt=""></a>
            <a href="assets/sliders/schwans/site/schwans_pizza_pick_02.jpg"><img src="assets/sliders/schwans/site/schwans_pizza_pick_02.jpg" alt=""></a>
            <a href="assets/sliders/schwans/site/schwans_menu_01.jpg"><img src="assets/sliders/schwans/site/schwans_menu_01.jpg" alt=""></a>
            <a href="assets/sliders/schwans/site/schwans_menu_02.jpg"><img src="assets/sliders/schwans/site/schwans_menu_02.jpg" alt=""></a>
            <a href="assets/sliders/schwans/site/schwans_menu_03.jpg"><img src="assets/sliders/schwans/site/schwans_menu_03.jpg" alt=""></a>
            <a href="assets/sliders/schwans/site/schwans_adver_01.jpg"><img src="assets/sliders/schwans/site/schwans_adver_01.jpg" alt=""></a>
            <a href="assets/sliders/schwans/site/schwans_adver_02.jpg"><img src="assets/sliders/schwans/site/schwans_adver_02.jpg" alt=""></a>
            <a href="assets/sliders/schwans/site/schwans_adver_03.jpg"><img src="assets/sliders/schwans/site/schwans_adver_03.jpg" alt=""></a>
            <a href="assets/sliders/schwans/site/schwans_iw_01.jpg"><img src="assets/sliders/schwans/site/schwans_iw_01.jpg" alt=""></a>
            <a href="assets/sliders/schwans/site/schwans_iw_02.jpg"><img src="assets/sliders/schwans/site/schwans_iw_02.jpg" alt=""></a>
            <a href="assets/sliders/schwans/site/schwans_iw_03.jpg"><img src="assets/sliders/schwans/site/schwans_iw_03.jpg" alt=""></a>
            <a href="assets/sliders/schwans/site/schwans_iw_04.jpg"><img src="assets/sliders/schwans/site/schwans_iw_04.jpg" alt=""></a>
            <a href="assets/sliders/schwans/site/schwans_iw_05.jpg"><img src="assets/sliders/schwans/site/schwans_iw_05.jpg" alt=""></a>
            <a href="assets/sliders/schwans/site/schwans_quiz_01.jpg"><img src="assets/sliders/schwans/site/schwans_quiz_01.jpg" alt=""></a>
            <a href="assets/sliders/schwans/site/schwans_quiz_02.jpg"><img src="assets/sliders/schwans/site/schwans_quiz_02.jpg" alt=""></a>
            <a href="assets/sliders/schwans/site/schwans_quiz_03.jpg"><img src="assets/sliders/schwans/site/schwans_quiz_03.jpg" alt=""></a>
            <a href="assets/sliders/schwans/site/schwans_quiz_04.jpg"><img src="assets/sliders/schwans/site/schwans_quiz_04.jpg" alt=""></a>
            <a href="assets/sliders/schwans/site/schwans_poll_01.jpg"><img src="assets/sliders/schwans/site/schwans_poll_01.jpg" alt=""></a>
            <a href="assets/sliders/schwans/site/schwans_poll_02.jpg"><img src="assets/sliders/schwans/site/schwans_poll_02.jpg" alt=""></a>
            <a href="assets/sliders/schwans/site/schwans_recipe_upload_01.jpg"><img src="assets/sliders/schwans/site/schwans_recipe_upload_01.jpg" alt=""></a>
            <a href="assets/sliders/schwans/site/schwans_recipe_upload_02.jpg"><img src="assets/sliders/schwans/site/schwans_recipe_upload_02.jpg" alt=""></a>
            <a href="assets/sliders/schwans/site/schwans_recipe_upload_03.jpg"><img src="assets/sliders/schwans/site/schwans_recipe_upload_03.jpg" alt=""></a>
            <a href="assets/sliders/schwans/site/schwans_recipe_upload_04.jpg"><img src="assets/sliders/schwans/site/schwans_recipe_upload_04.jpg" alt=""></a>
            <a href="assets/sliders/schwans/site/schwans_recipe_upload_05.jpg"><img src="assets/sliders/schwans/site/schwans_recipe_upload_05.jpg" alt=""></a>
            <a href="assets/sliders/schwans/site/schwans_gallery_01.jpg"><img src="assets/sliders/schwans/site/schwans_gallery_01.jpg" alt=""></a>
            <a href="assets/sliders/schwans/site/schwans_gallery_02.jpg"><img src="assets/sliders/schwans/site/schwans_gallery_02.jpg" alt=""></a>
            <a href="assets/sliders/schwans/site/schwans_prizes_01.jpg"><img src="assets/sliders/schwans/site/schwans_prizes_01.jpg" alt=""></a>
        </slick>

        <h3 class="sub-headline">The Components Before</h3>
        <p>Here is the UX presentation that we sent to the client to kick things off. This shows our thought process and plan of attack on this large scaled project, after gathering all of our research and talking strategy.</p>

        <p class="figure-description">User Experince Plan</p>
        <a href="assets/schwans/user_experience_plan.pdf" target="_blank"><img class="callout-frame" src="assets/schwans/user_experience_plan.png"/></a>

        <h3 class="sub-headline">The Results</h3>
        <p>Schwans was very happy with the success of this promotion. They were pleased with our focus on the consumer engagement while helping drive sales for their pizza brands.</p>
        <p>Below are a few of the results that stuck out.</p>

        <slick
            class="slick-container"
            ref="slickResults"
            :options="slickOptionsResults">
            <a href="assets/sliders/schwans/results/schwans_results_01.jpg"><img src="assets/sliders/schwans/results/schwans_results_01.jpg" alt=""></a>
            <a href="assets/sliders/schwans/results/schwans_results_02.jpg"><img src="assets/sliders/schwans/results/schwans_results_02.jpg" alt=""></a>
            <a href="assets/sliders/schwans/results/schwans_results_03.jpg"><img src="assets/sliders/schwans/results/schwans_results_03.jpg" alt=""></a>
            <a href="assets/sliders/schwans/results/schwans_results_04.jpg"><img src="assets/sliders/schwans/results/schwans_results_04.jpg" alt=""></a>
        </slick>

    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import Slick from 'vue-slick';

    export default {
        name: 'schwansContent',
        data() {
            return {
                slickOptionsSite: {
                    slidesToShow: 1,
                    adaptiveHeight: true,
                },
                slickOptionsResults: {
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