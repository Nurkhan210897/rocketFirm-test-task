import { apiGetImages } from '@/api/apiGetImages.js'
import { apiSearchImages } from '@/api/apiSearchImages.js'

export const state = () => ({
    allImages: [],
    searchImages: [],
    favoriteImages: 1,
    loader: true,
    valueColumn: 'col',
    searchValue: ''
})

export const mutations = {
    setImages(state, allImages) {
        state.allImages = allImages;
        state.loader = false
    },

    setNewImages(state, newImages) {
        if (newImages) {
            for (let i = 0; i < newImages.length; i++) {
                let newImage = newImages[i];
                state.allImages.push(newImage)
            }
        }
    },

    setSearchImages(state, images) {
        state.searchImages = images.results
    },

    addToFavorites(state, card) {
        let favoritesStorage = JSON.parse(localStorage.getItem('favorites'));

        if (!favoritesStorage) {
            localStorage.setItem('favorites', JSON.stringify([card]))
            return
        } else if (favoritesStorage.find(item => item.id == card.id)) {
            favoritesStorage = favoritesStorage.filter((item) => item.id !== card.id)
            localStorage.setItem('favorites', JSON.stringify(favoritesStorage))
        } else {
            favoritesStorage.push(card);
            localStorage.setItem('favorites', JSON.stringify(favoritesStorage))
            state.favoriteImages = favoritesStorage.length;

            return
        }
    },

    switchСolumn(state, value) {
        state.valueColumn = value
    },
}

export const actions = {
    async getImages({ commit }, page) {
        const response = await apiGetImages(page);
        commit('setImages', response)
    },

    async getNewImages({ commit }, page) {
        const response = await apiGetImages(page);
        commit('setNewImages', response);
    },

    async searchImages({ commit }, value) {
        const response = await apiSearchImages(value);
        commit('setSearchImages', response)
    }
}

export const getters = {
    allImages: (state) => {
        return state.allImages
    },
    searchImages: (state) => {
        return state.searchImages
    },
}