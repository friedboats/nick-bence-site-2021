<template>
  <div>
    <button @click="testAnimation">Test</button>
    <div class="name" v-bind:class="{'hidden animated flipInY': scrolled, 'animated jello': !scrolled}">
      <div class='letter initghost spaced'>Hello, </div>
      <div class='letter ghost'>N</div>
      <div class='letter ghost'>i</div>
      <div class='letter ghost'>c</div>
      <div class='letter ghost'>k</div>
      <div class='letter ghost spaced'>B</div>
      <div class='letter ghost'>e</div>
      <div class='letter ghost'>n</div>
      <div class='letter ghost'>c</div>
      <div class='letter ghost'>e</div>
      <div class='letter initghost'>my name is...</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Name',
  data () {
    return {
      scrolled:true
    }
  },
  methods: {
    handleScroll () {
      var scroll = $(window).scrollTop();

      if (scroll >= 200) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
    },
    testAnimation () {
      //
     // $(".name").addClass('animated flipInX');
     this.scrolled = !this.scrolled;
    },
    transitionEndHandler (event) {
      console.log('animation end');
      //$(".letter").off('transitionend', this.transitionEndHandler);
      //$(".name").addClass('move');
      
    }
  },
  computed: {
    
  },
  mounted: function () {
      //window.addEventListener('scroll', this.handleScroll);
      $(".letter").on('transitionend', this.transitionEndHandler);
  },
  destroyed: function () {
      //window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<!-- Add "scoped" attribute to divmit CSS to this component only -->
<style scoped lang="scss">
  @import "../scss/partials/_name.scss";
</style>