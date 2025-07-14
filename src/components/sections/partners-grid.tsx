'use client'

import Image from 'next/image'

const partners = [
  {
    name: 'Assaí Atacadista',
    logo: '/images/partners/assai.png',
    link: 'https://www.assai.com.br'
  },
  {
    name: 'Grupo Parvi',
    logo: '/images/partners/parvi.png',
    link: 'https://www.grupoparvi.com.br'
  },
  {
    name: 'C&A',
    logo: '/images/partners/cea.png',
    link: 'https://www.cea.com.br'
  }
]

export function PartnersGrid() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto max-w-6xl py-24 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[200px] h-[100px] relative group"
              aria-label={`Visite o site da ${partner.name}`}
            >
              <div className="bg-white rounded-xl p-6 h-full w-full shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative w-full h-full">
                  <Image
                    src={partner.logo}
                    alt={`Logo ${partner.name}`}
                    fill
                    className="object-contain filter group-hover:brightness-110 transition-all duration-300"
                    sizes="200px"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
} 