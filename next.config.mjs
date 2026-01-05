/** @type {import('next').NextConfig} */
const nextConfig = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
