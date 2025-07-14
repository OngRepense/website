import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Projects() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-orange-50">
      {/* Hero Section */}
      <section className="w-full pt-32 pb-16">
        <div className="text-center">
          <h1 className="text-4xl lg:text-[2.75rem] font-bold leading-tight text-[#FF6B00]">
            Nossos Projetos
          </h1>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="w-full bg-white rounded-t-3xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Reforço Escolar */}
          <Card className="rounded-none border-0 border-b border-r border-gray-100 hover:bg-orange-50 transition-colors duration-300">
            <CardHeader className="px-8 lg:px-12">
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
            <CardContent className="px-8 lg:px-12">
              <p className="text-gray-600 leading-relaxed">
                Um projeto 100% gratuito que oferece acompanhamento educacional para crianças e adolescentes em situação de vulnerabilidade. Mais do que reforço nos estudos, promovemos um espaço lúdico e acolhedor, onde os alunos aprendem, interagem com colegas e se desenvolvem de forma integral.
              </p>
              <div className="mt-8">
                <Button className="bg-[#FF6B00] hover:bg-[#E65A00] text-white">
                  Saiba mais
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Conecteai */}
          <Card className="rounded-none border-0 border-b border-gray-100 hover:bg-orange-50 transition-colors duration-300">
            <CardHeader className="px-8 lg:px-12">
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
            <CardContent className="px-8 lg:px-12">
              <p className="text-gray-600 leading-relaxed">
                Conecteai é a nossa agência de emprego solidária, criada com muito carinho e amor para fomentar o trabalho digno e a valorização das pessoas da nossa comunidade. Acreditamos que o emprego transforma vidas, e por isso utilizamos a tecnologia como aliada para ampliar o alcance do bem.
              </p>
              <div className="mt-8">
                <Button className="bg-[#FF6B00] hover:bg-[#E65A00] text-white">
                  Saiba mais
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Laboratório de Inovação */}
          <Card className="rounded-none border-0 border-r border-gray-100 hover:bg-orange-50 transition-colors duration-300">
            <CardHeader className="px-8 lg:px-12">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <CardTitle className="text-2xl mb-2">Laboratório de Inovação</CardTitle>
              <CardDescription className="text-lg">
                Pesquisa e desenvolvimento de soluções sociais
              </CardDescription>
            </CardHeader>
            <CardContent className="px-8 lg:px-12">
              <p className="text-gray-600 leading-relaxed">
                Nosso laboratório de inovação social desenvolve pesquisas e soluções tecnológicas para resolver problemas reais da comunidade. Trabalhamos em parceria com universidades e empresas para criar ferramentas que geram impacto social positivo.
              </p>
              <div className="mt-8">
                <Button className="bg-[#FF6B00] hover:bg-[#E65A00] text-white">
                  Saiba mais
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Oficinas de Tecnologia */}
          <Card className="rounded-none border-0 hover:bg-orange-50 transition-colors duration-300">
            <CardHeader className="px-8 lg:px-12">
              <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <CardTitle className="text-2xl mb-2">Oficinas de Tecnologia</CardTitle>
              <CardDescription className="text-lg">
                Capacitação em tecnologia e programação
              </CardDescription>
            </CardHeader>
            <CardContent className="px-8 lg:px-12">
              <p className="text-gray-600 leading-relaxed">
                Oferecemos oficinas gratuitas de tecnologia e programação para jovens da comunidade. Os participantes aprendem habilidades práticas e têm a oportunidade de desenvolver seus próprios projetos tecnológicos.
              </p>
              <div className="mt-8">
                <Button className="bg-[#FF6B00] hover:bg-[#E65A00] text-white">
                  Saiba mais
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full bg-white py-16 border-t border-gray-100">
        <div className="w-full text-center">
          <h2 className="text-4xl font-bold mb-6">
            Quer fazer parte dessa transformação?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto px-4">
            Junte-se a nós nessa missão de construir um futuro melhor através da educação e tecnologia.
          </p>
          <div className="flex flex-wrap justify-center gap-4 px-4">
            <Button 
              size="lg" 
              className="bg-[#FF6B00] hover:bg-[#E65A00] text-white min-w-[200px] h-12 text-lg"
            >
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