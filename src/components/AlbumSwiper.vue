<template>
  <v-carousel cycle height="200" hide-delimiter-background show-arrows-on-hover>
    <LoaderSpiner v-if="photosLoading" />
    <v-carousel-item
      v-else
      v-for="(photo, i) in photos"
      :key="i"
      :src="photo.url"
    >
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import LoaderSpiner from "./LoaderSpiner.vue";
export default {
  data() {
    return {
      photos: [],
      photosLoading: true,
    };
  },
  props: {
    album: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    fetch(
      `https://jsonplaceholder.typicode.com/albums/${this.album.id}/photos?_limit=5`
    )
      .then((response) => response.json())
      .then((json) => {
        this.photos = json;
        this.photosLoading = false;
      });
  },
  components: { LoaderSpiner },
};
</script>

<style lang="scss" scoped></style>
