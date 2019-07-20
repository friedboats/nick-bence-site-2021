<template>
    <div id="portfolio">
        <div v-for="(project, index) in portfolioData" :key="index">
            <h2>{{project.client}} / {{project.name}}</h2>
            <p>{{project.goal}}</p>
            <p v-for="(thing, indexs) in project.solution" :key="'solution_'+indexs"></p>
            <p>{{project.results}}</p>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: 'Portfolio',
        data() {
            return {
            }
        },
        methods: {
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
</style>