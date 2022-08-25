<template>
  <div class="user">
    <MainNav />
    <UserCard :avatar="this.avatar" :user="this.user" />
  </div>
</template>

<script>
import MainNav from "@/components/MainNav.vue";
import UserCard from "@/components/UserCard/UserCard.vue";

export default {
  data() {
    return {
      id: this.$route.params.id,
      user: {},
      avatar: {},
    };
  },
  components: {
    MainNav,
    UserCard,
  },
  mounted() {
    fetch(`https://jsonplaceholder.typicode.com/users/${this.id}`)
      .then((response) => response.json())
      .then((json) => {
        this.user = json;
      });
    fetch(`https://jsonplaceholder.typicode.com/photos/${this.id}`).then(
      (response) => response.json().then((json) => (this.avatar = json))
    );
  },
};
</script>

<style lang="scss" scoped>
.user {
  max-width: 1200px;
  height: 100vh;
  background-color: $white;
  box-shadow: 0 2px 8px 0 rgba(35, 47, 53, 0.09);

  @media (max-width: 800px) {
    width: 100vw;
    height: 100vh;
    background-color: $white;
  }
}
</style>
