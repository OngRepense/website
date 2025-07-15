'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

// Áreas de atuação
const areas = [
  {
    icon: '🔬',
    title: 'Pesquisa Social',
    description: 'Desenvolvemos pesquisas para entender as necessidades reais da comunidade.'
  },
  {
    icon: '💡',
    title: 'Inovação Tecnológica',
    description: 'Criamos soluções tecnológicas para resolver problemas sociais.'
  },
  {
    icon: '🤝',
    title: 'Parcerias',
    description: 'Conectamos empresas, universidades e comunidade para maximizar o impacto social.'
  },
  {
    icon: '📊',
    title: 'Análise de Impacto',
    description: 'Medimos e avaliamos o impacto real das soluções implementadas.'
  }
]

export default function LaboratorioInovacao() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    projectType: 'individual',
    projectDescription: '',
    budget: '',
    timeline: '',
    impact: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log('Dados do formulário:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 min-h-[60vh] flex items-center overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -left-1/4 top-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto max-w-6xl px-4 py-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Laboratório de Inovação Social
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Desenvolvemos soluções tecnológicas inovadoras para criar impacto social positivo na nossa comunidade.
            </p>
            <Button className="bg-white text-blue-600 hover:bg-white/90 text-lg px-8 py-6 rounded-full">
              Propor um projeto
            </Button>
          </div>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-6">
            Áreas de Atuação
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-16 rounded-full"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {areas.map((area, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">
              Proponha um Projeto
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-16 rounded-full"></div>

            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Organização/Empresa
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de Projeto
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                >
                  <option value="individual">Projeto Individual</option>
                  <option value="empresa">Projeto Empresarial</option>
                  <option value="ong">Projeto ONG</option>
                  <option value="governo">Projeto Governamental</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Descrição do Projeto
                </label>
                <textarea
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Descreva seu projeto, objetivos e impacto esperado..."
                  required
                ></textarea>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Orçamento Estimado
                  </label>
                  <input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Ex: R$ 50.000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Prazo Desejado
                  </label>
                  <input
                    type="text"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Ex: 6 meses"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Impacto Social Esperado
                </label>
                <textarea
                  name="impact"
                  value={formData.impact}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Descreva qual impacto social você espera alcançar..."
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <Button 
                  type="submit"
                  className="bg-blue-600 text-white hover:bg-blue-700 text-lg px-8 py-4 rounded-full"
                >
                  Enviar Proposta
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto max-w-6xl px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Vamos criar algo incrível juntos?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Nossa equipe está pronta para transformar sua ideia em realidade e gerar impacto positivo na sociedade.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-white/90 text-lg px-8 py-6">
            Agendar uma conversa
          </Button>
        </div>
      </section>
    </div>
  )
} 