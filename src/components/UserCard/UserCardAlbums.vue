<template>
  <div>
    <p v-for="album in albums" :key="album.id">{{ album.title }}</p>
    <AlbumSwiper />
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

<style lang="scss" scoped></style>
