import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // Older URL shapes → /polish/<course>/grade-N/<lesson>.
  async redirects() {
    const legacy = { niemiecki: "german", hiszpanski: "spanish", german: "german", spanish: "spanish" };
    return Object.entries(legacy).flatMap(([old, en]) => [
      { source: `/${old}`, destination: `/polish/${en}`, permanent: true },
      { source: `/${old}/klasa-:n/:lesson`, destination: `/polish/${en}/grade-:n/:lesson`, permanent: true },
      { source: `/${old}/grade-:n/:lesson`, destination: `/polish/${en}/grade-:n/:lesson`, permanent: true },
    ]);
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
