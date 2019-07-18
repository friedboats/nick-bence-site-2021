<template>
    <div id="portfolio">
        <h2 class="page-title">Portfolio</h2>
        <div v-for="(project, index) in portfolioData" :key="index">
            <p>[ {{project.name}} ]</p>
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
    }
</style>