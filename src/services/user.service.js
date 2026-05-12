import http from "./api";

export const userService = {
    search(q, params = {}) {
        return http.get('/users/search', { params: { q, ...params } })
    },
    getProfile(username) {
        return http.get(`/users/${username}`)
    },
    updateProfile(payload) {
        return http.put('/users/me', payload)
    },
    uploadAvatar(file) {
        const formData = new FormData()
        formData.append('avatar', file)
        return http.post('/users/me/avatar', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
        })
    },
    suggestions(params = {}) {
        return http.get('/users/suggestions', { params })
    },
    byUser(userId, page = 1) {
        return http.get(`/users/${userId}/posts`, { params: { page } })
    },

}