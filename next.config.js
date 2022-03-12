module.exports = {
  experimental: {
    runtime: "nodejs",
    serverComponents: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:3010/:path*",
      },
    ];
  },
};
