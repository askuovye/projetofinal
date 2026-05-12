import { defineStore } from "pinia";
import { feedService } from "../services/feed.service";

export const useFeedStore = defineStore("feed", {
  state: () => ({
    posts: [],
    loading: false,
    error: null,
    cursor: null,
    hasMore: true,
    limit: 10,
  }),

  actions: {
    resetFeed() {
      this.posts = [];
      this.cursor = null;
      this.hasMore = true;
      this.error = null;
    },

    async fetchFeed({ reset = false } = {}) {
      if (this.loading) return;
      if (!this.hasMore && !reset) return;

      if (reset) {
        this.resetFeed();
      }

      this.loading = true;
      this.error = null;

      try {
        const response = await feedService.getFeed({
          cursor: this.cursor,
          limit: this.limit,
        });

        const payload = response.data || {};
        const newPosts = Array.isArray(payload.posts)
          ? payload.posts
          : payload.data || [];

        this.posts = [...this.posts, ...newPosts];
        this.cursor = payload.next_cursor ?? payload.nextCursor ?? null;
        this.hasMore = Boolean(this.cursor && newPosts.length);

        return response;
      } catch (error) {
        this.error = error;
        throw error;
      } finally {
        this.loading = false;
      }
    },
  },
});
