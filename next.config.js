/** @type {import('next').NextConfig} */

module.exports = {
  webpack: (config, options) => {
    config.plugins.push(
      new options.webpack.container.ModuleFederationPlugin({
        remoteType: "var",
        remotes: {
          appcontainer: "appcontainer",
          currency: "currency",
        },
        shared: {
          react: {
            eager: true,
            singleton: true,
            requiredVersion: false
          },
        },
      })
    );

    config.module.rules.push({
      test: /_app.tsx/,
      loader: "@module-federation/nextjs-mf/lib/federation-loader.js",
    });

    return config;
  },
}
