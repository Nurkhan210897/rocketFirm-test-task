<template>
  <div class="nav">
    <nuxt-link to="/" class="logo">
      <img src="@/assets/images/logo.svg" alt="" />
      <span>ImageStock</span>
    </nuxt-link>

    <div class="nav_items">
      <nuxt-link to="/favorites-images"
        ><img src="@/assets/icons/favorite_icon.svg" alt="" />Избранное
      </nuxt-link>
      <nuxt-link to="/">
        <img src="@/assets/icons/history_search_icon.svg" alt="" />История
        поиска</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    favLength: null
  }),

};
</script>

<style lang="scss">


</style>
