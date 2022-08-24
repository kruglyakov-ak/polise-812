import Vue from "vue";
import VueRouter from "vue-router";
import UserListView from "@/views/UsersListView.vue";
import UserCardView from "@/views/UserCardView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "usersList",
    component: UserListView,
  },
  {
    path: "/user/:id",
    name: "userCard",
    component: UserCardView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
