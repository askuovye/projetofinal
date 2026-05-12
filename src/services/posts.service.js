import http from './api';

export const postsService = {
    create(image, caption = '') {
        const formData = new FormData()
        formData.append('image', image)
        if (caption) formData.append('caption', caption)
        return http.post('/posts', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
        })
    },

    get(postId) {
        return http.get(`/posts/${postId}`)
    },

    update(postId, caption) {
        return http.put(`/posts/${postId}`, { caption })
    },

    delete(postId) {
        return http.delete(`/posts/${postId}`)
    },

}