/** Load a single weight from Google Fonts for next/og ImageResponse. */
export async function loadGoogleFont(
  family: string,
  weight: number,
): Promise<ArrayBuffer> {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}&display=swap`,
    {
      headers: {
        // Request TTF/OTF (Satori cannot use woff2).
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
      },
    },
  ).then((res) => res.text());

  const match = css.match(/src: url\(([^)]+)\)/);
  if (!match?.[1]) {
    throw new Error(`Could not resolve font URL for ${family} ${weight}`);
  }

  return fetch(match[1]).then((res) => res.arrayBuffer());
}
