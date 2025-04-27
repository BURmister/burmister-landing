/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: 'http',
            hostname: '95.174.93.98',
            pathname: '**',
         },
         {
            protocol: 'http',
            hostname: 'localhost*',
            pathname: '**',
         },
         {
            protocol: 'https',
            hostname: 'api.burmister.pro',
            pathname: '**',
         },
      ],
   },
};

export default nextConfig;
