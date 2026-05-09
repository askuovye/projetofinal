import { defineStore } from 'pinia'

export const useFeedStore = defineStore('feed', {
    state: () => ({
        posts: [],
        loading: false,
        error: null,
    }),

    actions: {
        async fetchFeed() {

        },
    }
})