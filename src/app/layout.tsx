import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navigation/navbar"
import { Footer } from "@/components/navigation/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "My Website",
  description: "A modern Next.js website with shadcn/ui",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="container mx-auto p-4 flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
