<template>
    <div id="portfolio">
        <div v-for="(work, index) in workData" :key="index">
            <p style="color: white">{{work.project}}</p>
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
                workData: state => state.jsonTestData,
            })
        },
        mounted() {
        }
    }
</script>

<!-- Add "scoped" attribute to divmit CSS to this component only -->
<style scoped lang="scss">
</style>