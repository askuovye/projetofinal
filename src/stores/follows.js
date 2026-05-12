import { defineStore } from 'pinia'
import { followService } from '../services/follow.service'

export const useFollowStore = defineStore('follow', {
    state: () => ({
        followers: [],
        following: [],
        isFollowing: false,
    }),
    getters: {
        isFollowingUser: (state) => (userId) => {
            return state.isFollowing
        }
    },
    actions: {
        async follow(userId) {
            try {
                await followService.follow(userId)
                this.isFollowing = true
            } catch (error) {
                console.error('Faileed to follow user:', error)
            }
        },
        async unfollow(userId) {
            try {
                await followService.unfollow(userId)
                this.isFollowing = false
            } catch (error) {
                console.error('Failed to unfollow user:', error)
            }
        },
        async fetchFollowers(userId, page = 1) {
            try {
                const response = await followService.followers(userId, page)
                this.followers = response.data.data || []
            } catch (error) {
                console.error('Failed to fetch followers:', error)
            }
        },
        async fetchFollowing(userId, page = 1) {
            try {
                const response = await followService.following(userId, page)
                this.following = response.data.data || []
            } catch (error) {
                console.error('Failed to fetch following:', error)
            }
        },
        async checkIsFollowing(userId) {
            try {
                const response = await followService.isFollowing(userId)
                this.isFollowing = response.data.is_following
            } catch (error) {
                console.error('Failed to check following status:', error)
            }
        },
        
    }
    
})