<template>
  <div class="user-card">
    <div>
      <img
        width="150"
        height="150"
        src="https://via.placeholder.com/150/92c952"
        alt="avatar"
      />
    </div>
    <div>
      <p>Dfczy</p>
      <p>Вася пупкин</p>
      <p>Город: Санкт-Петербург</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.user-card {
  display: flex;
  align-items: center;
  width: 80%;
  border-top: 1px solid $lightGray;
  border-bottom: 1px solid $lightGray;
  padding: 15px;

  &:hover {
    background-color: $lightGray;
  }

  & div {
    padding-right: 30px;
  }

  & img {
    border-radius: 50%;
  }
}
</style>
