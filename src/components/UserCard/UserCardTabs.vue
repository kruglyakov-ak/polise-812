<template>
  <div class="tabs">
    <button
      @click="onTabClick"
      :class="{ active: isAlbumTabActive }"
      :disabled="isAlbumTabActive"
    >
      Альбомы
    </button>
    <button
      @click="onTabClick"
      :class="{ active: !isAlbumTabActive }"
      :disabled="!isAlbumTabActive"
    >
      Посты
    </button>
  </div>
</template>

<script>
export default {
  props: {
    isAlbumTabActive: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    onTabClick() {
      this.$emit("onTabClick", this.isAlbumTabActive);
    },
  },
};
</script>

<style lang="scss" scoped>
.tabs {
  width: 100%;
  display: flex;

  & button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0 10px;
    height: 50px;
    border: 1px solid $deepGray;
    background-color: transparent;
    cursor: pointer;

    &:first-child {
      border-right: none;
    }

    &:hover,
    &:focus {
      background-color: $blueGray;
    }
  }
  .active {
    background-color: $deepGray;
  }
}
</style>
