import { Button } from "@/components/ui/button"
import Image from "next/image"
import { PartnersGrid } from "@/components/sections/partners-grid"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full pt-24 md:pt-32 pb-12 md:pb-16 bg-orange-50">
        <div className="px-4 md:px-8 lg:px-16 max-w-screen-2xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 space-y-4 md:space-y-6 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight text-[#FF6B00]">
                Repense o futuro
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Transformamos vidas através de projetos sociais que promovem educação, sustentabilidade e desenvolvimento comunitário.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                <Link href="/projetos">
                  <Button 
                    size="lg"
                    className="bg-[#FF6B00] hover:bg-[#E65A00] text-white min-w-[200px] h-12 text-base md:text-lg"
                  >
                    Conheça nossos projetos
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex-1 w-full lg:w-auto">
              <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/hero-kids.jpg"
                  alt="Crianças participando de atividades educacionais da Repense"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="px-4 md:px-8 lg:px-16 max-w-screen-2xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-[#FF6B00]">
              Nossa Missão
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-12 md:mb-16 leading-relaxed">
              Promover transformação social por meio da pesquisa tecnológica e da educação, desenvolvendo
              ferramentas e soluções inovadoras que atendam às reais necessidades da comunidade onde atuamos.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Pesquisa & Tecnologia */}
              <Card className="bg-white hover:bg-orange-50/50 transition-colors duration-300 border-none shadow-md">
                <CardHeader>
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <svg className="w-10 h-10 text-[#FF6B00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <CardTitle className="text-2xl mb-4 text-center">
                    Pesquisa & Tecnologia
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Desenvolvemos pesquisas aplicadas e soluções tecnológicas inovadoras para resolver problemas
                    sociais reais.
                  </p>
                </CardContent>
              </Card>

              {/* Educação & Capacitação */}
              <Card className="bg-white hover:bg-orange-50/50 transition-colors duration-300 border-none shadow-md">
                <CardHeader>
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <svg className="w-10 h-10 text-[#FF6B00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                    </svg>
                  </div>
                  <CardTitle className="text-2xl mb-4 text-center">
                    Educação & Capacitação
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Promovemos educação tecnológica e capacitação profissional para empoderar comunidades através do
                    conhecimento.
                  </p>
                </CardContent>
              </Card>

              {/* Inovação Social */}
              <Card className="bg-white hover:bg-orange-50/50 transition-colors duration-300 border-none shadow-md">
                <CardHeader>
                  <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <svg className="w-10 h-10 text-[#FF6B00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <CardTitle className="text-2xl mb-4 text-center">
                    Inovação Social
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Criamos ferramentas e metodologias que geram impacto social positivo e transformação
                    sustentável.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="w-full py-16 md:py-24 bg-orange-50">
        <div className="px-4 md:px-8 lg:px-16 max-w-screen-2xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-[#FF6B00]">
              Nossos Parceiros
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Empresas e organizações que acreditam no nosso trabalho e nos ajudam a transformar vidas.
            </p>
          </div>
          <PartnersGrid />
        </div>
      </section>

      {/* Projects Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="px-4 md:px-8 lg:px-16 max-w-screen-2xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-[#FF6B00]">
              Nossos Projetos
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Conheça algumas das iniciativas que desenvolvemos para promover educação e tecnologia em nossa comunidade
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Reforço Escolar */}
            <Card className="bg-white hover:bg-orange-50/50 transition-colors duration-300 border-none shadow-md overflow-hidden">
              <CardHeader className="px-6 md:px-8 pt-6 md:pt-8">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <CardTitle className="text-2xl mb-3">Reforço Escolar Comunitário</CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Apoio educacional com uso de tecnologia
                </CardDescription>
              </CardHeader>
              <CardContent className="px-6 md:px-8 pb-6 md:pb-8">
                <p className="text-gray-600 leading-relaxed mb-8">
                  Um projeto 100% gratuito que oferece acompanhamento educacional para crianças e adolescentes em situação de vulnerabilidade. Mais do que reforço nos estudos, promovemos um espaço lúdico e acolhedor, onde os alunos aprendem, interagem com colegas e se desenvolvem de forma integral.
                </p>
                <Button 
                  className="bg-[#FF6B00] hover:bg-[#E65A00] text-white"
                >
                  Saiba mais
                </Button>
              </CardContent>
            </Card>

            {/* Conecteai */}
            <Card className="bg-white hover:bg-orange-50/50 transition-colors duration-300 border-none shadow-md overflow-hidden">
              <CardHeader className="px-6 md:px-8 pt-6 md:pt-8">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <CardTitle className="text-2xl mb-3">Conecteai</CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Agência de Empregos
                </CardDescription>
              </CardHeader>
              <CardContent className="px-6 md:px-8 pb-6 md:pb-8">
                <p className="text-gray-600 leading-relaxed mb-8">
                  Conecteai é a nossa agência de emprego solidária, criada com muito carinho e amor para fomentar o trabalho digno e a valorização das pessoas da nossa comunidade. Acreditamos que o emprego transforma vidas, e por isso utilizamos a tecnologia como aliada para ampliar o alcance do bem.
                </p>
                <Button 
                  className="bg-[#FF6B00] hover:bg-[#E65A00] text-white"
                >
                  Saiba mais
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12 md:mt-16">
            <Button 
              size="lg" 
              className="bg-[#FF6B00] hover:bg-[#E65A00] text-white min-w-[200px] h-12 text-base md:text-lg"
            >
              Ver todos os projetos
            </Button>
          </div>
        </div>
      </section>

      {/* Join Us CTA Section */}
      <section className="w-full py-16 md:py-24 bg-orange-50">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-[#FF6B00]">
            Faça parte da mudança
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
            Sua contribuição pode transformar vidas. Junte-se a nós nessa missão de construir um futuro melhor para todos.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
            <Button 
              size="lg" 
              className="w-full md:w-auto bg-[#FF6B00] hover:bg-[#E65A00] text-white min-w-[200px] h-12 text-base md:text-lg flex items-center justify-center gap-2"
            >
              <svg 
                className="w-5 h-5" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              Fazer doação
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full md:w-auto border-[#FF6B00] text-[#FF6B00] hover:bg-[#FF6B00] hover:text-white min-w-[200px] h-12 text-base md:text-lg"
            >
              Ser voluntário
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
