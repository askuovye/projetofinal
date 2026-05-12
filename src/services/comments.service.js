import http from './api';

export const commentsService = {
    create(postId, body) {
        return http.post(`/posts/${postId}/comments`, { body })
    },
    update(commentId, body) {
        return http.put(`/comments/${commentId}`, { body })
    },
    delete(commentId) {
        return http.delete(`/comments/${commentId}`)
    },
}