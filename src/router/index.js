import { createRouter, createWebHistory } from "vue-router";
import { ROUTE_NAMES } from "./routeNames";

const routes = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/feed",
    },
    {
      path: "/login",
      name: ROUTE_NAMES.LOGIN,
      component: () => import("../views/auth/LoginView.vue"),
    },
    {
      path: "/register",
      name: ROUTE_NAMES.REGISTER,
      component: () => import("../views/auth/RegisterView.vue"),
    },
    {
      path: "/feed",
      name: ROUTE_NAMES.FEED,
      component: () => import("../views/app/HomeView.vue"),
    },
    {
      path: "/discover",
      name: ROUTE_NAMES.DISCOVER,
      component: () => import("../views/app/ExploreView.vue"),
    },
    {
      path: "/create",
      name: ROUTE_NAMES.CREATE_POST,
      component: () => import("../views/app/CreatePostView.vue"),
    },
    {
      path: "/profile/edit",
      name: ROUTE_NAMES.PROFILE_EDIT,
      component: () => import("../views/app/ProfileEditView.vue"),
    },
    {
      path: "/profile/:username",
      name: ROUTE_NAMES.USER_PROFILE,
      component: () => import("../views/app/ProfileView.vue"),
    },
    {
      path: "/profile/list/:type",
      name: ROUTE_NAMES.CONNECTION_LIST,
      component: () => import("../views/app/ConnectionListView.vue"),
    },
    {
      path: "/posts/:postId",
      name: ROUTE_NAMES.POST_DETAIL,
      component: () => import("../views/app/PostDetailView.vue"),
    },
    {
      path: "/notifications",
      name: ROUTE_NAMES.NOTIFICATIONS,
      component: () => import("../views/app/NotificationsView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: ROUTE_NAMES.NOT_FOUND,
      component: () => import("../views/NotFound.vue"),
    },
  ],
});

routes.beforeEach((to) => {
  const token =
    localStorage.getItem("token") || localStorage.getItem("instaclone.token");
  const publicPages = [ROUTE_NAMES.LOGIN, ROUTE_NAMES.REGISTER];
  const authRequired = !publicPages.includes(to.name);

  if (authRequired && !token) {
    return { name: ROUTE_NAMES.LOGIN };
  }

  return true;
});

export default routes;
