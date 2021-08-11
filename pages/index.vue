<template>
  <div class="container block_wrapper" v-scroll="handleScroll">
    <toggle-columns />
    <images :images="allImages" />
    <loader v-if="loader" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import ToggleColumns from "../components/ToggleColumns.vue";

export default {
  components: { ToggleColumns },
  head: {
    title: "Home page"
  },

  data: () => ({
    page: 1
  }),

  computed: {
    allImages() {
      const allImages = this.$store.getters.allImages;
      const searchImages = this.$store.getters.searchImages;

      if (searchImages.length) {
        return searchImages;
      }
      return allImages;
    },

    loader() {
      return this.$store.state.loader;
    }
  },

  methods: {
    ...mapActions(["getImages", "getNewImages"]),

    getScrollStatus() {
      let scrolledLength = Math.round(document.documentElement.scrollTop);
      let windowHeight = Math.round(document.documentElement.clientHeight);
      let totalScrollingLength = document.body.scrollHeight;
      return scrolledLength + windowHeight >= totalScrollingLength;
    },

    handleScroll: function() {
      if (this.getScrollStatus()) {
        this.page++;
        this.getNewImages(this.page);
      }
    }
  },

  mounted() {
    this.getImages(this.page);
  },

};
</script>

<style lang="scss">
.block_wrapper {
  padding: 80px 0;
}
</style>
