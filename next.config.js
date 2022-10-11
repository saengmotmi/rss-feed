const { withSentryConfig } = require("@sentry/nextjs");
// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enable: true,
// });

/** @type {import('next').NextConfig} */
const moduleExports = {
  swcMinify: true,
  reactStrictMode: true,
  staticPageGenerationTimeout: 2 * 60,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/rss",
        permanent: true,
      },
    ];
  },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  images: {
    domains: [
      "cdn-images-1.medium.com",
      "images.velog.io",
      "blogpfthumb-phinf.pstatic.net",
      "substackcdn.com",
      "devblogs.microsoft.com",
    ],
  },
  sentry: {
    hideSourceMaps: true,

    // This option will automatically provide performance monitoring for Next.js
    // data-fetching methods and API routes, making the manual wrapping of API
    // routes via `withSentry` redundant.
    autoInstrumentServerFunctions: true,
  },
  // webpack(config, { webpack }) {
  //   const prod = process.env.NODE_ENV === "production";
  //   const plugins = [...config.plugins];
  //   return {
  //     ...config,
  //     mode: prod ? "production" : "development",
  //     devtool: prod ? "hidden-source-map" : "eval",
  //     plugins,
  //   };
  // },
};

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

// module.exports = withBundleAnalyzer(
//   withSentryConfig(moduleExports, sentryWebpackPluginOptions)
// );

module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);
