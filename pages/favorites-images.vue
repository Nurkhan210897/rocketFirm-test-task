<template>
  <div class="p_page">
    <toggle-columns />
    <images :images="favorites"/>
  </div>
</template>

<script>
import Images from "../components/Images.vue";
import Loader from '../components/loader.vue';
export default {
  components: { Images, Loader },

  data:()=> ({
    favorites: null,
  }),

  mounted() {
      this.favorites = JSON.parse(localStorage.getItem('favorites'))
  }
};
</script>

<style></style>
