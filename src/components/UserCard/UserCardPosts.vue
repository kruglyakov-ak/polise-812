<template>
  <div>
    <ol>
      <li v-for="post in posts" :key="post.id">
        <p>{{ post.title }}</p>
        <p>{{ post.body }}</p>
      </li>
    </ol>
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

<style lang="scss" scoped></style>
