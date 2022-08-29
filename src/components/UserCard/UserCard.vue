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
      <UserCardTabs
        :isAlbumTabActive="isAlbumTabActive"
        @onTabClick="onTabClick"
      />

      <UserCardAlbums
        v-if="isAlbumTabActive && getAlbums"
        :albums="getAlbums"
      />
      <UserCardPosts
        v-else-if="!isAlbumTabActive && getPost"
        :posts="getPost"
      />
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
      isAlbumTabActive: true,
      id: this.$route.params.id,
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
      this.isAlbumTabActive = !this.isAlbumTabActive;
    },
  },
  mounted() {
    this.fetchPosts(this.id);
    this.fetchAlbums(this.id);
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
