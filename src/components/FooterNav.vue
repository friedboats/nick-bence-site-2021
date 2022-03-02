<template>
  <div class="footerNav">
    <p>Nick Bence &copy;{{ year }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "footerNav",
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
  components: {},
  methods: {},
  computed: {},
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to divmit CSS to this component only -->
<style lang="scss">
.footerNav {
  width: 100%;
  text-align: center;
  background: $colorDarkPurple;
  position: fixed;
  bottom: 0;

  p {
    font-size: cRems(23px);
    margin-top: cRems(10px);
    margin-bottom: cRems(10px);

    @include medium {
      font-size: cRems(15px);
    }
  }
}
</style>
