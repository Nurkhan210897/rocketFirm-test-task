<template>
  <div class="p_page">
    <div class="title">
      <h2>Избранное</h2>
    </div>
    <div class="favorites_images">
      <toggle-columns />
      <images :images="favorites" />
    </div>
  </div>
</template>

<script>
import Images from "../components/Images.vue";
import Loader from "../components/loader.vue";
export default {
  components: { Images, Loader },

  layout: "innerPageHeader",

  data: () => ({
    favorites: null
  }),

  mounted() {
    this.favorites = JSON.parse(localStorage.getItem("favorites"));
  }
};
</script>

<style lang="scss">
  .favorites_images{
    padding-top: 70px;
  }
</style>
