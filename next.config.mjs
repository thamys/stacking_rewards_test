const nextConfig = {
  images: {
    domains: ["storage.googleapis.com", "cms.stakingrewards.com"],
  },
  swcMinify: true,
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
};

export default nextConfig;
