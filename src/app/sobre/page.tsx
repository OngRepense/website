import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function About() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-orange-50">
      {/* Hero Section */}
      <section className="w-full pt-32 pb-16">
        <div className="text-center">
          <h1 className="text-4xl lg:text-[2.75rem] font-bold leading-tight text-[#FF6B00]">
            Sobre a Repense
          </h1>
        </div>
      </section>

      {/* About Content Section */}
      <section className="w-full bg-white rounded-t-3xl">
        <div className="max-w-4xl mx-auto px-4 py-16">
          {/* Mission */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Nossa Missão</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              A Repense tem como missão promover transformação social por meio da pesquisa tecnológica e da educação, 
              desenvolvendo ferramentas e soluções inovadoras que atendam às reais necessidades da comunidade onde atuamos.
            </p>
          </div>

          {/* Vision */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Nossa Visão</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ser referência em inovação social, conectando pessoas e tecnologia para criar um impacto positivo 
              e duradouro na sociedade, promovendo educação, inclusão digital e desenvolvimento comunitário.
            </p>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Nossos Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-[#FF6B00]">Inovação Social</h3>
                <p className="text-gray-600">
                  Buscamos constantemente soluções criativas e tecnológicas para desafios sociais, 
                  sempre focando no impacto positivo para a comunidade.
                </p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-[#FF6B00]">Educação Transformadora</h3>
                <p className="text-gray-600">
                  Acreditamos no poder da educação como ferramenta de transformação social e 
                  desenvolvimento pessoal.
                </p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-[#FF6B00]">Colaboração</h3>
                <p className="text-gray-600">
                  Valorizamos parcerias e trabalho em equipe, unindo forças para maximizar 
                  nosso impacto social.
                </p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-[#FF6B00]">Compromisso Social</h3>
                <p className="text-gray-600">
                  Mantemos um compromisso inabalável com o desenvolvimento e bem-estar 
                  da nossa comunidade.
                </p>
              </div>
            </div>
          </div>

          {/* History */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Nossa História</h2>
            <div className="relative">
              <div className="aspect-video relative rounded-lg overflow-hidden mb-8">
                <Image
                  src="/images/hero-kids.jpg"
                  alt="História da Repense"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                A Repense nasceu da visão de unir tecnologia e impacto social. Desde nossa fundação, 
                temos trabalhado incansavelmente para desenvolver projetos que transformam vidas através 
                da educação e da inovação tecnológica.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ao longo dos anos, expandimos nossa atuação e hoje contamos com diversos projetos que 
                beneficiam centenas de pessoas em nossa comunidade, sempre mantendo nosso compromisso 
                com a excelência e o impacto social positivo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full bg-white py-16 border-t border-gray-100">
        <div className="w-full text-center">
          <h2 className="text-4xl font-bold mb-6">
            Faça Parte dessa História
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto px-4">
            Junte-se a nós nessa missão de transformar vidas através da educação e tecnologia.
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