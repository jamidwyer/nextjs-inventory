const nextConfig = {
  async redirects() {
    return [
      {
        source: '/login',
        destination: 'http://localhost/admin/login/',
        permanent: true,
      },
      {
        source: '/product/add',
        destination: 'http://localhost/admin/inventory/product/add/',
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
