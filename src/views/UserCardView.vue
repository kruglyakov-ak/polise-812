<template>
  <div class="user">
    <MainNav />
  </div>
</template>

<script>
import MainNav from "@/components/MainNav.vue";

export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  components: {
    MainNav,
  },
};
</script>

<style lang="scss" scoped>
.user {
  width: 90vw;
  height: 90vh;
  background-color: $white;
  box-shadow: 0 2px 8px 0 rgba(35, 47, 53, 0.09);
}
</style>
