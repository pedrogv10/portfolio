import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  turbopack: {
    root: process.cwd(),
  },
  async headers() {
    return [
      {
        source: "/pedro-silva-cv.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: 'inline; filename="pedro-silva-cv.pdf"',
          },
        ],
      },
      {
        source: "/pedro-silva-cv-pt.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: 'inline; filename="pedro-silva-cv-pt.pdf"',
          },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
