import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";
import { loadGoogleFont } from "@/lib/og-fonts";

export const alt = "Pedro Silva — Front-End Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [syne, outfit] = await Promise.all([
    loadGoogleFont("Syne", 600),
    loadGoogleFont("Outfit", 400),
  ]);

  const host = new URL(siteConfig.url).host;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0b0d10",
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 70% 0%, rgba(201,146,74,0.22), transparent 55%), radial-gradient(ellipse 50% 40% at 10% 80%, rgba(201,146,74,0.10), transparent 50%)",
          color: "#ebe6df",
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "Outfit",
            fontSize: 22,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#c9924a",
          }}
        >
          Portfolio
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontFamily: "Syne",
              fontSize: 84,
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Pedro Silva
          </div>
          <div
            style={{
              display: "flex",
              maxWidth: 900,
              fontFamily: "Outfit",
              fontSize: 30,
              lineHeight: 1.35,
              color: "#9a948a",
            }}
          >
            Front-End Developer — WordPress, Gutenberg & React
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontFamily: "Outfit",
            fontSize: 22,
            color: "#9a948a",
          }}
        >
          {host}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Syne", data: syne, weight: 600, style: "normal" },
        { name: "Outfit", data: outfit, weight: 400, style: "normal" },
      ],
    },
  );
}
