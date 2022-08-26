<template>
  <div>
    <div v-for="album in albums" :key="album.id">
      <p class="title">{{ album.title }}</p>
      <AlbumSwiper :album="album" />
    </div>
  </div>
</template>

<script>
import AlbumSwiper from "@/components/AlbumSwiper.vue";
export default {
  components: {
    AlbumSwiper,
  },
  props: {
    albums: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  margin-top: 20px;
  background-color: $lightGray;
}
</style>
