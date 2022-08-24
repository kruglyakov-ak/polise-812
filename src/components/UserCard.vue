<template>
  <div class="user-card">
    <img :src="avatar.url" :alt="user.name" />
    <div class="description">
      <p>{{ user.name }}</p>
      <p>email: {{ user.email }}</p>
      <p>Телефон: {{ user.phone }}</p>
      <p>Город: {{ user.address.city }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: { type: Object, required: true },
    avatar: { type: Object, required: true },
  },
};
</script>

<style lang="scss" scoped>
.user-card {
  padding: 20px;
  display: flex;
  justify-content: space-evenly;

  img {
    width: 200px;
    height: 200px;
  }

  .description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
