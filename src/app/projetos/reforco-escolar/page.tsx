'use client'

import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'

// Dados da galeria
const galleryItems = [
  {
    type: 'image',
    url: '/images/reforco-escolar-comunitario/1.jpg',
    thumbnail: '/images/reforco-escolar-comunitario/1.jpg',
    title: 'Atividades em Grupo',
    description: 'Alunos participando de atividades educativas em grupo'
  },
  {
    type: 'image',
    url: '/images/reforco-escolar-comunitario/2.jpg',
    thumbnail: '/images/reforco-escolar-comunitario/2.jpg',
    title: 'Momento de Aprendizagem',
    description: 'Estudantes focados em suas atividades de aprendizagem'
  },
  {
    type: 'image',
    url: '/images/reforco-escolar-comunitario/3.jpg',
    thumbnail: '/images/reforco-escolar-comunitario/3.jpg',
    title: 'Interação e Desenvolvimento',
    description: 'Crianças interagindo e aprendendo juntas'
  },
  {
    type: 'image',
    url: '/images/reforco-escolar-comunitario/15.jpg',
    thumbnail: '/images/reforco-escolar-comunitario/15.jpg',
    title: 'Atividades Práticas',
    description: 'Momento de atividades práticas e dinâmicas'
  },
  {
    type: 'image',
    url: '/images/reforco-escolar-comunitario/20.jpg',
    thumbnail: '/images/reforco-escolar-comunitario/20.jpg',
    title: 'Aprendizado Colaborativo',
    description: 'Estudantes trabalhando juntos em projetos educacionais'
  },
  {
    type: 'image',
    url: '/images/reforco-escolar-comunitario/25.jpg',
    thumbnail: '/images/reforco-escolar-comunitario/25.jpg',
    title: 'Desenvolvimento Educacional',
    description: 'Alunos em momento de concentração e aprendizado'
  },
  {
    type: 'image',
    url: '/images/reforco-escolar-comunitario/30.jpg',
    thumbnail: '/images/reforco-escolar-comunitario/30.jpg',
    title: 'Atividades Educativas',
    description: 'Momentos especiais de aprendizagem e desenvolvimento'
  },
  {
    type: 'image',
    url: '/images/reforco-escolar-comunitario/35.jpg',
    thumbnail: '/images/reforco-escolar-comunitario/35.jpg',
    title: 'Interação Social',
    description: 'Alunos interagindo e aprendendo em conjunto'
  },
  {
    type: 'image',
    url: '/images/reforco-escolar-comunitario/40.jpg',
    thumbnail: '/images/reforco-escolar-comunitario/40.jpg',
    title: 'Momento de Estudo',
    description: 'Estudantes concentrados em suas atividades'
  },
  {
    type: 'video',
    url: '/images/reforco-escolar-comunitario/Video-Juliana.mp4',
    thumbnail: '/images/reforco-escolar-comunitario/42.jpg',
    title: 'Juliana Santos',
    description: 'Juliana compartilha sua experiência e visão sobre o projeto'
  },
 
]

export default function ReforcoEscolar() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState<'fotos' | 'videos'>('fotos')
  const [isLoading, setIsLoading] = useState(true)
  const [videoError, setVideoError] = useState<string | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Filtra os itens baseado na aba ativa
  const filteredItems = galleryItems.filter(item => 
    activeTab === 'fotos' ? item.type === 'image' : item.type === 'video'
  )

  useEffect(() => {
    if (selectedItem === null) {
      setIsLoading(true)
      setVideoError(null)
      if (videoRef.current) {
        videoRef.current.pause()
      }
    }
  }, [selectedItem])

  const handleVideoLoad = () => {
    console.log('Vídeo carregado com sucesso')
    setIsLoading(false)
    setVideoError(null)
  }

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const video = e.currentTarget
    console.error('Erro ao carregar vídeo:', {
      error: video.error?.message,
      networkState: video.networkState,
      readyState: video.readyState,
      src: video.src
    })
    setVideoError('Erro ao carregar o vídeo. Por favor, tente novamente.')
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full">
        <Image
          src="/images/hero-kids.jpg"
          alt="Crianças estudando"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Reforço Escolar Comunitário
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Transformando vidas através da educação e apoio pedagógico
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <main className="max-w-6xl mx-auto px-4 py-16">
        {/* Sobre o Projeto */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Sobre o Projeto
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="prose prose-lg">
              <p>
                O Projeto de Reforço Escolar Comunitário é uma iniciativa que visa
                fortalecer o aprendizado de crianças e adolescentes em situação de
                vulnerabilidade social, oferecendo suporte educacional gratuito e
                de qualidade.
              </p>
              <p>
                Nosso trabalho é realizado por educadores voluntários comprometidos
                com a transformação social através da educação, atendendo estudantes
                do ensino fundamental e médio.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4">Números do Projeto</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#FF6B00]">150+</p>
                  <p className="text-gray-600">Alunos Atendidos</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#FF6B00]">20</p>
                  <p className="text-gray-600">Voluntários</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#FF6B00]">4</p>
                  <p className="text-gray-600">Comunidades</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#FF6B00]">90%</p>
                  <p className="text-gray-600">Aprovação Escolar</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Galeria */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Galeria
          </h2>
          
          {/* Tabs */}
          <div className="flex gap-4 mb-8">
            <Button
              onClick={() => setActiveTab('fotos')}
              className={`${
                activeTab === 'fotos'
                  ? 'bg-[#FF6B00] text-white'
                  : 'bg-white text-gray-600'
              }`}
            >
              Fotos
            </Button>
            <Button
              onClick={() => setActiveTab('videos')}
              className={`${
                activeTab === 'videos'
                  ? 'bg-[#FF6B00] text-white'
                  : 'bg-white text-gray-600'
              }`}
            >
              Vídeos
            </Button>
          </div>

          {/* Grid de Galeria */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="relative group cursor-pointer"
                onClick={() => {
                  console.log('Clicou no item:', item) // Debug log
                  setSelectedItem(index)
                }}
              >
                <div className="aspect-video relative overflow-hidden rounded-lg">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-[#FF6B00]"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
                <div className="mt-2">
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Modal para visualização */}
        {selectedItem !== null && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden">
              <button
                className="absolute top-4 right-4 text-white z-10"
                onClick={() => setSelectedItem(null)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="bg-black">
                {filteredItems[selectedItem].type === 'image' ? (
                  <div className="aspect-video relative">
                    <Image
                      src={filteredItems[selectedItem].url}
                      alt={filteredItems[selectedItem].title}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-black relative">
                    {isLoading && (
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
                      </div>
                    )}
                    {videoError && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-20">
                        <div className="text-white text-center p-4">
                          <p className="mb-4">{videoError}</p>
                          <button
                            onClick={() => {
                              setIsLoading(true)
                              setVideoError(null)
                              if (videoRef.current) {
                                videoRef.current.load()
                              }
                            }}
                            className="px-4 py-2 bg-[#FF6B00] rounded-lg hover:bg-[#FF6B00]/90"
                          >
                            Tentar Novamente
                          </button>
                        </div>
                      </div>
                    )}
                    <video
                      key={selectedItem}
                      ref={videoRef}
                      className="w-full h-full"
                      controls
                      playsInline
                      preload="auto"
                      poster={filteredItems[selectedItem].thumbnail}
                      onLoadedData={handleVideoLoad}
                      onError={handleVideoError}
                      style={{ backgroundColor: 'black' }}
                    >
                      <source
                        src={filteredItems[selectedItem].url}
                        type="video/mp4"
                      />
                      Seu navegador não suporta a reprodução de vídeos.
                    </video>
                  </div>
                )}
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-xl font-semibold">
                  {filteredItems[selectedItem].title}
                </h3>
                <p className="text-gray-600">
                  {filteredItems[selectedItem].description}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Faça Parte dessa Transformação
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Você pode contribuir com o projeto seja como voluntário ou através de doações.
            Cada ajuda faz a diferença na vida dessas crianças.
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-[#FF6B00] text-white hover:bg-[#FF6B00]/90">
              Seja Voluntário
            </Button>
            <Button className="bg-white text-[#FF6B00] border-2 border-[#FF6B00] hover:bg-[#FF6B00] hover:text-white">
              Faça uma Doação
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
} 