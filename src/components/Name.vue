<template>
    <div class="name">
        <h2>Nick Bence</h2> 
        <!-- <p>Senior UX<span class="pipe">&</span>Senior Interface Dev</p> -->
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
        position: absolute;
        cursor: pointer;
        top: 50%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        &.topPage {
            top: 0;
            transition-delay: 1s;
        }
        
        h2 {
            color: white;
            font-family: 'Merriweather Sans', sans-serif;
            font-size: cRems(25px);
            font-weight: bold;
            letter-spacing: cRems(10px);   
            margin: 0 0 cRems(10px);
            transition: font-size 1s, color 1s, letter-spacing 1s;
        }

        p {
            font-size: 23px;
            font-weight: 500;
            color: pink;
        }

        .pipe {
            font-weight: 900;
            margin-left: 10px;
            margin-right: 10px;
            color: white;
        }

        .name_line {
            border-bottom: solid white 1px;
            width: 0;
            opacity: 0;
            transition: width 1s, opacity 1s, border-color 1s;
            
            &.active {
                width: 100%;
                opacity: 1;
                transition: width 1.5s;
                transition-delay: 0.5s;
            }
        }
    }
</style>