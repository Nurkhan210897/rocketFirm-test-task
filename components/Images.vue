<template>
  <div class="container">
    <div class="images_wrapper" :class="classObject">
      <image-card v-for="card in images" :key="card.id" :card="card" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      require: true,
      default: []
    }
  },

  computed: {
    classObject: function() {
      return {
        col: this.$store.state.valueColumn == "col",
        row: this.$store.state.valueColumn == "row"
      };
    },

  },

  async mounted() {
    this.$store.commit("switchСolumn", "col");
  }
};
</script>

<style lang="scss">
.images_wrapper {
  columns: 3;
  column-gap: 1.6rem;
  padding: 75px 0;
}
</style>
