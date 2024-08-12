import type { Config } from "tailwindcss";
/// @ts-ignore
import tailwindCssGridAreas from "@savvywombat/tailwindcss-grid-areas";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateAreas: {
        vtubercard: [
          "image info",
          "image info",
          "genres genres",
          "tags tags",
          "links links",
          "video video",
        ],
        "vtubercard-mobile": [
          "image",
          "info",
          "genres",
          "tags",
          "links",
          "video",
        ],
      },
      gridTemplateColumns: {
        vtubercard: "auto 1fr",
        "vtubercard-mobile": "1fr",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [tailwindCssGridAreas],
};
export default config;
