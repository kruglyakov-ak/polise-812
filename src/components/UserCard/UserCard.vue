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
      <UserCardAlbums v-if="isAlbumTabActive" />
      <UserCardNews v-else />
    </div>
  </div>
</template>

<script>
import LoaderSpiner from "@/components/LoaderSpiner.vue";
import UserCardTabs from "@/components/UserCard/UserCardTabs.vue";
import UserCardAlbums from "@/components/UserCard/UserCardAlbums.vue";
import UserCardNews from "@/components/UserCard/UserCardNews.vue";

export default {
  data() {
    return {
      isAlbumTabActive: true,
    };
  },
  props: {
    user: { type: Object, required: true },
    avatar: { type: Object, required: true },
  },
  methods: {
    onTabClick() {
      this.isAlbumTabActive = !this.isAlbumTabActive;
    },
  },
  components: {
    LoaderSpiner,
    UserCardTabs,
    UserCardAlbums,
    UserCardNews,
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
