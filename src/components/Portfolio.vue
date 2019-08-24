<template>
    <div id="portfolio">            
        <div class="portfolio-links">
            <h3>PROJECTS:</h3>
            <a v-for="(project, index) in portfolioProjects" 
            class="portfolio-link"
            :class="{'active': projectIndex === index}"
            :key="`link-${index}`" 
            @click="projectLinkClick($event, index)">
            {{project.client}}
            </a>
        </div>

        <transition name="fade-fast" mode="out-in">
            <component v-bind:is="projectContent.component"></component>
        </transition>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import starbucksContent from '@/components/projectContent/StarbucksContent'
    import schwansContent from '@/components/projectContent/SchwansContent'
    import nathansContent from '@/components/projectContent/NathansContent'

    export default {
        name: 'Portfolio',
        data() {
            return {
                projectIndex: 0,
                portfolioProjects: [
                    {client: "Starbucks", name: "Starbucks For Life", component: starbucksContent},
                    {client: "Schwans", name: "Tailgate At Your Place", component: schwansContent},
                    {client: "Nathans", name: "Ticket To Fun", component: nathansContent}
                ]
            }
        },
        components: {
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
            }
        },
        computed: {
            ...mapState({
                portfolioData: state => state.jsonTestData,
            }),
            projectContent: function() {
                return this.portfolioProjects[this.projectIndex];
            }
        },
        mounted() {
        }
    }
</script>

<!-- Add "scoped" attribute to divmit CSS to this component only -->
<style scoped lang="scss">
    #portfolio {
        margin-bottom: cRems(300px);
    }

    .portfolio-links {
        display: flex;
        width: 100%;
        align-items: center;
        margin-bottom: cRems(60px);
        border-bottom: 1px solid white;
        padding-bottom: cRems(10px);

         h3 {
            margin: 0 cRems(60px) 0 0;
        }
    }

    .portfolio-link {
        margin-right: cRems(60px);
        font-size: cRems(20px);
        color: #ffffff;
        cursor: pointer;
        font-weight: bold;
        opacity: 0.3;

        &.active {
            color: #5ca24b;
            opacity: 1;

            &:hover {
                color: #5ca24b;
            }
        }

        &:hover {
            color: white;
            opacity: 1;
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
</style>