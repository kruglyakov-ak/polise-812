<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
*,
*::after,
*::before {
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: inherit;
  font-weight: bold;

  &:visited {
    color: inherit;
  }
}

body {
  font-family: Arial, Helvetica, sans-serif;
  color: $color-gray;
  margin: 0;
  padding: 0;
  background-color: $gray;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 400px) {
    font-size: 0.8em;
  }
}
</style>
