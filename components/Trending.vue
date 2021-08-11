<template>
  <div class="trending">
    <ul>
      <li v-for="(link, index) in trending" :key="index">
        <a href="#">{{ link }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    trending: [
      "Wallpapers",
      "Textures & Patterns",
      "Nature",
      "Current",
      "Events",
      "Architecture",
      "Business & Work",
      "Film",
      "Animals",
      "Travel",
      "Fashion",
      "Food & Drink",
      "Spirituality",
      "Experimental",
      "People",
      "Health",
      "Arts & Culture"
    ]
  })
};
</script>

<style lang="scss">
.trending {
  overflow-x: hidden;
  margin-top: 30px;
  ul{
    display: flex;
    padding: 0;
    margin: 0;
    li{
      list-style-type: none;
      a{
        color: #fff;
        text-decoration: none;
        white-space: nowrap;
        font-size: 18px;
        margin-right: 5px;
      }
    }
  }
}
</style>
