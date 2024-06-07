/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ['./src/styles'],
  },
  images: {
    domains: [
      'ji-springboot-bucket.s3.ap-northeast-2.amazonaws.com',
    ],
  },
};

export default nextConfig;
