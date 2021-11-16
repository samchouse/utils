/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  swcMinify: true,
  // eslint-disable-next-line @typescript-eslint/require-await
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        destination: `${process.env['NEXT_PUBLIC_BACKEND_URL']}/:path*`
      }
    ];
  }
};
