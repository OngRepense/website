import { Button } from "@/components/ui/button"
import Image from "next/image"
import { PartnersGrid } from "@/components/sections/partners-grid"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full pt-32 pb-16 bg-white">
        <div className="px-4 md:px-8 lg:px-16 max-w-screen-2xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl lg:text-[2.75rem] font-bold leading-tight">
                Repense o futuro
              </h1>
              <p className="text-lg text-gray-600">
                Transformamos vidas através de projetos sociais que promovem educação, sustentabilidade e desenvolvimento comunitário.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="outline" className="hidden md:flex border-[#FF6B00] text-[#FF6B00] hover:bg-[#FF6B00] hover:text-white">
                  Conheça nossos projetos
                </Button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/hero-kids.jpg"
                  alt="Crianças participando de atividades educacionais da Repense"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-20 bg-white">
        <div className="px-4 md:px-8 lg:px-16 max-w-screen-2xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Nossa missão
            </h2>
            <p className="text-lg text-gray-600 mb-16">
              Promover transformação social por meio da pesquisa tecnológica e da educação, desenvolvendo
              ferramentas e soluções inovadoras que atendam às reais necessidades da comunidade onde atuamos.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Pesquisa & Tecnologia */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Pesquisa & Tecnologia
                </h3>
                <p className="text-gray-600">
                  Desenvolvemos pesquisas aplicadas e soluções tecnológicas inovadoras para resolver problemas
                  sociais reais.
                </p>
              </div>

              {/* Educação & Capacitação */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Educação & Capacitação
                </h3>
                <p className="text-gray-600">
                  Promovemos educação tecnológica e capacitação profissional para empoderar comunidades através do
                  conhecimento.
                </p>
              </div>

              {/* Inovação Social */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Inovação Social
                </h3>
                <p className="text-gray-600">
                  Criamos ferramentas e metodologias que geram impacto social positivo e transformação
                  sustentável.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <PartnersGrid />

      {/* Projects Section */}
      <section className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-screen-2xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Nossos Projetos
            </h2>
            <p className="text-gray-600">
              Conheça algumas das iniciativas que desenvolvemos para promover educação e tecnologia em nossa comunidade
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Reforço Escolar */}
            <Card className="group hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <CardHeader>
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <CardTitle className="text-2xl mb-2">Reforço Escolar Comunitário</CardTitle>
                <CardDescription className="text-lg">
                  Apoio educacional com uso de tecnologia
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Um projeto 100% gratuito que oferece acompanhamento educacional para crianças e adolescentes em situação de vulnerabilidade. Mais do que reforço nos estudos, promovemos um espaço lúdico e acolhedor, onde os alunos aprendem, interagem com colegas e se desenvolvem de forma integral.
                </p>
                <div className="mt-8 flex items-center text-sm text-green-600">
                  <span className="font-medium">Saiba mais</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </CardContent>
            </Card>

            {/* Conecteai */}
            <Card className="group hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <CardTitle className="text-2xl mb-2">Conecteai</CardTitle>
                <CardDescription className="text-lg">
                  Agência de Empregos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Conecteai é a nossa agência de emprego solidária, criada com muito carinho e amor para fomentar o trabalho digno e a valorização das pessoas da nossa comunidade. Acreditamos que o emprego transforma vidas, e por isso utilizamos a tecnologia como aliada para ampliar o alcance do bem. Desenvolvemos ferramentas gratuitas que aproximam quem está buscando uma oportunidade de quem está oferecendo — facilitando conexões reais que geram impacto social positivo.
                </p>
                <div className="mt-8 flex items-center text-sm text-purple-600">
                  <span className="font-medium">Saiba mais</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-[#FF6B00] hover:bg-[#E65A00] text-white">
              Ver todos os projetos
            </Button>
          </div>
        </div>
      </section>

      {/* Join Us CTA Section */}
      <section className="w-full bg-white py-24 border-t border-gray-100">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Faça parte da mudança
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Sua contribuição pode transformar vidas. Junte-se a nós nessa missão de construir um futuro melhor para todos.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-[#FF6B00] hover:bg-[#E65A00] text-white min-w-[200px] h-12 text-lg flex items-center justify-center gap-2"
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
              className="border-[#FF6B00] text-[#FF6B00] hover:bg-[#FF6B00] hover:text-white min-w-[200px] h-12 text-lg"
            >
              Ser voluntário
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
