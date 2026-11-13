
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.fodmapguide.com',
          },
        ],
        destination: 'https://fodmapguide.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
