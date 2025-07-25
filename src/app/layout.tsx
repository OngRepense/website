import type { Metadata } from "next"
import "./globals.css"
import { Navbar } from "@/components/navigation/navbar"
import { Footer } from "@/components/navigation/footer"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Repense",
  description: "Transformando vidas através da educação e tecnologia",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-X8RH2NMFLP" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X8RH2NMFLP');
          `}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
