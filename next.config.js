const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/graphql/:path*',
        destination: `${process.env.API_URL}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
