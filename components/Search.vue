<template>
  <div class="search">
    <form action="">
      <input
        type="text"
        placeholder="Поиск"
        v-model="searchValue"
        @input="searchImages"
      />
    </form>
    <trending />
  </div>
</template>

<script>
import Tranding from "./Trending.vue";
export default {
  components: { Tranding },

  data: () => ({
    searchValue: ""
  }),

  methods:{
    searchImages(){
      this.$store.dispatch('searchImages', this.searchValue)
    }
  }
};
</script>

<style lang="scss">
.search {
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    right: -10px;
    top: 0;
    width: 50px;
    height: 100%;
    background: transparent;
    background: linear-gradient(90deg, transparent 30%, rgba(0, 0, 0, 1) 100%);
  }

  form {
    width: 100%;
    position: relative;
    input {
      width: 100%;
      background-color: transparent;
      border: none;
      color: #fff;
      text-align: center;
      font-size: 4.5em;
      outline: none;
      &::placeholder {
        color: #fff;
      }
    }
    &::before {
      content: "";
      width: 50px;
      height: 100%;
      position: absolute;
      left: 0;
      top: 5px;
      background: rgb(0, 0, 0);
      z-index: 9;
      background: linear-gradient(90deg, rgba(0, 0, 0, 1) 5%, transparent 56%);
    }
    &::after {
      content: "";
      width: 100%;
      height: 1px;
      display: block;
      position: absolute;
      background-image: url("@/assets/images/input_line.svg");
    }
  }
}
</style>
