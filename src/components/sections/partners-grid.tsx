'use client'

import Image from 'next/image'

const partners = [
  {
    name: 'Assaí Atacadista',
    logo: '/images/partners/assai.png',
    link: 'https://www.assai.com.br',
    description: 'Apoiando projetos sociais e educacionais'
  },
  {
    name: 'Grupo Parvi',
    logo: '/images/partners/parvi.png',
    link: 'https://www.grupoparvi.com.br',
    description: 'Investindo no futuro através da educação'
  },
  {
    name: 'C&A',
    logo: '/images/partners/cea.png',
    link: 'https://www.cea.com.br',
    description: 'Comprometida com a transformação social'
  }
]

export function PartnersGrid() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-orange-50 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.03] pointer-events-none">
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#FF6B00]"></div>
        <div className="absolute -left-24 -bottom-24 w-96 h-96 rounded-full bg-[#FF6B00]"></div>
      </div>

      <div className="container mx-auto max-w-6xl py-24 px-4 relative">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Nossos Parceiros
          </h2>
          <div className="w-24 h-1 bg-[#FF6B00] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Empresas que acreditam no poder da educação e tecnologia para transformar vidas
            e construir um futuro melhor.
          </p>
        </div>
        
        {/* Grid de parceiros */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-items-center">
          {partners.map((partner, index) => (
            <a
              key={partner.name}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[280px] group"
              aria-label={`Visite o site da ${partner.name}`}
            >
              <div 
                className="bg-white rounded-2xl p-8 h-full w-full shadow-lg hover:shadow-2xl 
                         transition-all duration-500 transform hover:-translate-y-2 relative
                         before:absolute before:inset-0 before:rounded-2xl before:border-2 
                         before:border-transparent hover:before:border-[#FF6B00]/20 
                         before:transition-all before:duration-500"
              >
                {/* Logo do parceiro */}
                <div className="relative w-full h-[120px] mb-6">
                  <Image
                    src={partner.logo}
                    alt={`Logo ${partner.name}`}
                    fill
                    className="object-contain filter group-hover:brightness-110 transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Informações do parceiro */}
                <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {partner.description}
                  </p>
                </div>

                {/* Indicador de hover */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center text-[#FF6B00] text-sm font-medium">
                  <span>Visitar site</span>
                  <svg
                    className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-8">
            Quer fazer parte dessa transformação?
          </p>
          <a
            href="/contato"
            className="inline-flex items-center px-8 py-3 rounded-full bg-white text-[#FF6B00] 
                     border-2 border-[#FF6B00] hover:bg-[#FF6B00] hover:text-white 
                     transition-colors duration-300 font-medium"
          >
            Seja um parceiro
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
} 