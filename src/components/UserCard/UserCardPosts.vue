<template>
  <div>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <p class="title">{{ post.title }}</p>
        <p class="descrioption">{{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding: 0;
  .title {
    background-color: $lightGray;
    margin-top: 20px;

    margin-bottom: 5px;
  }
  .descrioption {
    margin-top: 5px;
  }
}
</style>
