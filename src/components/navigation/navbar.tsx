'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from 'react'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="border-b bg-white fixed w-full top-0 z-50">
      <div className="flex h-16 items-center container mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/Logo_variações-68.png"
              alt="Repense Logo"
              width={160}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 ml-10">
          <Link href="/sobre" className="text-gray-600 hover:text-[#FF6B00]">
            Sobre
          </Link>
          <Link href="/projetos" className="text-gray-600 hover:text-[#FF6B00]">
            Projetos
          </Link>
          <Link href="/equipe" className="text-gray-600 hover:text-[#FF6B00]">
            Equipe
          </Link>
          <Link href="/blog" className="text-gray-600 hover:text-[#FF6B00]">
            Blog
          </Link>
          <Link href="/contato" className="text-gray-600 hover:text-[#FF6B00]">
            Contato
          </Link>
        </div>
        <div className="flex items-center space-x-4 ml-auto">
          <Button variant="outline" className="hidden md:flex border-[#FF6B00] text-[#FF6B00] hover:bg-[#FF6B00] hover:text-white">
            Seja Voluntário
          </Button>
          <Button className="bg-[#FF6B00] hover:bg-[#E65A00] text-white text-sm md:text-base px-3 md:px-4">
            Doe Agora
          </Button>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-[#FF6B00]"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-b ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="px-4 py-3 space-y-3">
          <Link
            href="/sobre"
            className="block text-gray-600 hover:text-[#FF6B00] py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Sobre
          </Link>
          <Link
            href="/projetos"
            className="block text-gray-600 hover:text-[#FF6B00] py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Projetos
          </Link>
          <Link
            href="/equipe"
            className="block text-gray-600 hover:text-[#FF6B00] py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Equipe
          </Link>
          <Link
            href="/blog"
            className="block text-gray-600 hover:text-[#FF6B00] py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/contato"
            className="block text-gray-600 hover:text-[#FF6B00] py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Contato
          </Link>
          <Button
            variant="outline"
            className="w-full border-[#FF6B00] text-[#FF6B00] hover:bg-[#FF6B00] hover:text-white mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Seja Voluntário
          </Button>
        </div>
      </div>
    </nav>
  )
} 