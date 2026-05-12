import http from "./api";

export const feedService = {
  getFeed({ cursor = null, limit = 10 } = {}) {
    const params = { limit };

    if (cursor) {
      params.cursor = cursor;
    }

    return http.get("/feed", { params });
  },
};
