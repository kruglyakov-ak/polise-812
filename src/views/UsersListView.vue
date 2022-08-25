<template>
  <div>
    <LoaderSpiner v-if="loading" />
    <UsersList v-else-if="users.length" :users="users" />
    <h1 v-else>Список пользователей пуст</h1>
  </div>
</template>

<script>
import UsersList from "@/components/UsersList/UsersList.vue";
import LoaderSpiner from "@/components/LoaderSpiner.vue";

export default {
  components: { UsersList, LoaderSpiner },
  data() {
    return {
      users: [],
      loading: true,
    };
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        this.users = json;
        this.loading = false;
      });
  },
};
</script>

<style lang="scss" scoped>
h1 {
  width: 100%;
  text-align: center;
  background-color: $white;
  box-shadow: 0 2px 8px 0 rgba(35, 47, 53, 0.09);
  padding: 50px;

  @media (max-width: 800px) {
    padding: 20px;
  }
}
</style>
