import "./globals.css";

export const metadata = {
  title: "BrandName — 25K+ Students Trust Us",
  description: "Figma landing page rebuilt in Next.js, as it is.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
