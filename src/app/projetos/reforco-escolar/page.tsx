'use client'

import Image from 'next/image'
import Link from 'next/link'
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
  const [showProjectModal, setShowProjectModal] = useState(false)
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
      <section className="relative h-[50vh] sm:h-[60vh] min-h-[300px] sm:min-h-[400px] w-full">
        <Image
          src="/images/hero-kids.jpg"
          alt="Crianças estudando"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
              Reforço Escolar Comunitário
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed">
              Transformando vidas através da educação e apoio pedagógico
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <main className="max-w-6xl mx-auto px-4 py-8 sm:py-16">
        {/* Sobre o Projeto */}
        <section className="mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Sobre o Projeto
            </h2>
            <Button 
              onClick={() => setShowProjectModal(true)}
              className="bg-[#FF6B00] text-white hover:bg-[#FF6B00]/90 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 w-full sm:w-auto"
            >
              Saiba Mais Sobre o Projeto
            </Button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="prose prose-sm sm:prose-base lg:prose-lg">
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
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Números do Projeto</h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-[#FF6B00]">150+</p>
                  <p className="text-sm sm:text-base text-gray-600">Alunos Atendidos</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-[#FF6B00]">20</p>
                  <p className="text-sm sm:text-base text-gray-600">Voluntários</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-[#FF6B00]">4</p>
                  <p className="text-sm sm:text-base text-gray-600">Comunidades</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-[#FF6B00]">90%</p>
                  <p className="text-sm sm:text-base text-gray-600">Aprovação Escolar</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Galeria */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            Galeria
          </h2>
          
          {/* Tabs */}
          <div className="flex gap-2 sm:gap-4 mb-6 sm:mb-8">
            <Button
              onClick={() => setActiveTab('fotos')}
              className={`text-sm sm:text-base px-3 sm:px-4 py-2 ${
                activeTab === 'fotos'
                  ? 'bg-[#FF6B00] text-white'
                  : 'bg-white text-gray-600'
              }`}
            >
              Fotos
            </Button>
            <Button
              onClick={() => setActiveTab('videos')}
              className={`text-sm sm:text-base px-3 sm:px-4 py-2 ${
                activeTab === 'videos'
                  ? 'bg-[#FF6B00] text-white'
                  : 'bg-white text-gray-600'
              }`}
            >
              Vídeos
            </Button>
          </div>

          {/* Grid de Galeria */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/80 rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 sm:w-8 sm:h-8 text-[#FF6B00]"
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
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Modal do Projeto */}
        {showProjectModal && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-2 sm:p-4">
            <div className="relative w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] bg-white rounded-lg sm:rounded-xl overflow-hidden mx-2">
              <button
                className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-600 hover:text-gray-900 z-10 bg-white rounded-full p-1.5 sm:p-2 shadow-md"
                onClick={() => setShowProjectModal(false)}
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
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
              <div className="p-4 sm:p-6 lg:p-8 overflow-y-auto max-h-[calc(95vh-1rem)] sm:max-h-[calc(90vh-2rem)]">
                <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 leading-tight">
                    Projeto de Reforço Escolar Comunitário: Educando para Transformar
                  </h1>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 italic">
                    Uma parceria entre a ONG Repense e a sua comunidade para construir um futuro mais brilhante através da educação.
                  </p>
                  
                  <div className="space-y-4 sm:space-y-6">
                    <div className="bg-orange-50 p-4 sm:p-6 rounded-lg border-l-4 border-[#FF6B00]">
                      <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                        A ONG Repense acredita no poder da educação como a principal ferramenta de transformação social. Por isso, criamos o nosso Projeto de Reforço Escolar Comunitário, uma iniciativa dedicada a oferecer suporte pedagógico de alta qualidade para crianças e adolescentes, diretamente no coração de suas comunidades.
                      </p>
                    </div>

                    <div className="bg-blue-50 p-4 sm:p-6 rounded-lg border-l-4 border-blue-500">
                      <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                        Nosso objetivo vai além de ajudar com o dever de casa. Queremos inspirar a paixão pelo aprendizado, fortalecer a autoconfiança dos alunos e desenvolver o pensamento crítico, preparando-os não apenas para a escola, mas para a vida.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                        Como Funciona a Nossa Parceria?
                      </h2>
                      <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
                        Nosso modelo de atuação é baseado na colaboração e no fortalecimento de laços comunitários. Buscamos parcerias estratégicas com Associações de Moradores e outras organizações locais que desejam levar essa oportunidade para perto de suas famílias.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                      <div className="bg-green-50 p-4 sm:p-6 rounded-lg border-l-4 border-green-500">
                        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                          O Papel da Associação Parceira:
                        </h3>
                        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                          A associação é nossa principal aliada. Sua contribuição é fundamental e consiste em nos fornecer um espaço seguro e adequado para a realização das aulas (como um salão comunitário ou uma sala ociosa). Ao fazer isso, a associação se torna um polo de desenvolvimento educacional, fortalecendo seu papel e relevância junto aos moradores.
                        </p>
                      </div>

                      <div className="bg-purple-50 p-4 sm:p-6 rounded-lg border-l-4 border-purple-500">
                        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                          O Papel da ONG Repense (Nossa Contrapartida):
                        </h3>
                        <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-3 sm:mb-4">
                          Em troca do espaço, a ONG Repense assume a responsabilidade por toda a estrutura pedagógica do projeto. Nós entramos com:
                        </p>
                        <ul className="list-disc list-inside space-y-1.5 sm:space-y-2 text-sm sm:text-base lg:text-lg">
                          <li><strong>Educadores Capacitados:</strong> Uma equipe de professores e pedagogos qualificados e comprometidos com uma educação humanizada e eficaz.</li>
                          <li><strong>Material Didático Completo:</strong> Fornecemos todos os materiais necessários para as aulas, como livros, apostilas, cadernos, lápis e recursos lúdicos e educativos.</li>
                          <li><strong>Metodologia Pedagógica:</strong> Implementamos nosso método de ensino focado na aprendizagem ativa, no desenvolvimento socioemocional e no acompanhamento individualizado de cada aluno.</li>
                          <li><strong>Gestão e Coordenação:</strong> Cuidamos de toda a organização do projeto, desde o planejamento das aulas até a comunicação com as famílias e a avaliação contínua dos resultados.</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-4 sm:p-6 rounded-lg border-l-4 border-yellow-500">
                      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                        Junte-se a Nós!
                      </h2>
                      <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-3 sm:mb-4">
                        Acreditamos que, unindo a força da comunidade (através do espaço) com nossa expertise em educação (através do conteúdo e dos educadores), podemos criar um ambiente de aprendizado poderoso e acessível para todos.
                      </p>
                      <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
                        <strong>Sua associação de moradores tem um espaço e quer fazer a diferença?</strong>
                      </p>
                      <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
                        Entre em contato conosco e vamos juntos levar o Projeto de Reforço Escolar da ONG Repense para a sua comunidade.
                      </p>
                      
                      <div className="text-center">
                        <Link href="/contato">
                          <Button 
                            className="bg-[#FF6B00] text-white hover:bg-[#FF6B00]/90 text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2 sm:py-3 w-full sm:w-auto"
                            onClick={() => setShowProjectModal(false)}
                          >
                            Solicitar o Projeto para Minha Comunidade
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal para visualização */}
        {selectedItem !== null && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-2 sm:p-4">
            <div className="relative w-full max-w-4xl bg-white rounded-lg sm:rounded-xl overflow-hidden mx-2">
              <button
                className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white z-10 bg-black/50 rounded-full p-1.5 sm:p-2"
                onClick={() => setSelectedItem(null)}
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
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
                        <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-t-2 border-b-2 border-white"></div>
                      </div>
                    )}
                    {videoError && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-20">
                        <div className="text-white text-center p-4">
                          <p className="mb-4 text-sm sm:text-base">{videoError}</p>
                          <button
                            onClick={() => {
                              setIsLoading(true)
                              setVideoError(null)
                              if (videoRef.current) {
                                videoRef.current.load()
                              }
                            }}
                            className="px-3 py-2 sm:px-4 sm:py-2 bg-[#FF6B00] rounded-lg hover:bg-[#FF6B00]/90 text-sm sm:text-base"
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
              <div className="p-3 sm:p-4 bg-white">
                <h3 className="text-lg sm:text-xl font-semibold">
                  {filteredItems[selectedItem].title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {filteredItems[selectedItem].description}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            Faça Parte dessa Transformação
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Você pode contribuir com o projeto seja como voluntário ou através de doações.
            Cada ajuda faz a diferença na vida dessas crianças.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button className="bg-[#FF6B00] text-white hover:bg-[#FF6B00]/90 text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3 w-full sm:w-auto">
              Seja Voluntário
            </Button>
            <Button className="bg-white text-[#FF6B00] border-2 border-[#FF6B00] hover:bg-[#FF6B00] hover:text-white text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3 w-full sm:w-auto">
              Faça uma Doação
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
} 