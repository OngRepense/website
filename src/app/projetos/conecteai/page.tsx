'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'
import { useState } from 'react'

// Interface para tipagem do formulário
interface FormData {
  // Dados Pessoais
  nomeCompleto: string
  dataNascimento: string
  cidadeEstado: string
  telefone: string
  email: string
  linkedin: string
  portfolio: string
  
  // Objetivo Profissional
  objetivoCarreira: string
  
  // Formação Acadêmica
  formacoes: Array<{ curso: string; instituicao: string; anoConclusao: string }>
  
  // Experiência Profissional
  experiencias: Array<{ 
    empresa: string
    cargo: string
    periodo: string
    atividades: string 
  }>
  
  // Cursos e Certificações
  certificacoes: Array<{ nome: string; instituicao: string; anoConclusao: string }>
  
  // Habilidades
  habilidadesTecnicas: string
  habilidadesComportamentais: string
  
  // Idiomas
  idiomas: Array<{ idioma: string; nivel: string }>
  
  // Projetos Voluntários
  projetosVoluntarios: Array<{ nome: string; descricao: string }>
  
  // Informações Adicionais
  disponibilidade: string
  cnh: string
}

// Dados das estatísticas
const stats = [
  {
    number: '407.484',
    label: 'Vagas disponíveis'
  },
  {
    number: '177.516',
    label: 'Pessoas empregadas'
  },
  {
    number: '253.953',
    label: 'Currículos cadastrados'
  }
]

// Dados das empresas parceiras
const partners = [
  {
    name: 'Assaí Atacadista',
    logo: '/images/partners/assai.png',
    link: 'https://www.assai.com.br',
    description: 'Apoiando projetos sociais e educacionais'
  },
  {
    name: 'Grupo Parvi',
    logo: '/images/partners/parvi.png',
    link: 'https://www.grupoparvi.com.br',
    description: 'Investindo no futuro através da educação'
  },
  {
    name: 'C&A',
    logo: '/images/partners/cea.png',
    link: 'https://www.cea.com.br',
    description: 'Comprometida com a transformação social'
  }
]

// Dados de como funciona
const howItWorks = [
  {
    icon: '💬',
    number: '1',
    title: 'Acesse nosso WhatsApp',
    description: 'Clique no botão abaixo e inicie uma conversa com nossa Inteligência Artificial no WhatsApp.'
  },
  {
    icon: '📝',
    number: '2',
    title: 'Informe o que procura',
    description: 'Informe sua localização, habilidades, pretenção salarial e o tipo da vaga.'
  },
  {
    icon: '✨',
    number: '3',
    title: 'Receba propostas',
    description: 'Após criar seu perfil, empresas entrarão em contato com você pelo WhatsApp.'
  }
]

// Dados das vantagens
const benefits = [
  {
    icon: '✓',
    title: 'Vagas próximas',
    description: 'Encontre oportunidades perto de você'
  },
  {
    icon: '✓',
    title: 'Todas as áreas',
    description: 'Vagas para diferentes perfis e experiências'
  },
  {
    icon: '✓',
    title: 'Processo simplificado',
    description: 'Candidate-se com apenas alguns cliques'
  },
  {
    icon: '✓',
    title: 'Suporte contínuo',
    description: 'Acompanhamento durante todo o processo'
  }
]

// Dados dos depoimentos
const testimonials = [
  {
    avatar: '/placeholder-avatar-1.png',
    name: 'Maria Silva',
    role: 'Assistente Administrativa',
    text: 'Consegui meu emprego atual através do Conecteai. O processo foi muito rápido e simples!'
  },
  {
    avatar: '/placeholder-avatar-2.png',
    name: 'João Santos',
    role: 'Vendedor',
    text: 'A plataforma me ajudou a encontrar uma oportunidade incrível. Muito satisfeito!'
  },
  {
    avatar: '/placeholder-avatar-3.png',
    name: 'Ana Oliveira',
    role: 'Recepcionista',
    text: 'Excelente iniciativa! Consegui me recolocar no mercado graças ao Conecteai.'
  }
]

// FAQ Data
const faqItems = [
  {
    question: 'Como se cadastrar na plataforma?',
    answer: 'O cadastro é simples e gratuito. Basta clicar no botão "Cadastre-se" e preencher seus dados básicos.'
  },
  {
    question: 'Quanto custa usar o serviço?',
    answer: 'O Conecteai é totalmente gratuito para candidatos.'
  },
  {
    question: 'Como funciona o processo seletivo?',
    answer: 'Após se candidatar, a empresa analisa seu perfil e entra em contato caso você seja selecionado.'
  },
  {
    question: 'Posso me candidatar para várias vagas?',
    answer: 'Sim! Você pode se candidatar para quantas vagas desejar.'
  }
]

export default function Conecteai() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [isFormModalOpen, setIsFormModalOpen] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    // Dados Pessoais
    nomeCompleto: '',
    dataNascimento: '',
    cidadeEstado: '',
    telefone: '',
    email: '',
    linkedin: '',
    portfolio: '',
    
    // Objetivo Profissional
    objetivoCarreira: '',
    
    // Formação Acadêmica
    formacoes: [{ curso: '', instituicao: '', anoConclusao: '' }],
    
    // Experiência Profissional
    experiencias: [{ 
      empresa: '', 
      cargo: '', 
      periodo: '', 
      atividades: '' 
    }],
    
    // Cursos e Certificações
    certificacoes: [{ nome: '', instituicao: '', anoConclusao: '' }],
    
    // Habilidades
    habilidadesTecnicas: '',
    habilidadesComportamentais: '',
    
    // Idiomas
    idiomas: [{ idioma: '', nivel: '' }],
    
    // Projetos Voluntários
    projetosVoluntarios: [{ nome: '', descricao: '' }],
    
    // Informações Adicionais
    disponibilidade: '',
    cnh: ''
  })

  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleArrayChange = (field: keyof FormData, index: number, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: (prev[field] as any[]).map((item: any, i: number) => 
        i === index ? { ...item, ...value } : item
      )
    }))
  }

  const addArrayItem = (field: keyof FormData) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...(prev[field] as any[]), {}]
    }))
  }

  const removeArrayItem = (field: keyof FormData, index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: (prev[field] as any[]).filter((_: any, i: number) => i !== index)
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Formulário enviado:', formData)
    // Aqui você pode adicionar a lógica para enviar os dados
    alert('Formulário enviado com sucesso!')
    setIsFormModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#FF6B00] via-[#FF8533] to-[#FF9966] min-h-[85vh] flex items-center overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Círculos decorativos */}
          <div className="absolute -right-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -left-1/4 top-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-2xl"></div>
          
          {/* Grid de pontos */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 gap-4 h-full">
              {Array.from({ length: 144 }).map((_, i) => (
                <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-6xl px-4 py-16 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Inteligência Artificial para Empregos
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Encontre seu{' '}
                <span className="relative">
                  próximo emprego
                  <div className="absolute -bottom-2 left-0 w-full h-2 bg-white/20 rounded-full"></div>
                </span>
              </h1>

              <p className="text-xl mb-8 text-white/90 max-w-lg">
                Conectamos você às melhores oportunidades de trabalho da sua região usando IA para encontrar a vaga perfeita para você.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button 
                  className="bg-white text-[#FF6B00] hover:bg-white/90 text-lg px-8 py-6 rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  onClick={() => setIsFormModalOpen(true)}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  Começar agora
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 text-lg px-8 py-6 rounded-full"
                  onClick={() => window.location.href = '/contato'}
                >
                  Sou empresa
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/20">
                <div>
                  <p className="text-3xl font-bold">407k+</p>
                  <p className="text-white/70">Vagas disponíveis</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">177k+</p>
                  <p className="text-white/70">Pessoas empregadas</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">253k+</p>
                  <p className="text-white/70">Currículos</p>
                </div>
              </div>
            </div>

            <div className="relative h-[600px] hidden md:block">
              {/* Círculo decorativo atrás do celular */}
              <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-white/10 rounded-full blur-2xl"></div>
              
              {/* Imagem do celular */}
              <div className="absolute top-1/2 -right-20 -translate-y-1/2 transform hover:scale-105 transition-transform duration-500">
                <div className="relative">
                  {/* Efeito de brilho */}
                  <div className="absolute -inset-0.5 bg-white/20 rounded-[3rem] blur"></div>
                  <Image
                    src="/images/conecteai/phone-mockup.png"
                    alt="App Conecteai"
                    width={300}
                    height={600}
                    className="relative rounded-[2.5rem] shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button className="bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white">
              Encontrar vagas
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-6">
            Empresas que confiam no Conecteai
          </h2>
          <div className="w-24 h-1 bg-[#FF6B00] mx-auto mb-16 rounded-full"></div>
          
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 lg:gap-20">
            {partners.map((partner, index) => (
              <a
                key={partner.name}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group w-[200px] h-[100px] flex items-center justify-center"
                aria-label={`Visite o site da ${partner.name}`}
              >
                <div className="absolute inset-0 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-shadow duration-300"></div>
                <Image
                  src={partner.logo}
                  alt={`Logo ${partner.name}`}
                  width={120}
                  height={60}
                  className="relative object-contain transition-all duration-300 group-hover:scale-105 p-4"
                />
              </a>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-600 mb-8">
              Junte-se a mais de 500 empresas que já confiam em nossa plataforma
            </p>
            <Button 
              variant="outline" 
              className="border-[#FF6B00] text-[#FF6B00] hover:bg-[#FF6B00] hover:text-white"
              onClick={() => window.location.href = '/contato'}
            >
              Cadastrar minha empresa
            </Button>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute inset-0 overflow-hidden opacity-[0.03] pointer-events-none">
          <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#FF6B00]"></div>
          <div className="absolute -left-24 -bottom-24 w-96 h-96 rounded-full bg-[#FF6B00]"></div>
        </div>

        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-4xl font-bold text-center mb-6">
            Como funciona
          </h2>
          <div className="w-24 h-1 bg-[#FF6B00] mx-auto mb-16 rounded-full"></div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
            {/* Linha conectando os passos */}
            <div className="hidden md:block absolute top-24 left-1/2 -translate-x-1/2 w-[80%] h-0.5 bg-gradient-to-r from-[#FF6B00]/20 via-[#FF6B00] to-[#FF6B00]/20"></div>

            {howItWorks.map((item, index) => (
              <div key={index} className="relative flex flex-col items-center text-center">
                {/* Número do passo */}
                <div className="w-12 h-12 bg-[#FF6B00] rounded-full flex items-center justify-center text-white text-xl font-bold mb-6 relative z-10">
                  {item.number}
                </div>
                
                {/* Ícone */}
                <div className="text-4xl mb-4 bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>

                {/* Conteúdo */}
                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button 
              className="bg-[#25D366] hover:bg-[#25D366]/90 text-white text-lg px-8 py-6 rounded-full flex items-center gap-2 mx-auto"
              onClick={() => setIsFormModalOpen(true)}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>Começar agora pelo WhatsApp</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Vantagens
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#FF6B00] rounded-full flex items-center justify-center text-white flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button 
              className="bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white"
              onClick={() => setIsFormModalOpen(true)}
            >
              Cadastre-se gratuitamente
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Quem conseguiu emprego com a gente
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Perguntas Frequentes
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium">{item.question}</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#FF6B00]">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Pronto para encontrar seu próximo emprego?
          </h2>
          <Button 
            className="bg-white text-[#FF6B00] hover:bg-white/90 text-lg px-8 py-6"
            onClick={() => setIsFormModalOpen(true)}
          >
            Cadastre seu perfil agora
          </Button>
        </div>
      </section>

      {/* Formulário Modal */}
      <Modal
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
        title="Formulário para Perfil Profissional"
        size="full"
      >
        <form onSubmit={handleSubmit} className="space-y-6 p-6">
          {/* 1. Dados Pessoais */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#FF6B00] border-b pb-2">1. Dados Pessoais</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nome completo *</label>
                <input
                  type="text"
                  required
                  value={formData.nomeCompleto}
                  onChange={(e) => handleInputChange('nomeCompleto', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Data de nascimento *</label>
                <input
                  type="date"
                  required
                  value={formData.dataNascimento}
                  onChange={(e) => handleInputChange('dataNascimento', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Cidade/Estado *</label>
                <input
                  type="text"
                  required
                  value={formData.cidadeEstado}
                  onChange={(e) => handleInputChange('cidadeEstado', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Telefone (WhatsApp) *</label>
                <input
                  type="tel"
                  required
                  value={formData.telefone}
                  onChange={(e) => handleInputChange('telefone', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">E-mail profissional *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn</label>
                <input
                  type="url"
                  value={formData.linkedin}
                  onChange={(e) => handleInputChange('linkedin', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Portfólio/Website</label>
                <input
                  type="url"
                  value={formData.portfolio}
                  onChange={(e) => handleInputChange('portfolio', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* 2. Objetivo Profissional */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#FF6B00] border-b pb-2">2. Objetivo Profissional</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Objetivo de carreira (2-3 linhas) *</label>
              <textarea
                required
                rows={3}
                value={formData.objetivoCarreira}
                onChange={(e) => handleInputChange('objetivoCarreira', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                placeholder="Descreva seus objetivos profissionais e o que busca em uma oportunidade..."
              />
            </div>
          </div>

          {/* 3. Formação Acadêmica */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#FF6B00] border-b pb-2">3. Formação Acadêmica</h3>
            
            {formData.formacoes.map((formacao, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium text-gray-700">Formação {index + 1}</h4>
                  {formData.formacoes.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeArrayItem('formacoes', index)}
                      className="text-red-500 hover:text-red-700 text-sm"
                    >
                      Remover
                    </button>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Curso *</label>
                    <input
                      type="text"
                      required
                      value={formacao.curso}
                      onChange={(e) => handleArrayChange('formacoes', index, { curso: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Instituição *</label>
                    <input
                      type="text"
                      required
                      value={formacao.instituicao}
                      onChange={(e) => handleArrayChange('formacoes', index, { instituicao: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Ano de conclusão *</label>
                    <input
                      type="text"
                      required
                      value={formacao.anoConclusao}
                      onChange={(e) => handleArrayChange('formacoes', index, { anoConclusao: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                      placeholder="2023 ou Cursando"
                    />
                  </div>
                </div>
              </div>
            ))}
            
            <button
              type="button"
              onClick={() => addArrayItem('formacoes')}
              className="text-[#FF6B00] hover:text-[#FF6B00]/80 text-sm font-medium"
            >
              + Adicionar formação
            </button>
          </div>

          {/* 4. Experiência Profissional */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#FF6B00] border-b pb-2">4. Experiência Profissional</h3>
            
            {formData.experiencias.map((experiencia, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium text-gray-700">Experiência {index + 1}</h4>
                  {formData.experiencias.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeArrayItem('experiencias', index)}
                      className="text-red-500 hover:text-red-700 text-sm"
                    >
                      Remover
                    </button>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Empresa *</label>
                    <input
                      type="text"
                      required
                      value={experiencia.empresa}
                      onChange={(e) => handleArrayChange('experiencias', index, { empresa: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Cargo/Função *</label>
                    <input
                      type="text"
                      required
                      value={experiencia.cargo}
                      onChange={(e) => handleArrayChange('experiencias', index, { cargo: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Período (mês/ano - mês/ano) *</label>
                    <input
                      type="text"
                      required
                      value={experiencia.periodo}
                      onChange={(e) => handleArrayChange('experiencias', index, { periodo: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                      placeholder="Jan/2020 - Dez/2023"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Principais atividades e conquistas (3 a 5 tópicos) *</label>
                    <textarea
                      required
                      rows={4}
                      value={experiencia.atividades}
                      onChange={(e) => handleArrayChange('experiencias', index, { atividades: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                      placeholder="• Descreva suas principais responsabilidades&#10;• Mencione conquistas e resultados&#10;• Use tópicos para melhor organização"
                    />
                  </div>
                </div>
              </div>
            ))}
            
            <button
              type="button"
              onClick={() => addArrayItem('experiencias')}
              className="text-[#FF6B00] hover:text-[#FF6B00]/80 text-sm font-medium"
            >
              + Adicionar experiência
            </button>
          </div>

          {/* 5. Cursos e Certificações */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#FF6B00] border-b pb-2">5. Cursos e Certificações Complementares</h3>
            
            {formData.certificacoes.map((certificacao, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium text-gray-700">Certificação {index + 1}</h4>
                  {formData.certificacoes.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeArrayItem('certificacoes', index)}
                      className="text-red-500 hover:text-red-700 text-sm"
                    >
                      Remover
                    </button>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nome do curso</label>
                    <input
                      type="text"
                      value={certificacao.nome}
                      onChange={(e) => handleArrayChange('certificacoes', index, { nome: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Instituição</label>
                    <input
                      type="text"
                      value={certificacao.instituicao}
                      onChange={(e) => handleArrayChange('certificacoes', index, { instituicao: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Ano de conclusão</label>
                    <input
                      type="text"
                      value={certificacao.anoConclusao}
                      onChange={(e) => handleArrayChange('certificacoes', index, { anoConclusao: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            ))}
            
            <button
              type="button"
              onClick={() => addArrayItem('certificacoes')}
              className="text-[#FF6B00] hover:text-[#FF6B00]/80 text-sm font-medium"
            >
              + Adicionar certificação
            </button>
          </div>

          {/* 6. Habilidades e Competências */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#FF6B00] border-b pb-2">6. Habilidades e Competências</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Habilidades técnicas</label>
              <textarea
                rows={3}
                value={formData.habilidadesTecnicas}
                onChange={(e) => handleInputChange('habilidadesTecnicas', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                placeholder="Ex.: Excel avançado, Power BI, Python, JavaScript, etc."
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Habilidades comportamentais</label>
              <textarea
                rows={3}
                value={formData.habilidadesComportamentais}
                onChange={(e) => handleInputChange('habilidadesComportamentais', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                placeholder="Ex.: Comunicação, Liderança, Trabalho em equipe, etc."
              />
            </div>
          </div>

          {/* 7. Idiomas */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#FF6B00] border-b pb-2">7. Idiomas</h3>
            
            {formData.idiomas.map((idioma, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium text-gray-700">Idioma {index + 1}</h4>
                  {formData.idiomas.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeArrayItem('idiomas', index)}
                      className="text-red-500 hover:text-red-700 text-sm"
                    >
                      Remover
                    </button>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Idioma</label>
                    <input
                      type="text"
                      value={idioma.idioma}
                      onChange={(e) => handleArrayChange('idiomas', index, { idioma: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nível</label>
                    <select
                      value={idioma.nivel}
                      onChange={(e) => handleArrayChange('idiomas', index, { nivel: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                    >
                      <option value="">Selecione</option>
                      <option value="Básico">Básico</option>
                      <option value="Intermediário">Intermediário</option>
                      <option value="Avançado">Avançado</option>
                      <option value="Fluente">Fluente</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}
            
            <button
              type="button"
              onClick={() => addArrayItem('idiomas')}
              className="text-[#FF6B00] hover:text-[#FF6B00]/80 text-sm font-medium"
            >
              + Adicionar idioma
            </button>
          </div>

          {/* 8. Projetos Voluntários */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#FF6B00] border-b pb-2">8. Projetos ou Trabalhos Voluntários (opcional)</h3>
            
            {formData.projetosVoluntarios.map((projeto, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium text-gray-700">Projeto {index + 1}</h4>
                  {formData.projetosVoluntarios.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeArrayItem('projetosVoluntarios', index)}
                      className="text-red-500 hover:text-red-700 text-sm"
                    >
                      Remover
                    </button>
                  )}
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nome do projeto ou ONG</label>
                    <input
                      type="text"
                      value={projeto.nome}
                      onChange={(e) => handleArrayChange('projetosVoluntarios', index, { nome: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Descrição das atividades e resultados</label>
                    <textarea
                      rows={3}
                      value={projeto.descricao}
                      onChange={(e) => handleArrayChange('projetosVoluntarios', index, { descricao: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            ))}
            
            <button
              type="button"
              onClick={() => addArrayItem('projetosVoluntarios')}
              className="text-[#FF6B00] hover:text-[#FF6B00]/80 text-sm font-medium"
            >
              + Adicionar projeto
            </button>
          </div>

          {/* 9. Informações Adicionais */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#FF6B00] border-b pb-2">9. Informações Adicionais</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Disponibilidade (mudança, viagens, horários)</label>
              <textarea
                rows={3}
                value={formData.disponibilidade}
                onChange={(e) => handleInputChange('disponibilidade', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                placeholder="Ex.: Disponível para mudança de cidade, viagens ocasionais, horário comercial"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Possui CNH? (Categoria)</label>
              <input
                type="text"
                value={formData.cnh}
                onChange={(e) => handleInputChange('cnh', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                placeholder="Ex.: Sim, categoria B ou Não"
              />
            </div>
          </div>

          {/* Botões de ação */}
          <div className="flex gap-4 pt-6 border-t">
            <Button
              type="submit"
              className="flex-1 bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white"
            >
              Enviar Formulário
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsFormModalOpen(false)}
              className="flex-1"
            >
              Cancelar
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  )
} 