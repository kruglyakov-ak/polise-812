<template>
  <div>
    <UsersList :users="users" />
  </div>
</template>

<script>
import UsersList from "@/components/UsersList.vue";
export default {
  components: { UsersList },
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

<style lang="scss" scoped></style>
