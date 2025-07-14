import Link from 'next/link'
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Navbar() {
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
          <Button className="bg-[#FF6B00] hover:bg-[#E65A00] text-white">
            Doe Agora
          </Button>
        </div>
      </div>
    </nav>
  )
} 