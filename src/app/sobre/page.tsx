import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function About() {
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Nossa História
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              <span className="text-gray-900">Sobre a</span>
              <span className="text-[#FF6B00] relative block mt-2">
                Repense
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#FF6B00] to-orange-400 rounded-full"></div>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Transformando vidas através da inovação social, educação e tecnologia desde 2020
            </p>

            {/* Estatísticas rápidas */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FF6B00]">4+</div>
                <div className="text-sm text-gray-600">Anos de atuação</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FF6B00]">500+</div>
                <div className="text-sm text-gray-600">Vidas impactadas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FF6B00]">3</div>
                <div className="text-sm text-gray-600">Projetos ativos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values Section */}
      <section className="relative w-full py-20 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
        {/* Background decorativo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-64 h-64 bg-[#FF6B00]/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 px-4 md:px-8 lg:px-16 max-w-screen-2xl mx-auto">
          {/* Mission */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-[#FF6B00] font-medium text-sm shadow-sm mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Nossa Missão
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              Transformação através da
              <span className="text-[#FF6B00] relative block mt-2">
                inovação social
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Promover transformação social por meio da pesquisa tecnológica e da educação, 
              desenvolvendo ferramentas e soluções inovadoras que atendam às reais necessidades da comunidade onde atuamos.
            </p>
          </div>

          {/* Vision */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-[#FF6B00] font-medium text-sm shadow-sm mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Nossa Visão
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              Referência em
              <span className="text-[#FF6B00] relative block mt-2">
                impacto social
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Ser referência em inovação social, conectando pessoas e tecnologia para criar um impacto positivo 
              e duradouro na sociedade, promovendo educação, inclusão digital e desenvolvimento comunitário.
            </p>
          </div>

          {/* Values */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-[#FF6B00] font-medium text-sm shadow-sm mb-6">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Nossos Valores
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                O que nos
                <span className="text-[#FF6B00] relative block mt-2">
                  move
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <div className="group">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Inovação Social</h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    Buscamos constantemente soluções criativas e tecnológicas para desafios sociais, 
                    sempre focando no impacto positivo para a comunidade.
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Educação Transformadora</h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    Acreditamos no poder da educação como ferramenta de transformação social e 
                    desenvolvimento pessoal.
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Colaboração</h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    Valorizamos parcerias e trabalho em equipe, unindo forças para maximizar 
                    nosso impacto social.
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Compromisso Social</h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    Mantemos um compromisso inabalável com o desenvolvimento e bem-estar 
                    da nossa comunidade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="relative w-full py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-orange-50 overflow-hidden">
        <div className="relative z-10 px-4 md:px-8 lg:px-16 max-w-screen-2xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Conteúdo */}
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-[#FF6B00] font-medium text-sm shadow-sm mb-6">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Nossa Jornada
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                Uma história de
                <span className="text-[#FF6B00] relative block mt-2">
                  transformação
                </span>
              </h2>
              
              <div className="space-y-6">
                <p className="text-xl text-gray-600 leading-relaxed">
                  A Repense nasceu da visão de unir tecnologia e impacto social. Desde nossa fundação em 2020, 
                  temos trabalhado incansavelmente para desenvolver projetos que transformam vidas através 
                  da educação e da inovação tecnológica.
                </p>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Ao longo dos anos, expandimos nossa atuação e hoje contamos com diversos projetos que 
                  beneficiam centenas de pessoas em nossa comunidade, sempre mantendo nosso compromisso 
                  com a excelência e o impacto social positivo.
                </p>
              </div>

              {/* Timeline */}
              <div className="mt-12 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#FF6B00] rounded-full flex items-center justify-center text-white font-bold">
                    2020
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Fundação da Repense</h4>
                    <p className="text-gray-600">Início das atividades com foco em inovação social</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#FF6B00] rounded-full flex items-center justify-center text-white font-bold">
                    2021
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Primeiro Projeto</h4>
                    <p className="text-gray-600">Lançamento do Reforço Escolar Comunitário</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#FF6B00] rounded-full flex items-center justify-center text-white font-bold">
                    2023
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Expansão</h4>
                    <p className="text-gray-600">Lançamento do Conecteai e parcerias estratégicas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Imagem */}
            <div className="relative">
              <div className="relative w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/reforco-escolar-comunitario/100.png"
                  alt="História da Repense"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                
                {/* Overlay com informação */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <h3 className="font-bold text-gray-900 mb-1">Transformando vidas</h3>
                    <p className="text-sm text-gray-600">Através da educação e tecnologia</p>
                  </div>
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
              Faça parte dessa
              <span className="block relative">
                história
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full"></div>
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-orange-100 mb-12 leading-relaxed">
              Junte-se a nós nessa missão de transformar vidas através da educação e tecnologia.
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
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