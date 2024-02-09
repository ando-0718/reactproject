const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./src/index.js"),
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        //TypeScript の例で言うと、TypeScriptからJavaScript
        //にコンパイルして、JavaScript から ES5 にトランスパイルしたいので
        //配列の最初にbabel-loaderを設定し、次にts-loaderを設定することで、ts-loader→babel-loaderの順で実行できるようになります。
        use: [
          {
            loader: "babel-loader", //昔のブラウザでも対応できる。
          },
          // {
          //   loader: "ts-loader", //typescriptからjsにコンパイル
          // },
        ],
      },
      {
        test: /\.(scss|css)$/,
        //css...CSS ファイルを文字列に変換して JS の世界に持ち込む。
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", "ts", "tsx", ".json"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
  },
  // ES5(IE11等)向けの指定（webpack 5以上で必要）
  target: ["web", "es5"],
};