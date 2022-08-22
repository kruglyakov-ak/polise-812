import Vue from "vue";
import VueRouter from "vue-router";
import UserListView from "../views/UserListView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "users list",
    component: UserListView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
