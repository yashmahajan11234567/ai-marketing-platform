import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Marketing Platform — Create. Market. Interact. Convert.",
  description: "An affordable AI marketing department for local businesses. Generate images, videos, captions, and run WhatsApp campaigns — all in one platform.",
  openGraph: {
    title: "AI Marketing & WhatsApp Automation Platform",
    description: "Create → Market → Interact → Convert. An affordable AI marketing department for local businesses.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Marketing Platform",
    description: "Create. Market. Interact. Convert.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#06090f] text-white selection:bg-blue-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
