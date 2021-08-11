<template>
  <div class="small_header">
    <div class="container">
      <div class="nav">
        <nuxt-link to="/" class="logo">
          <img src="@/assets/images/logo.svg" alt="" />
          <span>ImageStock</span>
        </nuxt-link>

        <div class="nav_items">
          <nuxt-link to="/" class="hover_link"
            ><img src="@/assets/icons/search_icon.svg" alt="" />
            Поиск
          </nuxt-link>
          <nuxt-link to="/"
            ><img src="@/assets/icons/favorite_icon.svg" alt="" />Избранное
          </nuxt-link>
          <nuxt-link to="/">
            <img src="@/assets/icons/history_search_icon.svg" alt="" />История
            поиска</nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.small_header {
  background-color: #000;
  padding: 25px 0;
}
</style>
