<template>
  <div class="users-list">
    <div class="title-wrap">
      <h1>Список пользователей</h1>
    </div>
    <UsersListCard v-for="user in users" :key="user.id" :user="user" />
  </div>
</template>

<script>
import UsersListCard from "@/components/UsersListCard.vue";
export default {
  components: { UsersListCard },
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.users-list {
  background-color: $lightGray;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  height: 90vh;
  box-shadow: 0 2px 8px 0 rgba(35, 47, 53, 0.09);
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: thin;

  @media (max-width: 800px) {
    width: 100vw;
    height: 100vh;
    background-color: $white;
  }

  .title-wrap {
    width: 100%;
    text-align: center;
    background-color: $white;
    margin-bottom: 20px;
    box-shadow: 0 2px 8px 0 rgba(35, 47, 53, 0.09);

    @media (max-width: 800px) {
      box-shadow: none;
      margin: 0;
    }
  }
}
</style>
