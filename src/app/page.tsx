import { Button } from "@/components/ui/button"
import Image from "next/image"
import { PartnersGrid } from "@/components/sections/partners-grid"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100">
        {/* Background decorativo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FF6B00]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#FF6B00]/8 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 px-4 md:px-8 lg:px-16 max-w-screen-2xl mx-auto w-full py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Conteúdo principal */}
            <div className="space-y-8 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-[#FF6B00] font-medium text-sm shadow-sm">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                Transformando vidas desde 2020
              </div>

              {/* Título principal */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-gray-900">Repense</span>
                  <br />
                  <span className="text-[#FF6B00] relative">
                    o futuro
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6B00] to-orange-400 rounded-full"></div>
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                  Transformamos vidas através de projetos sociais que promovem 
                  <span className="text-[#FF6B00] font-semibold"> educação</span>, 
                  <span className="text-[#FF6B00] font-semibold"> sustentabilidade</span> e 
                  <span className="text-[#FF6B00] font-semibold"> desenvolvimento comunitário</span>.
                </p>
              </div>

              {/* Estatísticas rápidas */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 py-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#FF6B00]">500+</div>
                  <div className="text-sm text-gray-600">Vidas impactadas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#FF6B00]">3</div>
                  <div className="text-sm text-gray-600">Projetos ativos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#FF6B00]">5+</div>
                  <div className="text-sm text-gray-600">Parceiros</div>
                </div>
              </div>

              {/* Botões de ação */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/projetos">
                  <Button 
                    size="lg"
                    className="bg-[#FF6B00] hover:bg-[#E65A00] text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 min-w-[220px]"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Nossos projetos
                  </Button>
                </Link>
                <Link href="/sobre">
                  <Button 
                    variant="outline"
                    size="lg"
                    className="border-2 border-[#FF6B00] text-[#FF6B00] hover:bg-[#FF6B00] hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 min-w-[220px]"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Saiba mais
                  </Button>
                </Link>
              </div>

              {/* Call to action secundário */}
              <div className="pt-4">
                <p className="text-gray-600 mb-4">Quer fazer parte da mudança?</p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                  <Link href="/voluntarios" className="inline-flex items-center text-[#FF6B00] hover:text-[#E65A00] font-medium transition-colors">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Seja voluntário
                  </Link>
                  <Link href="/contato" className="inline-flex items-center text-[#FF6B00] hover:text-[#E65A00] font-medium transition-colors">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                    Fazer doação
                  </Link>
                </div>
              </div>
            </div>

            {/* Área visual */}
            <div className="relative">
              {/* Imagem principal */}
              <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/reforco-escolar-comunitario/100.png"
                  alt="Crianças participando de atividades educacionais da Repense"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Overlay com informação */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <h3 className="font-bold text-gray-900 mb-1">Reforço Escolar Comunitário</h3>
                    <p className="text-sm text-gray-600">Educação transformadora para crianças e adolescentes</p>
                  </div>
                </div>
              </div>

              {/* Cards flutuantes */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-lg animate-pulse">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Impacto Real</div>
                    <div className="text-sm text-gray-600">Resultados mensuráveis</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-lg animate-pulse delay-1000">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Inovação</div>
                    <div className="text-sm text-gray-600">Tecnologia social</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#FF6B00] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#FF6B00] rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative w-full py-20 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
        {/* Background decorativo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-64 h-64 bg-[#FF6B00]/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 px-4 md:px-8 lg:px-16 max-w-screen-2xl mx-auto">
          {/* Cabeçalho da seção */}
          <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-[#FF6B00] font-medium text-sm shadow-sm mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Nossa Missão
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900">
              Transformação através da
              <span className="text-[#FF6B00] relative block mt-2">
                inovação social
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#FF6B00] to-orange-400 rounded-full"></div>
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Promovemos transformação social por meio da pesquisa tecnológica e da educação, desenvolvendo
              ferramentas e soluções inovadoras que atendam às reais necessidades da comunidade onde atuamos.
            </p>
          </div>

          {/* Cards dos pilares */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Pesquisa & Tecnologia */}
            <div className="group relative">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 h-full">
                {/* Ícone com gradiente */}
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  {/* Elemento decorativo */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#FF6B00] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-900">
                  Pesquisa & Tecnologia
                </h3>
                
                <p className="text-gray-600 text-center leading-relaxed text-lg">
                  Desenvolvemos pesquisas aplicadas e soluções tecnológicas inovadoras para resolver problemas
                  sociais reais da nossa comunidade.
                </p>

                {/* Indicador de progresso */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-center text-sm text-gray-500">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-[#FF6B00] rounded-full"></div>
                      <div className="w-2 h-2 bg-[#FF6B00]/60 rounded-full"></div>
                      <div className="w-2 h-2 bg-[#FF6B00]/30 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Educação & Capacitação */}
            <div className="group relative">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 h-full">
                {/* Ícone com gradiente */}
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                    </svg>
                  </div>
                  {/* Elemento decorativo */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#FF6B00] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-900">
                  Educação & Capacitação
                </h3>
                
                <p className="text-gray-600 text-center leading-relaxed text-lg">
                  Promovemos educação tecnológica e capacitação profissional para empoderar comunidades através do
                  conhecimento transformador.
                </p>

                {/* Indicador de progresso */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-center text-sm text-gray-500">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-[#FF6B00] rounded-full"></div>
                      <div className="w-2 h-2 bg-[#FF6B00] rounded-full"></div>
                      <div className="w-2 h-2 bg-[#FF6B00]/60 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Inovação Social */}
            <div className="group relative">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 h-full">
                {/* Ícone com gradiente */}
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  {/* Elemento decorativo */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#FF6B00] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-900">
                  Inovação Social
                </h3>
                
                <p className="text-gray-600 text-center leading-relaxed text-lg">
                  Criamos ferramentas e metodologias que geram impacto social positivo e transformação
                  sustentável em nossa comunidade.
                </p>

                {/* Indicador de progresso */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-center text-sm text-gray-500">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-[#FF6B00] rounded-full"></div>
                      <div className="w-2 h-2 bg-[#FF6B00] rounded-full"></div>
                      <div className="w-2 h-2 bg-[#FF6B00] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Seção de impacto */}
          <div className="mt-20 md:mt-24">
            <div className="bg-gradient-to-r from-[#FF6B00] to-orange-400 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Nosso Impacto em Números
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">4+</div>
                  <div className="text-orange-100">Anos de atuação</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
                  <div className="text-orange-100">Vidas transformadas</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">3</div>
                  <div className="text-orange-100">Projetos ativos</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">5+</div>
                  <div className="text-orange-100">Parceiros estratégicos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-orange-50">
        <div className="px-4 md:px-8 lg:px-16 max-w-screen-2xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-1.5 bg-orange-100 rounded-full text-[#FF6B00] font-medium text-sm mb-4">
              Parcerias
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-[#FF6B00]">
              Nossos Parceiros
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Empresas e organizações que acreditam no nosso trabalho e nos ajudam a transformar vidas através de parcerias estratégicas.
            </p>
          </div>
          <PartnersGrid />
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative w-full py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-orange-50 overflow-hidden">
        {/* Background decorativo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -right-32 -top-32 w-96 h-96 bg-[#FF6B00]/5 rounded-full blur-3xl"></div>
          <div className="absolute -left-32 -bottom-32 w-80 h-80 bg-orange-300/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#FF6B00]/3 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 px-4 md:px-8 lg:px-16 max-w-screen-2xl mx-auto">
          {/* Cabeçalho da seção */}
          <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-[#FF6B00] font-medium text-sm shadow-sm mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Nossos Projetos
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900">
              Transformando vidas através da
              <span className="text-[#FF6B00] relative block mt-2">
                tecnologia social
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-[#FF6B00] to-orange-400 rounded-full"></div>
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Conheça nossas iniciativas que estão gerando impacto social positivo e transformando nossa comunidade
            </p>
          </div>

          {/* Grid de projetos */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
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
                    Apoio educacional gratuito para crianças e adolescentes, combinando tecnologia e aprendizado para um desenvolvimento integral e transformador.
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
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Conecteai</h3>
                      <div className="flex items-center text-xs text-gray-500 mb-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                        Ativo
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Agência de emprego solidária que utiliza IA para conectar pessoas a oportunidades de trabalho digno.
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
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Laboratório de Inovação</h3>
                      <div className="flex items-center text-xs text-gray-500 mb-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        Em desenvolvimento
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Desenvolvimento de soluções tecnológicas inovadoras para resolver desafios sociais da comunidade.
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

          {/* Call to action */}
          <div className="text-center mt-16 md:mt-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Quer conhecer todos os nossos projetos?
              </h3>
              <p className="text-gray-600 mb-8 text-lg">
                Descubra como estamos transformando vidas através da tecnologia e inovação social
              </p>
              <Link href="/projetos">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[#FF6B00] to-orange-400 hover:from-[#E65A00] hover:to-orange-500 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Ver todos os projetos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA Section */}
      <section className="relative w-full py-20 md:py-32 bg-gradient-to-br from-[#FF6B00] via-orange-500 to-orange-600 overflow-hidden">
        {/* Background decorativo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
        </div>

        {/* Padrão geométrico */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-4 h-4 bg-white rounded-full"></div>
          <div className="absolute top-40 right-32 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute bottom-32 left-40 w-3 h-3 bg-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-white rounded-full"></div>
        </div>

        <div className="relative z-10 container mx-auto max-w-6xl px-4 md:px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Conteúdo principal */}
            <div className="text-center lg:text-left text-white">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium text-sm shadow-sm mb-6">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                Junte-se a nós
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Faça parte da
                <span className="block relative">
                  mudança
                  <div className="absolute -bottom-2 left-0 lg:left-0 right-0 h-1 bg-white/30 rounded-full"></div>
                </span>
              </h2>

              <p className="text-xl md:text-2xl text-orange-100 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Sua contribuição pode transformar vidas. Junte-se a nós nessa missão de construir um futuro melhor para todos.
              </p>

              {/* Estatísticas de impacto */}
              <div className="grid grid-cols-3 gap-6 mb-10 max-w-md mx-auto lg:mx-0">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">500+</div>
                  <div className="text-sm text-orange-200">Vidas transformadas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">50+</div>
                  <div className="text-sm text-orange-200">Voluntários ativos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">5+</div>
                  <div className="text-sm text-orange-200">Parceiros</div>
                </div>
              </div>

              {/* Botões de ação */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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

              {/* Links adicionais */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-orange-200 mb-4">Outras formas de contribuir:</p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                  <Link href="/contato" className="inline-flex items-center text-white hover:text-orange-200 font-medium transition-colors">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h2V4a2 2 0 012-2h4a2 2 0 012 2v4z" />
                    </svg>
                    Falar conosco
                  </Link>
                  <Link href="/sobre" className="inline-flex items-center text-white hover:text-orange-200 font-medium transition-colors">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Conhecer nossa história
                  </Link>
                </div>
              </div>
            </div>

            {/* Área visual */}
            <div className="relative">
              {/* Cards de testemunhos/impacto */}
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-2">Educação Transformadora</h4>
                      <p className="text-orange-100 text-sm">
                        &ldquo;O reforço escolar mudou completamente o futuro dos meus filhos. Agora eles têm acesso a tecnologia e um ensino de qualidade.&rdquo;
                      </p>
                      <div className="text-orange-200 text-xs mt-2">- Maria, mãe de aluno</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-2">Oportunidades de Trabalho</h4>
                      <p className="text-orange-100 text-sm">
                        &ldquo;Através do Conecteai consegui meu primeiro emprego formal. A plataforma conectou minhas habilidades com as necessidades do mercado.&rdquo;
                      </p>
                      <div className="text-orange-200 text-xs mt-2">- João, beneficiário</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-2">Impacto Comunitário</h4>
                      <p className="text-orange-100 text-sm">
                        &ldquo;Ser voluntário na Repense me permitiu contribuir diretamente para a transformação da nossa comunidade.&rdquo;
                      </p>
                      <div className="text-orange-200 text-xs mt-2">- Ana, voluntária</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
