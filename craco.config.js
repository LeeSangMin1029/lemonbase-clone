const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "options",
        baseUrl: "./",
        aliases: {
          "@components": "./src/components",
          "@elements": "./src/elements",
          "@hooks": "./src/hooks",
          "@styles": "./src/styles",
          "@image": "./src/image",
        },
      },
    },
  ],
};
