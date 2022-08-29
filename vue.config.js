const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/assets/variables.sass"`,
      },
      scss: {
        additionalData: `@import "~@/assets/variables.scss";`,
      },
    },
  },
});
