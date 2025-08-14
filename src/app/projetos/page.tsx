'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Projects() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100">
        {/* Background decorativo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FF6B00]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#FF6B00]/8 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 px-4 md:px-8 lg:px-16 max-w-screen-2xl mx-auto w-full py-24 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-[#FF6B00] font-medium text-sm shadow-sm mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Nossos Projetos
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              <span className="text-gray-900">Transformando</span>
              <span className="text-[#FF6B00] relative block mt-2">
                vidas
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#FF6B00] to-orange-400 rounded-full"></div>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Conheça nossas iniciativas que estão gerando impacto social positivo através da educação e tecnologia
            </p>

            {/* Estatísticas rápidas */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FF6B00]">3</div>
                <div className="text-sm text-gray-600">Projetos ativos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FF6B00]">500+</div>
                <div className="text-sm text-gray-600">Beneficiários</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FF6B00]">100%</div>
                <div className="text-sm text-gray-600">Gratuito</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="relative w-full py-20 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
        {/* Background decorativo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-64 h-64 bg-[#FF6B00]/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 px-4 md:px-8 lg:px-16 max-w-screen-2xl mx-auto">
          {/* Grid de projetos */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Reforço Escolar - Card destacado */}
            <div className="lg:col-span-2 group">
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full">
                {/* Imagem de fundo */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <Image
                    src="/images/reforco-escolar-comunitario/100.png"
                    alt="Reforço Escolar Comunitário"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Badge do projeto */}
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-[#FF6B00] font-semibold text-sm shadow-lg">
                      Projeto Principal
                    </span>
                  </div>

                  {/* Status */}
                  <div className="absolute top-6 right-6">
                    <div className="flex items-center px-3 py-1 bg-green-500/90 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                      <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                      Ativo
                    </div>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-8 md:p-10">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Reforço Escolar Comunitário</h3>
                      <div className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        200+ crianças atendidas
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    Um projeto 100% gratuito que oferece acompanhamento educacional para crianças e adolescentes em situação de vulnerabilidade. 
                    Mais do que reforço nos estudos, promovemos um espaço lúdico e acolhedor.
                  </p>
                  
                  <Link href="/projetos/reforco-escolar">
                    <Button className="bg-[#FF6B00] hover:bg-[#E65A00] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      <span>Conhecer projeto</span>
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Outros projetos */}
            <div className="space-y-8">
              {/* Conecteai */}
              <div className="group">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 h-full border border-gray-100">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Conecteai</h3>
                        <p className="text-sm text-gray-500 mb-3">Agência de Empregos</p>
                      </div>
                    </div>
                    <div className="flex items-center px-3 py-1 bg-green-100 rounded-full text-green-700 text-xs font-medium">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      Ativo
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Agência de emprego solidária que utiliza IA para conectar pessoas a oportunidades de trabalho digno em nossa comunidade.
                  </p>
                  
                  <Link href="/projetos/conecteai" className="inline-flex items-center text-[#FF6B00] font-medium hover:text-[#E65A00] transition-colors">
                    <span>Saiba mais</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Laboratório de Inovação */}
              <div className="group">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 h-full border border-gray-100">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Laboratório de Inovação</h3>
                        <p className="text-sm text-gray-500 mb-3">Pesquisa e Desenvolvimento</p>
                      </div>
                    </div>
                    <div className="flex items-center px-3 py-1 bg-blue-100 rounded-full text-blue-700 text-xs font-medium">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      Em desenvolvimento
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Desenvolvimento de soluções tecnológicas inovadoras para resolver desafios sociais da nossa comunidade.
                  </p>
                  
                  <Link href="/projetos/laboratorio-inovacao" className="inline-flex items-center text-[#FF6B00] font-medium hover:text-[#E65A00] transition-colors">
                    <span>Saiba mais</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Seção de impacto */}
          <div className="mt-20 md:mt-24">
            <div className="bg-gradient-to-r from-[#FF6B00] to-orange-400 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Impacto dos Nossos Projetos
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">200+</div>
                  <div className="text-orange-100">Crianças no reforço escolar</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">150+</div>
                  <div className="text-orange-100">Pessoas conectadas ao trabalho</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">5</div>
                  <div className="text-orange-100">Soluções em desenvolvimento</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
                  <div className="text-orange-100">Gratuito para a comunidade</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative w-full py-20 md:py-32 bg-gradient-to-br from-[#FF6B00] via-orange-500 to-orange-600 overflow-hidden">
        {/* Background decorativo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 px-4 md:px-8 lg:px-16 max-w-screen-2xl mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
              Quer fazer parte dessa
              <span className="block relative">
                transformação?
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-white/30 rounded-full"></div>
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-orange-100 mb-12 leading-relaxed">
              Junte-se a nós nessa missão de construir um futuro melhor através da educação e tecnologia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-[#FF6B00] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 min-w-[220px]"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                Fazer doação
              </Button>
              
              <Link href="/voluntarios">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-[#FF6B00] px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 min-w-[220px]"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 715.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Ser voluntário
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 