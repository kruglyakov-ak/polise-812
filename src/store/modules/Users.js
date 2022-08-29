export default {
  state: {
    users: [],
    loadingUsers: true,
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload;
    },
    setLoading(state, payload) {
      state.loadingUsers = payload;
    },
  },
  getters: {
    getUsers(state) {
      return state.users;
    },
    getLoadingUsers(state) {
      return state.loadingUsers;
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      const users = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then((response) => response.json());

      commit("setUsers", users);
      commit("setLoading", false);
    },
  },
};
