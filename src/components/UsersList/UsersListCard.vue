<template>
  <div class="user-card">
    <router-link
      class="link"
      :to="{
        name: 'userCard',
        params: { id: user.id },
        query: { page: 'albums' },
      }"
    >
      <LoaderSpiner class="loader" v-if="avatarLoading" />
      <img
        v-else
        width="150"
        height="150"
        :src="avatar.thumbnailUrl"
        :alt="user.name"
      />
    </router-link>
    <div class="card-desc">
      <router-link
        class="name"
        :to="{
          name: 'userCard',
          params: { id: user.id },
          query: { page: 'albums' },
        }"
      >
        <p>{{ user.name }}</p>
      </router-link>
      <p class="city">Город: {{ user.address.city }}</p>
      <p class="email">email: {{ user.email }}</p>
    </div>
  </div>
</template>

<script>
import LoaderSpiner from "@/components/LoaderSpiner.vue";
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      avatar: "",
      avatarLoading: true,
    };
  },
  mounted() {
    fetch(`https://jsonplaceholder.typicode.com/photos/${this.user.id}`)
      .then((response) => response.json())
      .then((json) => {
        this.avatar = json;
        this.avatarLoading = false;
      });
  },
  components: {
    LoaderSpiner,
  },
};
</script>

<style lang="scss" scoped>
.user-card {
  background-color: $white;
  display: flex;
  align-items: center;
  width: 530px;
  padding: 15px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px 0 rgba(35, 47, 53, 0.09);

  @media (max-width: 800px) {
    width: 100%;
    box-shadow: none;
    margin: 0;
    border-top: 1px solid $lightGray;
  }

  &:hover {
    background-color: $blueGray;
  }

  .link {
    margin-right: 30px;
    @media (max-width: 800px) {
      margin-right: 10px;
    }
  }

  & img {
    cursor: pointer;

    @media (max-width: 800px) {
      width: 100px;
      height: 100px;
    }
  }

  .loader {
    width: 150px;
    height: 150px;
    margin-right: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    @media (max-width: 800px) {
      margin-right: 10px;
      width: 100px;
      height: 100px;
    }
  }

  .card-desc {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    p {
      margin: 0;
    }
  }
}
</style>
