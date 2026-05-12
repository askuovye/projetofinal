import http from './api';

export const likeService = {
    like(postId) {
        return http.post(`/posts/${postId}/like`)
    },
    unlike(postId) {
        return http.delete(`/posts/${postId}/like`)
    },
    getLikes(postId, page = 1) {
        return http.get(`/posts/${postId}/likes`, { params: { page } })
    },
}