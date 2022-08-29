import Vue from "vue";
import Vuex from "vuex";
import UserModel from "./modules/Users";
import CurrentUser from "./modules/CurrentUser";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    UserModel,
    CurrentUser,
  },
});
