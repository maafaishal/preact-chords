import CopyWebpackPlugin from "copy-webpack-plugin";
import tailwind from "preact-cli-tailwind";
import path from "path";

module.exports = (config, env, helpers) => {
  // set tailwind plugin
  config = tailwind(config, env, helpers);

  // copy asset to root build folder
  config.plugins.push(
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "*",
          context: path.resolve(__dirname, "src/assets"),
        },
      ],
    })
  );

  return config;
};
