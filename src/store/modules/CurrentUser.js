export default {
  state: {
    post: [],
    albums: [],
  },
  mutations: {
    setPosts(state, payload) {
      state.posts = payload;
    },
    setAlbums(state, payload) {
      state.albums = payload;
    },
  },
  getters: {
    getPost(state) {
      return state.posts;
    },
    getAlbums(state) {
      return state.albums;
    },
  },
  actions: {
    async fetchPosts({ commit }, id) {
      const posts = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${id}`
      ).then((response) => response.json());

      commit("setPosts", posts);
    },
    async fetchAlbums({ commit }, id) {
      const albums = await fetch(
        `https://jsonplaceholder.typicode.com/albums?userId=${id}`
      ).then((response) => response.json());

      commit("setAlbums", albums);
    },
    resetCurrentUser({ commit }) {
      commit("setAlbums", []);
      commit("setPosts", []);
    },
  },
};
