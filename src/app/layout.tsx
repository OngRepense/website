import type { Metadata } from "next"
import "./globals.css"
import { Navbar } from "@/components/navigation/navbar"
import { Footer } from "@/components/navigation/footer"

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
      <body className="min-h-screen flex flex-col font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
