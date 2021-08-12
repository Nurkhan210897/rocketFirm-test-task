<template>
  <div class="image_card">
    <img
      :src="card.urls.small"
      :alt="card.alt_description"
      class="main_image"
    />
    <div class="card_details">
      <div class="card__details_user">
        <img :src="card.user.profile_image.medium" alt="" />
        <p>{{ card.user.name }}</p>
        <a href="#">@{{ card.user.username }}</a>
      </div>
      <div class="card__details_images">
        <span
          class="fav"
          @click="addToFavourites(card)"
          :class="{ active: favoriteActive }"
          ><svg
            width="30"
            height="26"
            viewBox="0 0 30 26"
            fill="none"
            class="like"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.9121 24.7685C15.8354 25.746 14.1779 25.7461 13.1013 24.7544L12.9454 24.6127C5.50795 17.8836 0.648781 13.4777 0.832947 7.98105C0.917947 5.57272 2.15045 3.26355 4.14795 1.90355C7.88795 -0.646451 12.5063 0.543549 14.9996 3.46188C17.4929 0.543549 22.1113 -0.660618 25.8513 1.90355C27.8488 3.26355 29.0813 5.57272 29.1663 7.98105C29.3646 13.4777 24.4913 17.8835 17.0538 24.641L16.9121 24.7685Z"
              fill=""
            />
          </svg>
        </span>
        <nuxt-link :to="`/image-information/${card.id}`">
          <img src="@/assets/icons/maximize_icon.svg" alt=""
        /></nuxt-link>
        <a :href="card.links.download" download>
          <img src="@/assets/icons/download_icon.svg" alt=""
        /></a>
      </div>
    {{ active }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      require: true,
      default: {}
    }
  },

  data: () => ({
    favoriteActive: false,
    favoriteList: null
  }),

  computed: {
    active() {
      if (this.favoriteList) {
        return this.favoriteList.filter(i => {
          if (i.id === this.card.id) {
            this.favoriteActive = true;
          }
        });
      }
    }
  },

  methods: {
    addToFavourites(card) {
      this.$store.commit("addToFavorites", card);
      this.favoriteActive = !this.favoriteActive;
    }
  },

  async mounted() {
    this.favoriteList = JSON.parse(localStorage.getItem("favorites"));
  }
};
</script>

<style lang="scss">
.image_card {
  margin-bottom: 1.6rem;
  position: relative;
  .main_image {
    border-radius: 8px;
    width: 100%;
  }
  .card_details {
    opacity: 0;
    transition: all 0.5s ease;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    background: rgba(40, 36, 22, 0.5);
    backdrop-filter: blur(20px);
    border-radius: 8px;
    position: absolute;
    top: 0;
    left: 0;
    .card__details_user {
      text-align: center;
      color: #fff;
      img {
        margin-bottom: 15px;
        border: 1px solid #fff;
        border-radius: 8px;
      }
      p {
        font-size: 1.8em;
        margin-bottom: 0;
      }
      a {
        color: #fff;
        font-size: 1.1em;
        text-decoration: none;
      }
    }
    .card__details_images {
      display: flex;
      align-items: center;
      justify-content: center;
      .fav {
        width: fit-content;
        display: block;
        cursor: pointer;
      }
      img,svg {
        max-width: 35px;
        margin: 0 22.5px;
      }
    }
  }
  &:hover {
    .card_details {
      opacity: 1;
    }
  }
}
</style>
