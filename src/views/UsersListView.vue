<template>
  <div>
    <LoaderSpiner v-if="getLoadingUsers" />
    <UsersList v-else-if="getUsers.length" :users="getUsers" />
    <h1 v-else>Список пользователей пуст</h1>
  </div>
</template>

<script>
import UsersList from "@/components/UsersList/UsersList.vue";
import LoaderSpiner from "@/components/LoaderSpiner.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: { UsersList, LoaderSpiner },
  computed: mapGetters(["getLoadingUsers", "getUsers"]),
  methods: mapActions(["fetchUsers", "fetchAvatars"]),
  mounted() {
    this.fetchUsers();
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
