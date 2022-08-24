<template>
  <nav>
    <li>
      <router-link class="link" :to="{ name: 'usersList' }"
        >К списку пользователей
      </router-link>
    </li>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav {
  height: 90px;
  padding: 20px;
  list-style: none;
  display: flex;
  justify-content: flex-end;
}

.link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 10px;
  height: 50px;
  border: 1px solid $deepGray;

  &:hover,
  &:focus {
    background-color: $blueGray;
  }
}
</style>
