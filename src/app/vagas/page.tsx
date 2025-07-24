'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

// Tipos para as vagas
interface Vaga {
  id: string
  titulo: string
  area: string
  tipo: 'voluntario' | 'estagio' | 'emprego'
  localizacao: string
  cargaHoraria: string
  descricao: string
  responsabilidades: string[]
  requisitos: string[]
  beneficios: string[]
  dataPublicacao: string
  ativa: boolean
}

// Dados mockados das vagas
const vagasDisponiveis: Vaga[] = [
  {
    id: '1',
    titulo: 'Educador Voluntário - Reforço Escolar',
    area: 'Educação',
    tipo: 'voluntario',
    localizacao: 'Salvador, BA',
    cargaHoraria: '4 horas/semana',
    descricao: 'Buscamos educadores comprometidos para atuar no projeto de reforço escolar comunitário, ajudando crianças e adolescentes em situação de vulnerabilidade social.',
    responsabilidades: [
      'Planejar e executar aulas de reforço escolar',
      'Acompanhar o desenvolvimento dos alunos',
      'Participar de reuniões pedagógicas',
      'Elaborar relatórios de progresso'
    ],
    requisitos: [
      'Formação em Pedagogia, Letras, Matemática ou áreas afins',
      'Experiência com educação infantil ou fundamental',
      'Disponibilidade para 4 horas semanais',
      'Compromisso com a transformação social'
    ],
    beneficios: [
      'Certificado de voluntariado',
      'Formação continuada',
      'Networking com profissionais da área',
      'Experiência em projetos sociais'
    ],
    dataPublicacao: '2024-01-15',
    ativa: true
  },
  {
    id: '2',
    titulo: 'Assistente Administrativo',
    area: 'Administração',
    tipo: 'emprego',
    localizacao: 'Salvador, BA',
    cargaHoraria: '40 horas/semana',
    descricao: 'Vaga para assistente administrativo para apoiar a gestão da ONG, organizando documentos, controles financeiros e comunicação interna.',
    responsabilidades: [
      'Organizar documentos e arquivos',
      'Auxiliar no controle financeiro',
      'Atender telefones e e-mails',
      'Preparar relatórios administrativos'
    ],
    requisitos: [
      'Ensino médio completo',
      'Conhecimento em Excel e Word',
      'Experiência em ambiente administrativo',
      'Boa comunicação e organização'
    ],
    beneficios: [
      'Salário compatível com o mercado',
      'Vale refeição',
      'Vale transporte',
      'Plano de saúde'
    ],
    dataPublicacao: '2024-01-10',
    ativa: true
  },
  {
    id: '3',
    titulo: 'Estagiário de Marketing Digital',
    area: 'Marketing',
    tipo: 'estagio',
    localizacao: 'Salvador, BA',
    cargaHoraria: '30 horas/semana',
    descricao: 'Estágio para estudantes de Marketing, Publicidade ou Comunicação Social interessados em trabalhar com marketing digital para causas sociais.',
    responsabilidades: [
      'Criar conteúdo para redes sociais',
      'Auxiliar na gestão de campanhas',
      'Produzir relatórios de performance',
      'Apoiar eventos e ações da ONG'
    ],
    requisitos: [
      'Cursando Marketing, Publicidade ou Comunicação',
      'Conhecimento em redes sociais',
      'Boa escrita e criatividade',
      'Interesse em causas sociais'
    ],
    beneficios: [
      'Bolsa estágio',
      'Vale transporte',
      'Experiência em marketing social',
      'Certificado de estágio'
    ],
    dataPublicacao: '2024-01-08',
    ativa: true
  },
  {
    id: '4',
    titulo: 'Psicólogo Voluntário',
    area: 'Saúde Mental',
    tipo: 'voluntario',
    localizacao: 'Salvador, BA',
    cargaHoraria: '6 horas/semana',
    descricao: 'Buscamos psicólogos para oferecer apoio psicológico às crianças e famílias atendidas pelos nossos projetos.',
    responsabilidades: [
      'Realizar atendimentos psicológicos',
      'Participar de grupos de apoio',
      'Elaborar relatórios psicológicos',
      'Orientar educadores sobre questões emocionais'
    ],
    requisitos: [
      'Formação em Psicologia',
      'CRP ativo',
      'Experiência com crianças e adolescentes',
      'Disponibilidade para 6 horas semanais'
    ],
    beneficios: [
      'Certificado de voluntariado',
      'Supervisão clínica',
      'Formação em psicologia social',
      'Experiência em projetos comunitários'
    ],
    dataPublicacao: '2024-01-05',
    ativa: true
  }
]

export default function VagasPage() {
  const [filtroTipo, setFiltroTipo] = useState<string>('todos')
  const [filtroArea, setFiltroArea] = useState<string>('todos')
  const [busca, setBusca] = useState<string>('')

  // Filtrar vagas
  const vagasFiltradas = vagasDisponiveis.filter(vaga => {
    const matchTipo = filtroTipo === 'todos' || vaga.tipo === filtroTipo
    const matchArea = filtroArea === 'todos' || vaga.area === filtroArea
    const matchBusca = vaga.titulo.toLowerCase().includes(busca.toLowerCase()) ||
                      vaga.descricao.toLowerCase().includes(busca.toLowerCase())
    
    return matchTipo && matchArea && matchBusca
  })

  // Obter áreas únicas
  const areas = [...new Set(vagasDisponiveis.map(vaga => vaga.area))]

  const getTipoLabel = (tipo: string) => {
    switch (tipo) {
      case 'voluntario': return 'Voluntário'
      case 'estagio': return 'Estágio'
      case 'emprego': return 'Emprego'
      default: return tipo
    }
  }

  const getTipoColor = (tipo: string) => {
    switch (tipo) {
      case 'voluntario': return 'bg-green-100 text-green-800'
      case 'estagio': return 'bg-blue-100 text-blue-800'
      case 'emprego': return 'bg-orange-100 text-orange-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#FF6B00] to-[#E65A00] text-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Vagas Disponíveis
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto">
            Junte-se à nossa equipe e faça parte da transformação social através da educação
          </p>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <main className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
        {/* Filtros */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
            <h2 className="text-xl font-semibold mb-4">Filtrar Vagas</h2>
            
            {/* Busca */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Buscar por título ou descrição..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
              />
            </div>

            {/* Filtros */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Filtro por Tipo */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de Vaga
                </label>
                <select
                  value={filtroTipo}
                  onChange={(e) => setFiltroTipo(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                >
                  <option value="todos">Todos os tipos</option>
                  <option value="voluntario">Voluntário</option>
                  <option value="estagio">Estágio</option>
                  <option value="emprego">Emprego</option>
                </select>
              </div>

              {/* Filtro por Área */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Área
                </label>
                <select
                  value={filtroArea}
                  onChange={(e) => setFiltroArea(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                >
                  <option value="todos">Todas as áreas</option>
                  {areas.map(area => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Resultados */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Vagas Encontradas ({vagasFiltradas.length})
            </h2>
            <Button
              onClick={() => {
                setFiltroTipo('todos')
                setFiltroArea('todos')
                setBusca('')
              }}
              variant="outline"
              className="text-sm"
            >
              Limpar Filtros
            </Button>
          </div>

          {/* Lista de Vagas */}
          <div className="space-y-6">
            {vagasFiltradas.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhuma vaga encontrada</h3>
                <p className="text-gray-600">Tente ajustar os filtros ou buscar por outros termos.</p>
              </div>
            ) : (
              vagasFiltradas.map(vaga => (
                <Card key={vaga.id} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {vaga.titulo}
                          </h3>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTipoColor(vaga.tipo)}`}>
                              {getTipoLabel(vaga.tipo)}
                            </span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">
                              {vaga.area}
                            </span>
                          </div>
                        </div>
                        <div className="text-right text-sm text-gray-500">
                          <p>Publicada em {new Date(vaga.dataPublicacao).toLocaleDateString('pt-BR')}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600">Localização</p>
                          <p className="font-medium">{vaga.localizacao}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Carga Horária</p>
                          <p className="font-medium">{vaga.cargaHoraria}</p>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-4">{vaga.descricao}</p>

                      {/* Detalhes expandíveis */}
                      <div className="space-y-4">
                        {/* Responsabilidades */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Responsabilidades:</h4>
                          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                            {vaga.responsabilidades.map((resp, index) => (
                              <li key={index}>{resp}</li>
                            ))}
                          </ul>
                        </div>

                        {/* Requisitos */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Requisitos:</h4>
                          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                            {vaga.requisitos.map((req, index) => (
                              <li key={index}>{req}</li>
                            ))}
                          </ul>
                        </div>

                        {/* Benefícios */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Benefícios:</h4>
                          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                            {vaga.beneficios.map((beneficio, index) => (
                              <li key={index}>{beneficio}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 lg:mt-0 lg:ml-6">
                      <Button className="w-full lg:w-auto bg-[#FF6B00] hover:bg-[#E65A00] text-white">
                        Candidatar-se
                      </Button>
                    </div>
                  </div>
                </Card>
              ))
            )}
          </div>
        </div>

        {/* Call to Action */}
        <section className="bg-white rounded-lg shadow-sm p-6 sm:p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Não encontrou a vaga ideal?
          </h2>
          <p className="text-gray-600 mb-6">
            Envie seu currículo para nosso banco de talentos e seja considerado para futuras oportunidades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#FF6B00] hover:bg-[#E65A00] text-white">
              Enviar Currículo
            </Button>
            <Button variant="outline" className="border-[#FF6B00] text-[#FF6B00] hover:bg-[#FF6B00] hover:text-white">
              Falar com RH
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
} 