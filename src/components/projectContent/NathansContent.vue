<template>
    <div id="nathansContent">
        <div class="project-headline"><h2>Nathans |</h2><h3> Ticket To Fun</h3></div>

        <p>Client wanted to do something big for their 100th Anniversary by adding Coney Island as the key backbone to this loyalty campaign for it’s customers/fans.</p>

        <p>To create a buzz and collect user generated content, we created a social engagement hub where consumers would register and earn tickets by exploring the virtual Coney Island experience through videos, trivia, photo booth, games and more. Guests could earn tickets with every activity they participate in and use those tickets to redeem prizes from the gift shop!</p>
        
        <h3 class="sub-headline">The Experience</h3>
        <slick
            class="slick-container"
            ref="slickSite"
            :options="slickNathansOptions">
            <a href="assets/sliders/nathans/site/nathans_welcome_01.jpg"><img src="assets/sliders/nathans/site/nathans_welcome_01.jpg" alt=""></a>
            <a href="assets/sliders/nathans/site/nathans_reg_01.jpg"><img src="assets/sliders/nathans/site/nathans_reg_01.jpg" alt=""></a>
            <a href="assets/sliders/nathans/site/nathans_login_01.jpg"><img src="assets/sliders/nathans/site/nathans_login_01.jpg" alt=""></a>
            <a href="assets/sliders/nathans/site/nathans_help_01.jpg"><img src="assets/sliders/nathans/site/nathans_help_01.jpg" alt=""></a>
            <a href="assets/sliders/nathans/site/nathans_help_02.jpg"><img src="assets/sliders/nathans/site/nathans_help_02.jpg" alt=""></a>
            <a href="assets/sliders/nathans/site/nathans_help_03.jpg"><img src="assets/sliders/nathans/site/nathans_help_03.jpg" alt=""></a>
            <a href="assets/sliders/nathans/site/nathans_help_04.jpg"><img src="assets/sliders/nathans/site/nathans_help_04.jpg" alt=""></a>
            <a href="assets/sliders/nathans/site/nathans_help_05.jpg"><img src="assets/sliders/nathans/site/nathans_help_05.jpg" alt=""></a>
            <a href="assets/sliders/nathans/site/nathans_help_06.jpg"><img src="assets/sliders/nathans/site/nathans_help_06.jpg" alt=""></a>
            <a href="assets/sliders/nathans/site/nathans_help_07.jpg"><img src="assets/sliders/nathans/site/nathans_help_07.jpg" alt=""></a>
            <a href="assets/sliders/nathans/site/nathans_home_01.jpg"><img src="assets/sliders/nathans/site/nathans_home_01.jpg" alt=""></a>
            <a href="assets/sliders/nathans/site/nathans_home_02.jpg"><img src="assets/sliders/nathans/site/nathans_home_02.jpg" alt=""></a>
            <a href="assets/sliders/nathans/site/nathans_home_03.jpg"><img src="assets/sliders/nathans/site/nathans_home_03.jpg" alt=""></a>
            <a href="assets/sliders/nathans/site/nathans_wonder_wheel_01.jpg"><img src="assets/sliders/nathans/site/nathans_wonder_wheel_01.jpg" alt=""></a>
            <a href="assets/sliders/nathans/site/nathans_gift_shop_01.jpg"><img src="assets/sliders/nathans/site/nathans_gift_shop_01.jpg" alt=""></a>
            <a href="assets/sliders/nathans/site/nathans_gift_shop_02.jpg"><img src="assets/sliders/nathans/site/nathans_gift_shop_02.jpg" alt=""></a>
            <a href="assets/sliders/nathans/site/nathans_gift_shop_03.jpg"><img src="assets/sliders/nathans/site/nathans_gift_shop_03.jpg" alt=""></a>
            <a href="assets/sliders/nathans/site/nathans_gift_shop_04.jpg"><img src="assets/sliders/nathans/site/nathans_gift_shop_04.jpg" alt=""></a>
            <a href="assets/sliders/nathans/site/nathans_gift_shop_05.jpg"><img src="assets/sliders/nathans/site/nathans_gift_shop_05.jpg" alt=""></a>
            <a href="assets/sliders/nathans/site/nathans_iw_01.jpg"><img src="assets/sliders/nathans/site/nathans_iw_01.jpg" alt=""></a>
            <a href="assets/sliders/nathans/site/nathans_iw_02.jpg"><img src="assets/sliders/nathans/site/nathans_iw_02.jpg" alt=""></a>
            <a href="assets/sliders/nathans/site/nathans_iw_03.jpg"><img src="assets/sliders/nathans/site/nathans_iw_03.jpg" alt=""></a>
            <a href="assets/sliders/nathans/site/nathans_iw_04.jpg"><img src="assets/sliders/nathans/site/nathans_iw_04.jpg" alt=""></a>
            <a href="assets/sliders/nathans/site/nathans_iw_05.jpg"><img src="assets/sliders/nathans/site/nathans_iw_05.jpg" alt=""></a>
            <a href="assets/sliders/nathans/site/nathans_zoltar_01.jpg"><img src="assets/sliders/nathans/site/nathans_zoltar_01.jpg" alt=""></a>
            <a href="assets/sliders/nathans/site/nathans_zoltar_02.jpg"><img src="assets/sliders/nathans/site/nathans_zoltar_02.jpg" alt=""></a>
            <a href="assets/sliders/nathans/site/nathans_zoltar_03.jpg"><img src="assets/sliders/nathans/site/nathans_zoltar_03.jpg" alt=""></a>
            <a href="assets/sliders/nathans/site/nathans_HDEC_01.jpg"><img src="assets/sliders/nathans/site/nathans_HDEC_01.jpg" alt=""></a>
            <a href="assets/sliders/nathans/site/nathans_HDEC_02.jpg"><img src="assets/sliders/nathans/site/nathans_HDEC_02.jpg" alt=""></a>
            <a href="assets/sliders/nathans/site/nathans_HDEC_03.jpg"><img src="assets/sliders/nathans/site/nathans_HDEC_03.jpg" alt=""></a>
            <a href="assets/sliders/nathans/site/nathans_lunch_rush_01.jpg"><img src="assets/sliders/nathans/site/nathans_lunch_rush_01.jpg" alt=""></a>
            <a href="assets/sliders/nathans/site/nathans_lunch_rush_02.jpg"><img src="assets/sliders/nathans/site/nathans_lunch_rush_02.jpg" alt=""></a>
            <a href="assets/sliders/nathans/site/nathans_lunch_rush_03.jpg"><img src="assets/sliders/nathans/site/nathans_lunch_rush_03.jpg" alt=""></a>
            <a href="assets/sliders/nathans/site/nathans_trivia_01.jpg"><img src="assets/sliders/nathans/site/nathans_trivia_01.jpg" alt=""></a>
            <a href="assets/sliders/nathans/site/nathans_trivia_02.jpg"><img src="assets/sliders/nathans/site/nathans_trivia_02.jpg" alt=""></a>
            <a href="assets/sliders/nathans/site/nathans_photo_01.jpg"><img src="assets/sliders/nathans/site/nathans_photo_01.jpg" alt=""></a>
            <a href="assets/sliders/nathans/site/nathans_photo_02.jpg"><img src="assets/sliders/nathans/site/nathans_photo_02.jpg" alt=""></a>
            <a href="assets/sliders/nathans/site/nathans_photo_03.jpg"><img src="assets/sliders/nathans/site/nathans_photo_03.jpg" alt=""></a>
            <a href="assets/sliders/nathans/site/nathans_photo_04.jpg"><img src="assets/sliders/nathans/site/nathans_photo_04.jpg" alt=""></a>
            <a href="assets/sliders/nathans/site/nathans_photo_05.jpg"><img src="assets/sliders/nathans/site/nathans_photo_05.jpg" alt=""></a>
            <a href="assets/sliders/nathans/site/nathans_photo_06.jpg"><img src="assets/sliders/nathans/site/nathans_photo_06.jpg" alt=""></a>
            <a href="assets/sliders/nathans/site/nathans_info_01.jpg"><img src="assets/sliders/nathans/site/nathans_info_01.jpg" alt=""></a>
        </slick>

        <h3 class="sub-headline">The Results</h3>
        <p>Schwans was very happy with the success of this promotion. They were pleased with our focus on the consumer engagement while helping drive sales for their pizza brands.</p>
        <p>Below are a few of the results that stuck out.</p>

        <h3 class="sub-headline">Performance and Findings</h3>
        <slick
            class="slick-container"
            ref="slickPErformance"
            :options="slickNathansOptionsResults">
            <a href="assets/sliders/nathans/performance/nathans_performance_01.png"><img src="assets/sliders/nathans/performance/nathans_performance_01.png" alt=""></a>
            <a href="assets/sliders/nathans/performance/nathans_performance_02.png"><img src="assets/sliders/nathans/performance/nathans_performance_02.png" alt=""></a>
            <a href="assets/sliders/nathans/performance/nathans_performance_03.png"><img src="assets/sliders/nathans/performance/nathans_performance_03.png" alt=""></a>
            <a href="assets/sliders/nathans/performance/nathans_performance_04.png"><img src="assets/sliders/nathans/performance/nathans_performance_04.png" alt=""></a>
        </slick>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import Slick from 'vue-slick';

    export default {
        name: 'nathansContent',
        data() {
            return {
                slickNathansOptions: {
                    slidesToShow: 1,
                    adaptiveHeight: true,
                    autoplay: true,
                    autoplaySpeed: 2000,
                },
                slickNathansOptionsResults: {
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