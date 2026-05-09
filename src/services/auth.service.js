import http from './api';

export const authService = {
    // @param {Object} credentials { email, password }
    async login(credentials) {
        return http.post('/auth/login/', credentials);
    },
    // @param {Object} credentials { name, username, email, password, confirm_password }
    async register(credentials) {
        return http.post('/auth/register/', credentials);
    },
    async logout() {
        return http.post('/auth/logout/');
    },
    async refreshToken() {
        return http.post('/auth/refresh/');
    },
    async me() {
        return http.get('/auth/me/');
    },
};