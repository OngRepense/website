'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

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
  },
  {
    name: 'DyMillaStore',
    logo: '/images/partners/DyMillaStore.png',
    link: 'https://www.instagram.com/dymillastore/',
    description: 'Empreendedorismo local e sustentável'
  },
  {
    name: 'Vitrine do Mundo',
    logo: '/images/partners/VitrinedoMundo.png',
    link: 'https://www.instagram.com/vitrine_domundo/',
    description: 'Conectando culturas e oportunidades'
  }
]

export function PartnersGrid() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play do carrossel
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === partners.length - 1 ? 0 : prevIndex + 1
      )
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    // Reativa o auto-play após 10 segundos
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === partners.length - 1 ? 0 : prevIndex + 1
    )
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? partners.length - 1 : prevIndex - 1
    )
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Carrossel principal */}
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {partners.map((partner, index) => (
            <div key={partner.name} className="w-full flex-shrink-0">
              <a
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
                aria-label={`Visite o site da ${partner.name}`}
              >
                <div className="flex flex-col md:flex-row items-center p-8 md:p-12 min-h-[300px]">
                  {/* Logo do parceiro */}
                  <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                    <div className="relative w-48 h-32 md:w-56 md:h-36">
                      <Image
                        src={partner.logo}
                        alt={`Logo ${partner.name}`}
                        fill
                        className="object-contain filter group-hover:brightness-110 transition-all duration-300"
                        sizes="(max-width: 768px) 200px, 250px"
                      />
                    </div>
                  </div>

                  {/* Informações do parceiro */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {partner.name}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {partner.description}
                    </p>
                    
                    {/* Botão de ação */}
                    <div className="inline-flex items-center px-6 py-3 bg-[#FF6B00] text-white rounded-full font-medium hover:bg-[#E65A00] transition-colors duration-300 group-hover:scale-105 transform">
                      <span>Conhecer parceiro</span>
                      <svg
                        className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Botões de navegação */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-[#FF6B00] hover:bg-white hover:scale-110 transition-all duration-300"
          aria-label="Parceiro anterior"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-[#FF6B00] hover:bg-white hover:scale-110 transition-all duration-300"
          aria-label="Próximo parceiro"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Indicadores de posição */}
      <div className="flex justify-center mt-6 space-x-2">
        {partners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-[#FF6B00] scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Ir para parceiro ${index + 1}`}
          />
        ))}
      </div>

      {/* Contador simples */}
      <div className="text-center mt-4">
        <span className="text-sm text-gray-500">
          {currentIndex + 1} de {partners.length}
        </span>
      </div>

      {/* Seção de estatísticas simplificada */}
      <div className="mt-16 grid grid-cols-3 gap-8 text-center">
        <div>
          <div className="text-3xl font-bold text-[#FF6B00] mb-2">5+</div>
          <div className="text-gray-600">Parceiros</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-[#FF6B00] mb-2">3</div>
          <div className="text-gray-600">Projetos</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-[#FF6B00] mb-2">500+</div>
          <div className="text-gray-600">Vidas</div>
        </div>
      </div>
    </div>
  )
} 