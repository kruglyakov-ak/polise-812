<template>
  <div class="user-list">
    <h1>Список пользователей</h1>
    <UserCard />
    <UserCard />
    <UserCard />
    <UserCard />
    <UserCard />
    <UserCard />
    <UserCard />
    <UserCard />
    <UserCard />
    <UserCard />
  </div>
</template>

<script>
import UserCard from "@/components/UserCard.vue";
export default {
  components: {
    UserCard,
  },
};
</script>

<style lang="scss" scoped>
.user-list {
  background-color: $white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vw;
  height: 90vh;
  box-shadow: 0 2px 8px 0 rgba(35, 47, 53, 0.09);
  overflow: auto;
  scrollbar-width: thin;
}
</style>
