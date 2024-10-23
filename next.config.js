const nextConfig = {
  async redirects() {
    return [
      {
        source: '/login',
        destination: `${process.env.BASE_URL}/admin/login/`,
        permanent: true,
      },
      {
        source: '/product/add',
        destination: `${process.env.BASE_URL}/admin/inventory/product/add/`,
        permanent: true,
      },
    ];
  },
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
