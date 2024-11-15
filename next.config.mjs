/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['cdn.movieofthenight.com', 'www.movieofthenight.com'], // Adicione o domínio da nova URL
  },
};

export default nextConfig;