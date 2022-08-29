const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/police-812/" : "/",
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
