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
        <div v-for="(project, index) in portfolioData" :key="index">
            <div v-show="index == projectIndex">
                <div class="project-headline"><h2>{{project.client}} |</h2><h3> {{project.name}}</h3></div>
                <p>{{project.goal}}</p>
                <p v-for="(thing, indexs) in project.solution" :key="'solution_'+indexs"></p>
                <p>{{project.results}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: 'Portfolio',
        data() {
            return {
                projectIndex: 0,
            }
        },
        methods: {
            projectLinkClick: function(e, i) {
                this.projectIndex = i;
            }
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
        width: 70%;
        height: 85%;
    }

    .project-headline {
        display: flex;
        justify-content: center;
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
        justify-content: center;
        align-items: center;
        margin-bottom: cRems(60px);
    }

    .portfolio-link {
        margin-left: cRems(20px);
        margin-right: cRems(20px);
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
</style>