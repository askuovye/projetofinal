import http from './api';

export const followsService = {
    follow(userId) {
        return http.post(`/users/${userId}/follow`)
    },
    unfollow(userId) {
        return http.delete(`/users/${userId}/follow`)
    },
    followers(userId, page = 1) {
        return http.get(`/users/${userId}/followers`, { params: { page } })
    },
    isFollowing(userId) {
        return http.get(`/users/${userId}/is-following`)
    },
    following(userId, page = 1) {
        return http.get(`/users/${userId}/following`, { params: { page } })
    },
}