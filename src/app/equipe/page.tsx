'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"

interface TeamMember {
  name: string
  role: string
  description: string
  image: string
}

function Modal({ isOpen, onClose, member }: { 
  isOpen: boolean
  onClose: () => void
  member: TeamMember 
}) {
  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-lg w-full p-6"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <p className="text-[#FF6B00] font-medium text-lg mb-4">{member.role}</p>
        <p className="text-gray-600 text-base leading-relaxed">{member.description}</p>
      </div>
    </div>
  )
}

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  const teamMembers = [
    {
      name: "Dmeval Neto",
      role: "Fundador e CEO",
      description: "Apaixonado por transformação social através da tecnologia e educação.",
      image: "/images/foto-fundador.png"
    },
    {
      name: "Juliana Santos",
      role: "Vice-presidente",
      description: "Formada em Gestão Pública e com ampla experiência em projetos sociais, Juliana une sensibilidade e estratégia para transformar políticas públicas em oportunidades reais para a comunidade. Na Repense, é força que guia, conecta e inspira.",
      image: "/images/perfil-juliana.png"
    },
    {
      name: "Regina Mascarenhas",
      role: "Coordenadora Pedagógica",
      description: "Educadora por essência, Regina acredita que a transformação social começa pela educação. Na Repense, ela cuida do saber com afeto e propósito, abrindo caminhos para o futuro.",
      image: "/images/perfil-regina.png"
    },
    {
      name: "Monica Santos",
      role: "Membro do Conselho Fiscal",
      description: "Com olhar atento e compromisso com a transparência, Monica assegura que cada recurso seja bem aplicado em prol do impacto social. Sua atuação no Conselho Fiscal garante a integridade e a sustentabilidade da Repense.",
      image: "/images/perfil-monica.jpg"
    },
    {
      name: "Sini Chaves",
      role: "Marketing",
      description: "Criativa e apaixonada por causas sociais, Sini transforma propósito em mensagem. À frente do marketing da Repense, ela leva nossa missão ainda mais longe, conectando corações e multiplicando impactos.",
      image: "/images/perfil-sini.png"
    },
    {
      name: "Robesta Santos",
      role: "Membro do Conselho Fiscal",
      description: "Com seriedade e compromisso com a responsabilidade social, Robesta atua no Conselho Fiscal garantindo que cada ação da Repense esteja alinhada com nossos valores de ética e transparência.",
      image: "/images/perfil-roberta.png"
    },
    {
      name: "Elane Santos",
      role: "Secretária",
      description: "Organizada, dedicada e sempre pronta para colaborar, Elane é o elo que mantém os detalhes em ordem e o coração da Repense pulsando com eficiência e carinho no dia a dia.",
      image: "/images/perfil-elaine.png"
    },
    {
      name: "Ricardo Chaves",
      role: "Mobilizador(a) Social",
      description: "Entusiasta da transformação coletiva, Ricardo é a ponte entre a Repense e a comunidade. Com escuta ativa e paixão por servir, ele mobiliza pessoas, ideias e ações que geram impacto real onde mais importa: no cotidiano das famílias.",
      image: "/images/perfil-ricardo.png"
    },
    
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-orange-50">
      {/* Hero Section */}
      <section className="w-full pt-32 pb-16">
        <div className="text-center">
          <h1 className="text-4xl lg:text-[2.75rem] font-bold leading-tight text-[#FF6B00]">
            Nossa Equipe
          </h1>
        </div>
      </section>

      {/* Team Content Section */}
      <section className="w-full bg-white rounded-t-3xl">
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Team Members */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Time</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center bg-white rounded-xl p-6 hover:bg-orange-50 transition-colors duration-300 shadow-sm"
                >
                  <div className="w-48 h-48 relative rounded-full overflow-hidden mb-6 border-4 border-orange-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-[#FF6B00] font-medium mb-4">{member.role}</p>
                    <Button 
                      variant="outline"
                      className="border-[#FF6B00] text-[#FF6B00] hover:bg-[#FF6B00] hover:text-white"
                      onClick={() => setSelectedMember(member)}
                    >
                      Sobre
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Volunteers Section */}
          <div className="bg-orange-50 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Voluntários</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Nossa equipe conta com o apoio fundamental de voluntários dedicados que contribuem 
              com seu tempo e talento para fazer a diferença em nossa comunidade.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-lg">
                <span className="text-4xl font-bold text-[#FF6B00]">50+</span>
                <span className="text-gray-600">Voluntários<br/>Ativos</span>
              </div>
              <div className="w-px h-12 bg-gray-300 mx-8"></div>
              <div className="flex items-center gap-2 text-lg">
                <span className="text-4xl font-bold text-[#FF6B00]">1000+</span>
                <span className="text-gray-600">Horas de<br/>Voluntariado</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full bg-white py-16 border-t border-gray-100">
        <div className="w-full text-center">
          <h2 className="text-4xl font-bold mb-6">
            Faça Parte do Nosso Time
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto px-4">
            Junte-se a nós e faça parte de uma equipe comprometida com a transformação social.
          </p>
          <div className="flex flex-wrap justify-center gap-4 px-4">
            <Button 
              size="lg" 
              className="bg-[#FF6B00] hover:bg-[#E65A00] text-white min-w-[200px] h-12 text-lg"
            >
              Ver Vagas
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-[#FF6B00] text-[#FF6B00] hover:bg-[#FF6B00] hover:text-white min-w-[200px] h-12 text-lg"
            >
              Ser Voluntário
            </Button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedMember && (
        <Modal
          isOpen={!!selectedMember}
          onClose={() => setSelectedMember(null)}
          member={selectedMember}
        />
      )}
    </div>
  )
} 