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
  // Permite acceder al servidor de DESARROLLO desde la IP de la red local
  // (revisión en celular por LAN). Sin esto, Next 16 bloquea (403) los recursos
  // /_next/* cross-origin y la página no hidrata en el teléfono. Solo afecta dev.
  allowedDevOrigins: ['192.168.0.119', '192.168.0.146'],
};

export default nextConfig;
