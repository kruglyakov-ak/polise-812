<template>
  <div class="tabs">
    <button
      @click="onTabClick"
      :class="{ active: activeTab === 'albums' }"
      :disabled="activeTab === 'albums'"
    >
      Альбомы
    </button>
    <button
      @click="onTabClick"
      :class="{ active: activeTab === 'posts' }"
      :disabled="activeTab === 'posts'"
    >
      Посты
    </button>
  </div>
</template>

<script>
export default {
  props: {
    activeTab: {
      type: String,
      default: "album",
    },
  },
  methods: {
    onTabClick() {
      this.$emit("onTabClick", this.activeTab);
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
