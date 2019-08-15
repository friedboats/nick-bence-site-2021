<template>
    <div id="portfolio">
        <div class="portfolio-links">
            <a v-for="(project, index) in portfolioData" 
            class="portfolio-link"
            :class="{'active': projectIndex === index}"
            :key="`link-${index}`" 
            @click="projectLinkClick($event, index)">
            {{project.client}}
            </a>
        </div>
        <div v-for="(project, index) in portfolioData" 
             :key="index" 
             class="project-display" 
             v-show="index == projectIndex">
            <div>
                <div class="project-headline"><h2>{{project.client}} |</h2><h3> {{project.name}}</h3></div>
                <p>“Starbucks For Life” was an interesting campaign for me. What stood out the most was the thought process, the build approach and attention to detail. This, in my opinion, is what brought the site to life, making it more than an application for the user, but an experience.</p>
                <h3 class="sub-headline">Thought Process</h3>
                <p>One of my main roles on this campaign was to collaborate with the client and their 3rd party creative agency to discuss their ideas, concepts and challenges and help provide solutions to those areas.</p>
                <p>One of the challenges that I’d like to highlight was how to communicate to a user when they earned a single game piece, up to when they collected all 3 game pieces, winning a prize, all while making their experience something special and memorable. Here is what we came up with...</p>
                <p class="figure-description">Single animation</p>
                <video class="video-wide callout-frame" controls>
                    <source src="assets/yeti_reveal_sequence.mp4" type="video/mp4">
                </video>
                <p class="figure-description">Prize winning animation</p>
                <video class="video-tall margin-btm" controls>
                    <source src="assets/gilded_icon.mp4" type="video/mp4">
                </video>
                <p>Our solution was able to provide the user with the information they needed to understand their experience, organize the content and bring the artwork alive.</p>
                <p>This leads me into the next area I’d like to focus on...</p>
                <h3 class="sub-headline">Build process</h3>
                <p>In order to make this experience feel effortless for the user, we decided to develop this campaign in Vue.js as a single page application. This allowed us to provide the user with less load time and smoother transitions, all while keeping their attention and interest in their experience.</p>
                <p>Here is a diagram of the user flow, showing how much redirection and load time we were able to save the user and allow them to just enjoy the experience.</p>
                <p class="figure-description">User flow diagram</p>
                <a href="assets/user_flow.pdf" target="_blank"><img class="callout-frame" src="assets/user_flow.png"/></a>
                <h3 class="sub-headline">Attention to detail</h3>
                <p>To make this campaign sing, we spent more time on details than anything else (my favorite part). With such a heavy art driven site, we needed to figure out a balance between the art and the code.</p>
                <p>One example of this, were the animations. How could we handle so many animation files and load them within a small amount of time?</p>
                <p class="margin-btm">The solution was to build out a sprite animator tool that would handle the png sequences delivered from creative and create small, bite-sized animations. On top of that, we used tricks to load the animations without the user even knowing. An example of this was loading the animations while the user was watching their game piece awarding experience.</p>
                <p class="figure-description">Animations</p>
                <img class="animation-gif" src="assets/animations/CANDYCANE.gif"/>
                <img class="animation-gif" src="assets/animations/COZYKITTEN.gif"/>
                <img class="animation-gif" src="assets/animations/GINGERBREADMAN.gif"/>
                <img class="animation-gif" src="assets/animations/MISTLETOE.gif"/>
                <img class="animation-gif" src="assets/animations/MOUSE.gif"/>
                <img class="animation-gif" src="assets/animations/NARWHAL.gif"/>
                <img class="animation-gif" src="assets/animations/NUTCRACKER.gif"/>
                <img class="animation-gif" src="assets/animations/ORNAMENT.gif"/>
                <img class="animation-gif" src="assets/animations/POODLE.gif"/>
                <img class="animation-gif" src="assets/animations/REINDEER.gif"/>
                <img class="animation-gif" src="assets/animations/SLEIGHBELL.gif"/>
                <img class="animation-gif" src="assets/animations/YETI.gif"/>
                <h3 class="sub-headline">Site reel</h3>
                <slick
                    ref="slick"
                    :options="slickOptions">
                    <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
                    <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
                    <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
                    <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
                    <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
                </slick>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import Slick from 'vue-slick';
    import "slick-carousel/slick/slick.css";
    import "slick-carousel/slick/slick-theme.css";

    export default {
        name: 'Portfolio',
        data() {
            return {
                projectIndex: 0,
                slickOptions: {
                    slidesToShow: 1,
                    // Any other options that can be got from plugin documentation
                },
            }
        },
        components: {
            Slick
        },
        methods: {
            projectLinkClick: function(e, i) {
                this.projectIndex = i;
            },
            next() {
                this.$refs.slick.next();
            },

            prev() {
                this.$refs.slick.prev();
            },

            reInit() {
                // Helpful if you have to deal with v-for to update dynamic lists
                this.$nextTick(() => {
                    this.$refs.slick.reSlick();
                });
            },
        },
        computed: {
            ...mapState({
                portfolioData: state => state.jsonTestData,
            })
        },
        mounted() {
        }
    }
</script>

<!-- Add "scoped" attribute to divmit CSS to this component only -->
<style scoped lang="scss">
    #portfolio {
        position: absolute;
        width: 90%;
        height: 85%;
        text-align: left;
        max-width: cRems(1200px);
    }

    .project-display {
        margin-bottom: cRems(300px);
    }

    .project-headline {
        display: flex;
        align-items: center;
        margin-bottom: cRems(30px);

        h2, h3 {
            margin-bottom: 0;
        }

        h3 {
            margin-top: cRems(5px);
            margin-left: cRems(10px);
        }
    }

    .portfolio-links {
        display: flex;
        width: 100%;
        align-items: center;
        margin-bottom: cRems(60px);
        border-bottom: 1px solid white;
        padding-bottom: cRems(10px);
    }

    .portfolio-link {
        margin-right: cRems(60px);
        font-size: cRems(20px);
        color: #ffffff;
        cursor: pointer;

        &.active {
            color: #5ca24b;
            font-weight: bold;
        }

        &:hover {
            color: #5ca24b;
        }
    }

    .sub-headline {
        margin-bottom: cRems(10px);
        margin-top: cRems(50px);
        font-weight: bold;
        font-style: italic;
    }

    .figure-description {
        font-weight: bold;
        font-size: cRems(15px);
        margin-top: cRems(55px);
    }

    .animation-gif {
        max-width: cRems(200px);
        margin-top: cRems(12px);
        margin-right: cRems(24px);
        margin-bottom: cRems(12px);
        margin-left: 0;
    }
</style>