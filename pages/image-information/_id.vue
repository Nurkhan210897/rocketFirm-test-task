<template>
  <div class="image_info" v-if="imageData">
    <div
      class="image_info_wrapper"
      :style="{ 'background-image': `url(${imageData.urls.regular})` }"
    >
      <div class="container">
        <div class="user_info_wrapper">
          <div class="user_info_content">
            <img :src="imageData.user.profile_image.medium" alt="" />
            <div class="user_info_text">
              <p>{{ imageData.user.first_name }}</p>
              <a href="#">@{{ imageData.user.instagram_username }}</a>
            </div>
          </div>
          <div class="user_image_details">
            <span class="add_fav" @click="addToFavourites(imageData)" :class="{active: favoriteActive}">
              <img src="@/assets/icons/favorite_silver_icon.svg" alt="" />
            </span>
            <a
              download="image"
              :href="imageData.links.download"
              class="download_image"
            >
              <img src="@/assets/icons/download_iconsvg.svg" alt="" />
              Downloand
            </a>
          </div>
        </div>
        <div class="main_image">
          <img :src="imageData.urls.regular" alt="" />
        </div>
        <div class="tags">
          <div class="title_block">
            <p>Похожии теги</p>
          </div>
          <div class="tags_list">
            <ul>
              <li v-for="(tag, index) in imageData.tags_preview" :key="index">
                <span>{{ tag.title }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="similar_images">
      <div class="container">
        <div class="title_flex">
          <h3>Похожие фотографии</h3>
          <a href="#">show more</a>
        </div>
        <images :images="similarImages" />
      </div>
      {{active}}
    </div>
  </div>
</template>

<script>
import { getImage } from "@/api/apiGetImage.js";
import { apiGetImages } from "@/api/apiGetImages.js";

export default {
  head: {
    title: "Image information"
  },
  layout: "innerPageHeader",

  data: () => ({
    imageData: null,
    similarImages: null,
    favoriteActive: false,
  }),

  computed: {
    active() {
      const favoriteList = JSON.parse(localStorage.getItem('favorites'))

      if(favoriteList !== null && this.imageData){
        favoriteList.filter(i => {
        if (i.id === this.imageData.id) {
          this.favoriteActive = true;
        } else {
          this.favoriteActive = false;
        }
      });
      }
    }
  },

  methods: {
    addToFavourites(imageData) {
      this.$store.commit("addToFavorites", imageData);
    }
  },

  async mounted() {
    const id = this.$route.params.id;

    this.imageData = await getImage(id);

    this.similarImages = await apiGetImages(1);
  }
};
</script>

<style lang="scss">
.block_title {
  text-align: center;
  margin: 40px auto 0;
}
.image_info_wrapper {
  background-size: cover;
  background-position: center;
  backdrop-filter: blur(8px);
  padding: 45px 0 65px;
  position: relative;
  &::before {
    content: "";
    background: rgba(255, 255, 255, 0.2);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
  .user_info_wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 44px;
    .user_info_content {
      display: flex;
      align-items: center;
      img {
        width: 100%;
        height: 100%;
        max-width: 54px;
        max-height: 54px;
        margin-right: 10px;
        border: 1px solid #ffffff;
        border-radius: 8px;
      }
      p,
      a {
        color: #fff;
      }
      a {
        text-decoration: none;
        font-size: 18px;
      }
      p {
        margin-bottom: 0;
        font-size: 1.8em;
        line-height: normal;
      }
    }
    .user_image_details {
      display: flex;
      align-items: center;
      .add_fav {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        cursor: pointer;
        &:hover {
          img {
            transform: scale(0.9);
          }
        }
      }
      .download_image {
        padding: 13px 28px;
        margin-left: 20px;
        display: block;
        width: fit-content;
        background-color: #219653;
        border: 1px solid #219653;
        box-sizing: border-box;
        box-shadow: 0px 0px 4px rgba(131, 101, 101, 0.25);
        border-radius: 8px;
        color: #fff;
        text-decoration: none;
        &:hover {
          background-color: #327950;
          border-color: #327950;
        }
      }
    }
  }
  .main_image {
    img {
      width: 100%;
      box-shadow: 0px 4px 100px #000000;
      border-radius: 8px;
    }
  }
  .tags {
    margin-top: 40px;
    text-align: center;
    .tags_list {
      width: fit-content;
      margin: 0 auto;
    }
    ul {
      padding: 0;
      margin: 0;
      display: flex;
      align-items: center;
      li {
        list-style-type: none;
        margin: 0 10px;
        span {
          display: block;
          background-color: #ffffff;
          border-radius: 8px;
          padding: 5px 10px;
          font-size: 18px;
          line-height: 21px;
          color: #828282;
        }
      }
    }
  }
}
.similar_images {
  margin: 80px 0;
}
</style>
