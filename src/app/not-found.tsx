import { Link } from "@/i18n/navigation";

export default function NotFound() {
  return (
    <html lang="en">
      <body className="grid min-h-[100dvh] place-items-center bg-[#0b0d10] text-[#ebe6df]">
        <div className="text-center">
          <p className="text-sm tracking-[0.2em] text-[#c9924a] uppercase">404</p>
          <h1 className="mt-3 text-3xl font-semibold">Page not found</h1>
          <Link href="/" className="mt-6 inline-block text-[#c9924a] underline">
            Back home
          </Link>
        </div>
      </body>
    </html>
  );
}
