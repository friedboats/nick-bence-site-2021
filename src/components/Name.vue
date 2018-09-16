<template>
    <div id="name_container">
        <div class="name" v-bind:class="{'hidden animated flipInY': showName, 'animated jello': !showName}">
            <div class='letter greeting' v-bind:class="{'changeClass': addColorClass}">Hello, my name is...</div>
            <div class='letter my_name'>Nick Bence</div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: 'Name',
        data() {
            return {
                addColorClass: false
            }
        },
        computed: {
                ...mapState({
                showName: state => state.isNameToggled
            })
        }
    }
</script>

<!-- Add "scoped" attribute to divmit CSS to this component only -->
<style scoped lang="scss">
</style>