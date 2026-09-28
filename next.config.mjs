const isDev = process.argv.indexOf("dev") !== -1;
const isBuild = process.argv.indexOf("build") !== -1;

if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
  process.env.VELITE_STARTED = "1";
  const { build } = await import("velite");
  await build({ watch: isDev, clean: !isDev });
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "i.scdn.co" },
      { protocol: "https", hostname: "i.pinimg.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
    ],
  },
  experimental: {
    optimizeCss: true,
    swcMinify: true,
    outputFileTracingIncludes: {
      "/lab/[slug]": [
        "./components/lab/**/*",
        "./components/lab/examples/**/*",
        "./hooks/**/*",
      ],
    },
    outputFileTracingExcludes: {
      "*": ["**/*.mdx"],
    },
  },
};

export default nextConfig;
