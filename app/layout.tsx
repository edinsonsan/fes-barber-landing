import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://fesbarber.com"),

  title: {
    default: "FES Barber - Software para barberías",
    template: "%s | FES Barber",
  },

  description:
    "Gestiona tu barbería con FES Barber. Controla citas, ingresos y clientes desde tu celular.",

  keywords: [
    "barbería",
    "software para barberías",
    "gestión de barbería",
    "app barbería",
    "FES Barber",
  ],

  authors: [{ name: "Edinson Jeanpierre Sandoval Escobar" }],
  creator: "Edinson Jeanpierre Sandoval Escobar",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",

  alternates: {
    canonical: "https://fesbarber.com",
  },

  openGraph: {
    title: "FES Barber",
    description: "Digitaliza tu barbería fácilmente",
    url: "https://fesbarber.com",
    siteName: "FES Barber",
    images: [
      {
        url: "/screenshot/hero.png",
        width: 1200,
        height: 630,
        alt: "FES Barber App Preview",
      },
    ],
    locale: "es_PE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "FES Barber",
    description: "Gestiona tu barbería fácilmente",
    images: ["/screenshot/hero.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-50 antialiased`}>

        {/* Facebook Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'TU_PIXEL_ID'); // 👈 CAMBIA ESTO
            fbq('track', 'PageView');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}