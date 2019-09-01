<template>
    <div class="name"
         data-page="home"
         @click="navLinkClick">
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
            navLinkClick: function(e) {
                let payload = {
                    el: e.currentTarget,
                    page_id: e.currentTarget.getAttribute("data-page")
                };

                this.$store.dispatch('navLinkClick', payload);
            }
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
        transform: translate(0, -50%);

        &.topPage {
            top: 0;
            transition-delay: 1s;
        }
        
        h2 {
            color: white;
            font-family: 'Merriweather Sans', sans-serif;
            font-size: cRems(30px);
            font-weight: bold;
            letter-spacing: cRems(10px);   
            margin: 0 0 cRems(10px);
            transition: font-size 1s, color 1s, letter-spacing 1s;
        }

        p {
            font-size: cRems(23px);
            font-weight: 500;
            color: pink;
        }

        .pipe {
            font-weight: 900;
            margin-left: cRems(10px);
            margin-right: cRems(10px);
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