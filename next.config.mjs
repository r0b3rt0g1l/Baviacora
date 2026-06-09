/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Calidades permitidas por next/image. Los componentes usan 85 (hero, cards)
    // y 90 (portada de Historia); sin esto Next emite warning (default: [75]).
    qualities: [75, 85, 90],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'loremflickr.com',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
