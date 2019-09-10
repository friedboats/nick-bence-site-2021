<template>
    <div id="starbucksContent">
        <div class="project-headline"><h2>Starbucks |</h2><h3> Starbucks For Life</h3></div>
        
        <p>“Starbucks For Life” was an exciting campaign for me. What stood out the most during this program's development was the thought process, the build approach and attention to detail. This, in my opinion, is what brought the site to life, making it more than an application for the user, but an experience.</p>
        <p>First, I'd like to show you the final site before diving into the 3 sections I mentioned above.</p>
        
        <h3 class="sub-headline">The Site</h3>
        <slick
            class="slick-container margin-btm"
            ref="slick"
            :options="slickStarbucksOptions">
            <a href="assets/sliders/starbucks/site/01_sb_holiday_intro.jpg"><img src="assets/sliders/starbucks/site/01_sb_holiday_intro.jpg" alt=""></a>
            <a href="assets/sliders/starbucks/site/02_sb_holiday_auth.jpg"><img src="assets/sliders/starbucks/site/02_sb_holiday_auth.jpg" alt=""></a>
            <a href="assets/sliders/starbucks/site/03_sb_holiday_dash.jpg"><img src="assets/sliders/starbucks/site/03_sb_holiday_dash.jpg" alt=""></a>
            <a href="assets/sliders/starbucks/site/04_sb_holiday_dash_full.jpg"><img src="assets/sliders/starbucks/site/04_sb_holiday_dash_full.jpg" alt=""></a>
            <a href="assets/sliders/starbucks/site/05_sb_holiday_collect.jpg"><img src="assets/sliders/starbucks/site/05_sb_holiday_collect.jpg" alt=""></a>
            <a href="assets/sliders/starbucks/site/06_sb_holiday_collect_sbfl.jpg"><img src="assets/sliders/starbucks/site/06_sb_holiday_collect_sbfl.jpg" alt=""></a>
            <a href="assets/sliders/starbucks/site/07_sb_holiday_iw.jpg"><img src="assets/sliders/starbucks/site/07_sb_holiday_iw.jpg" alt=""></a>
            <a href="assets/sliders/starbucks/site/08_sb_holiday_share.jpg"><img src="assets/sliders/starbucks/site/08_sb_holiday_share.jpg" alt=""></a>
            <a href="assets/sliders/starbucks/site/09_sb_holiday_share_piece.jpg"><img src="assets/sliders/starbucks/site/09_sb_holiday_share_piece.jpg" alt=""></a>
            <a href="assets/sliders/starbucks/site/10_sb_holiday_suprise_and_delight.jpg"><img src="assets/sliders/starbucks/site/10_sb_holiday_suprise_and_delight.jpg" alt=""></a>
            <a href="assets/sliders/starbucks/site/11_sb_holiday_map_and_feed.jpg"><img src="assets/sliders/starbucks/site/11_sb_holiday_map_and_feed.jpg" alt=""></a>
            <a href="assets/sliders/starbucks/site/11_sb_holiday_map_and_stats.jpg"><img src="assets/sliders/starbucks/site/11_sb_holiday_map_and_stats.jpg" alt=""></a>
            <a href="assets/sliders/starbucks/site/12_sb_holiday_map_and_stats_CA.jpg"><img src="assets/sliders/starbucks/site/12_sb_holiday_map_and_stats_CA.jpg" alt=""></a>
            <a href="assets/sliders/starbucks/site/13_sb_holiday_prizes.jpg"><img src="assets/sliders/starbucks/site/13_sb_holiday_prizes.jpg" alt=""></a>
            <a href="assets/sliders/starbucks/site/14_sb_holiday_partner_edition.jpg"><img src="assets/sliders/starbucks/site/14_sb_holiday_partner_edition.jpg" alt=""></a>
            <a href="assets/sliders/starbucks/site/15_sb_holiday_taf.jpg"><img src="assets/sliders/starbucks/site/15_sb_holiday_taf.jpg" alt=""></a>
            <a href="assets/sliders/starbucks/site/16_sbfl_devices.jpg"><img src="assets/sliders/starbucks/site/16_sbfl_devices.jpg" alt=""></a>
        </slick> 

        <p>Now, onto the 3 things that stuck out to me...</p>

        <div class="section-thought-process flex-it">
            <div class="col-left">
                <h3 class="sub-headline">Thought Process</h3>
                <p>One of my main roles on this campaign was to collaborate with the client and their 3rd party creative agency to discuss their ideas, UX concepts and challenges and then help provide solutions to those areas.</p>
                <p>One of the challenges that we had, that I’d like to highlight, was how we communicated to a user when they earned a single game piece all the way up to when they collected all 3 game pieces, winning one of the main prizes, all while making their experience something special and memorable. Here is what we came up with for the final product of this thought process.</p>
                <svg class="white-arrow" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 148 143" style="enable-background:new 0 0 148 143;" xml:space="preserve">
                    <path fill="#FFFFFF" d="M0,0c-0.5-0.5,14,3,14,3s-1.5,102.5,102,79L79,53l10-11l59,46l-55,55l-10-10l39-37C122,96,1.5,131.5,0,0z"/>
                </svg>
            </div>

            <div class="col-right"> 
                <p class="figure-description">Grand Prize Winning Animation</p>
                <video class="video-tall margin-btm" controls>
                    <source src="assets/starbucks/gilded_icon.mp4" type="video/mp4">
                </video>
            </div>
        </div>

        <p>Our solution was to be able to provide the user with the information they needed to understand their experience, organize the content and bring the artwork alive.</p>
        <p>This leads me into the next area I’d like to focus on...</p>
        <h3 class="sub-headline">Build Approach</h3>
        <p>In order to make this experience feel effortless for the user, we decided to develop this campaign in Vue.js as a single page application. This allowed us to provide the user with less load time and smoother transitions, all while keeping their attention and interest in their experience.</p>
        <p>Here is a diagram of the user flow, showing how much redirection and load time we were able to save the user and allow them to just enjoy the experience.</p>
        <p class="figure-description">User flow diagram</p>
        <a href="assets/starbucks/user_flow.pdf" target="_blank"><img class="callout-frame" src="assets/starbucks/user_flow.png"/></a>
        <h3 class="sub-headline">Attention To Detail</h3>
        <p>To make this campaign sing, we spent more time on details than anything else (my favorite part). With such a heavy art driven site, we needed to figure out a balance between the art and the code.</p>
        <p>One example of this, were the animations. How could we handle so many animation files and load them within a small amount of time?</p>
        <p class="margin-btm">The solution was to build out a sprite animator tool that would handle the png sequences delivered from creative and create small, bite-sized animations. On top of that, we used tricks to load the animations without the user even knowing. An example of this was loading the animations while the user was watching their game piece awarding experience.</p>
        <p class="figure-description">Game Piece Animations</p>
       
        <div class="animation-gif-container flex-it">
            <img class="animation-gif" src="assets/starbucks/animations/CANDYCANE.gif"/>
            <img class="animation-gif" src="assets/starbucks/animations/COZYKITTEN.gif"/>
            <img class="animation-gif" src="assets/starbucks/animations/GINGERBREADMAN.gif"/>
            <img class="animation-gif" src="assets/starbucks/animations/MISTLETOE.gif"/>
            <img class="animation-gif" src="assets/starbucks/animations/MOUSE.gif"/>
            <img class="animation-gif" src="assets/starbucks/animations/NARWHAL.gif"/>
            <img class="animation-gif" src="assets/starbucks/animations/NUTCRACKER.gif"/>
            <img class="animation-gif" src="assets/starbucks/animations/ORNAMENT.gif"/>
            <img class="animation-gif" src="assets/starbucks/animations/POODLE.gif"/>
            <img class="animation-gif" src="assets/starbucks/animations/REINDEER.gif"/>
            <img class="animation-gif" src="assets/starbucks/animations/SLEIGHBELL.gif"/>
            <img class="animation-gif" src="assets/starbucks/animations/YETI.gif"/>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import Slick from 'vue-slick';

    export default {
        name: 'starbucksContent',
        data() {
            return {
                slickStarbucksOptions: {
                    slidesToShow: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
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
    .slick-container {
        width: 100%;
    }
    .animation-gif-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        grid-gap: 0;
        grid-template-columns: none;
        
        @include medium {
            justify-content: space-between;
            display: grid;
            grid-gap: 9%;
            grid-template-columns: repeat(auto-fit, 18.2%);
            margin-bottom: cRems(190px);
        }
    }
    .animation-gif {
        width: 100%;
        max-width: 48%;
        margin-bottom: cRems(25px);

        @include medium {
            max-width: cRems(230px);
            margin-bottom: 0;
        }
    }
    .flex-it { 
        &.section-thought-process {
            display: block;

            @include breakpointUp(980px) {
                display: flex;
                justify-content: space-between;
            }
        }       
        .col-left {
            @include breakpointUp(980px) {
                width: 60%;
                margin-right: 5%;
            }
        }
        .col-right {
            width: 100%;

            @include medium {
                width: 45%;
            }
        }
    }
    .white-arrow {
        display: none;

        @include breakpointUp(980px) {
            display: block;
            width: 15vw;
            max-width: cRems(300px);
            margin-top: cRems(50px);
            margin-left: 25%;
        }
    }
</style>