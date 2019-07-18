<template>
    <div class="name">
        <h2>Nick Bence</h2> 
        <p>Senior UX<span class="pipe">&</span>Senior Interface Dev</p>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: 'name',
        data() {
            return {
            }
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
    .name {
        h2 {
            font-size: 25px;
            margin-bottom: 10px;
        }

        p {
            font-size: 23px;
            font-weight: 500;
            color: #5ca24b;
        }
    }
        
    .pipe {
        font-weight: 900;
        margin-left: 10px;
        margin-right: 10px;
        color: white;
    }
</style>