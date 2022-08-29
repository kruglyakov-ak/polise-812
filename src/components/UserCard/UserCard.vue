<template>
  <div class="user-card">
    <div class="left-content">
      <img v-if="avatar" :src="avatar.url" :alt="user.name" />
      <LoaderSpiner v-else />

      <div v-if="user && user.address" class="description">
        <p>{{ user.name }}</p>
        <p>email: {{ user.email }}</p>
        <p>Телефон: {{ user.phone }}</p>
        <p>Город: {{ user.address.city }}</p>
      </div>
      <LoaderSpiner v-else />
    </div>
    <div class="right-content">
      <UserCardTabs :activeTab="activeTab" @onTabClick="onTabClick" />
      <div v-if="activeTab === 'albums'">
        <LoaderSpiner v-if="albumsLoading" />
        <UserCardAlbums v-else :albums="getAlbums" />
      </div>
      <div v-else-if="activeTab === 'posts'">
        <LoaderSpiner v-if="postsLoading" />

        <UserCardPosts v-else :posts="getPost" />
      </div>
    </div>
  </div>
</template>

<script>
import LoaderSpiner from "@/components/LoaderSpiner.vue";
import UserCardTabs from "@/components/UserCard/UserCardTabs.vue";
import UserCardAlbums from "@/components/UserCard/UserCardAlbums.vue";
import UserCardPosts from "@/components/UserCard/UserCardPosts.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      activeTab: this.$route.query.page,
      id: this.$route.params.id,
      albumsLoading: true,
      postsLoading: true,
    };
  },
  props: {
    user: { type: Object, required: true },
    avatar: { type: Object, required: true },
  },
  computed: mapGetters(["getPost", "getAlbums", "getAlbumsLoading"]),
  methods: {
    ...mapActions(["fetchPosts", "fetchAlbums", "resetCurrentUser"]),

    onTabClick() {
      if (this.$route.query.page === "albums") {
        this.$router.push({ query: { page: "posts" } });
        this.activeTab = "posts";
      } else {
        this.$router.push({ query: { page: "albums" } });
        this.activeTab = "albums";
      }
    },

    async loadAlbums() {
      await this.fetchAlbums(this.id);
      this.albumsLoading = false;
    },
    async loadPosts() {
      await this.fetchPosts(this.id);
      this.postsLoading = false;
    },
  },
  mounted() {
    this.loadAlbums();
    this.loadPosts();
  },
  beforeDestroy() {
    this.resetCurrentUser();
  },
  components: {
    LoaderSpiner,
    UserCardTabs,
    UserCardAlbums,
    UserCardPosts,
  },
};
</script>

<style lang="scss" scoped>
.user-card {
  display: flex;
  justify-content: space-between;
}
.left-content {
  height: 80%;
  width: 300px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  border-right: 2px solid $lightGray;

  img {
    width: 200px;
    height: 200px;
  }
  .description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 40px;
  }
}
.right-content {
  width: 500px;
  padding: 0 20px;

  @media (max-width: 800px) {
    width: 100%;
    background-color: $white;
  }
}
</style>
