'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { useState } from "react"

export default function Voluntarios() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    area: '',
    availability: '',
    experience: '',
    motivation: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log('Dados do voluntário:', formData)
    alert('Obrigado pelo interesse! Entraremos em contato em breve.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      area: '',
      availability: '',
      experience: '',
      motivation: ''
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-br from-orange-50 to-yellow-50 relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute inset-0 overflow-hidden opacity-[0.03] pointer-events-none">
          <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#FF6B00]"></div>
          <div className="absolute -left-24 -bottom-24 w-96 h-96 rounded-full bg-[#FF6B00]"></div>
        </div>

        <div className="px-4 md:px-8 lg:px-16 max-w-screen-2xl mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-[#FF6B00] font-medium text-sm mb-4">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              Seja um Voluntário
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight text-[#FF6B00] mb-6">
              Faça a diferença
              <br />
              <span className="text-gray-800">na vida de alguém</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              Junte-se a nós nessa missão de transformar vidas através da educação, tecnologia e solidariedade. 
              Seu tempo e dedicação podem mudar o futuro de muitas pessoas.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#formulario-voluntario">
                <Button 
                  size="lg"
                  className="bg-[#FF6B00] hover:bg-[#E65A00] text-white min-w-[200px] h-12 text-base md:text-lg"
                >
                  Quero ser voluntário
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Volunteer Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="px-4 md:px-8 lg:px-16 max-w-screen-2xl mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-[#FF6B00]">
              Por que ser voluntário?
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Descubra como seu tempo e dedicação podem gerar impactos positivos que duram para sempre
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Transformar Vidas */}
            <Card className="bg-white hover:bg-orange-50/50 transition-colors duration-300 border-none shadow-md">
              <CardHeader>
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-10 h-10 text-[#FF6B00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <CardTitle className="text-2xl mb-4 text-center">
                  Transformar Vidas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Seu conhecimento e dedicação podem abrir portas e criar oportunidades que mudam o destino de crianças e jovens.
                </p>
              </CardContent>
            </Card>

            {/* Desenvolver Habilidades */}
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
                  Desenvolver Habilidades
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Aprenda novas competências, desenvolva liderança e adquira experiência em projetos sociais inovadores.
                </p>
              </CardContent>
            </Card>

            {/* Construir Comunidade */}
            <Card className="bg-white hover:bg-orange-50/50 transition-colors duration-300 border-none shadow-md">
              <CardHeader>
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-10 h-10 text-[#FF6B00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <CardTitle className="text-2xl mb-4 text-center">
                  Construir Comunidade
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Faça parte de uma rede de pessoas comprometidas em criar uma sociedade mais justa e solidária.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stories Section */}
      <section className="w-full py-16 md:py-24 bg-orange-50">
        <div className="px-4 md:px-8 lg:px-16 max-w-screen-2xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-[#FF6B00]">
              Histórias que Inspiram
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Conheça o impacto real do trabalho voluntário em nossa comunidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Story 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-[#FF6B00]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Maria, 15 anos</h3>
                  <p className="text-gray-600">Participante do Reforço Escolar</p>
                </div>
              </div>
              <blockquote className="text-gray-700 italic leading-relaxed">
                &ldquo;Graças aos voluntários da Repense, consegui melhorar minhas notas.&rdquo;
              </blockquote>
            </div>

            {/* Story 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-[#FF6B00]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">João, Voluntário</h3>
                  <p className="text-gray-600">Professor de Matemática</p>
                </div>
              </div>
              <blockquote className="text-gray-700 italic leading-relaxed">
                &ldquo;Ser voluntário na Repense mudou minha perspectiva sobre educação. Ver o brilho nos olhos das crianças 
                quando entendem um conceito é a maior recompensa que posso ter.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="px-4 md:px-8 lg:px-16 max-w-screen-2xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-[#FF6B00]">
              Como você pode ajudar
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Temos diversas oportunidades para você contribuir com seus conhecimentos e habilidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Educação */}
            <div className="group">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 h-full flex flex-col">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Educação</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Apoie crianças e adolescentes no reforço escolar, ensinando português, matemática, inglês ou outras disciplinas.
                </p>
                <div className="text-sm text-gray-500">
                  <span className="font-medium">Duração:</span> 2-4 horas por semana
                </div>
              </div>
            </div>

            {/* Tecnologia */}
            <div className="group">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 h-full flex flex-col">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Tecnologia</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Ensine programação, design digital ou ajude no desenvolvimento de projetos tecnológicos inovadores.
                </p>
                <div className="text-sm text-gray-500">
                  <span className="font-medium">Duração:</span> 2-6 horas por semana
                </div>
              </div>
            </div>

            {/* Administrativo */}
            <div className="group">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 h-full flex flex-col">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Administrativo</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Ajude com organização, comunicação, marketing digital ou gestão de projetos sociais.
                </p>
                <div className="text-sm text-gray-500">
                  <span className="font-medium">Duração:</span> 4-8 horas por semana
                </div>
              </div>
            </div>

            {/* Eventos */}
            <div className="group">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 h-full flex flex-col">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Eventos</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Participe da organização e execução de eventos, workshops e atividades comunitárias.
                </p>
                <div className="text-sm text-gray-500">
                  <span className="font-medium">Duração:</span> Variável (eventos pontuais)
                </div>
              </div>
            </div>

            {/* Mentoria */}
            <div className="group">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 h-full flex flex-col">
                <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Mentoria</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Seja um mentor para jovens, compartilhando sua experiência profissional e orientando carreiras.
                </p>
                <div className="text-sm text-gray-500">
                  <span className="font-medium">Duração:</span> 1-2 horas por semana
                </div>
              </div>
            </div>

            {/* Suporte Geral */}
            <div className="group">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 h-full flex flex-col">
                <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Suporte Geral</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Contribua com logística, limpeza, organização ou qualquer área onde sua ajuda seja necessária.
                </p>
                <div className="text-sm text-gray-500">
                  <span className="font-medium">Duração:</span> Flexível
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-16 md:py-24 bg-orange-50">
        <div className="px-4 md:px-8 lg:px-16 max-w-screen-2xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-[#FF6B00]">
              Nossos Valores
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-12 md:mb-16 leading-relaxed">
              Princípios que guiam nosso trabalho e que esperamos compartilhar com todos os nossos voluntários
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Compromisso */}
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-md">
                  <svg className="w-8 h-8 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Compromisso</h3>
                <p className="text-gray-600 text-sm">
                  Dedicação constante à transformação social
                </p>
              </div>

              {/* Inovação */}
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-md">
                  <svg className="w-8 h-8 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Inovação</h3>
                <p className="text-gray-600 text-sm">
                  Busca por soluções criativas e tecnológicas
                </p>
              </div>

              {/* Solidariedade */}
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-md">
                  <svg className="w-8 h-8 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Solidariedade</h3>
                <p className="text-gray-600 text-sm">
                  Apoio mútuo e trabalho em equipe
                </p>
              </div>

              {/* Impacto */}
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-md">
                  <svg className="w-8 h-8 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Impacto</h3>
                <p className="text-gray-600 text-sm">
                  Resultados mensuráveis e transformação real
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Inscrição */}
      <section id="formulario-voluntario" className="w-full py-16 md:py-24 bg-white">
        <div className="px-4 md:px-8 lg:px-16 max-w-screen-2xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-[#FF6B00]">
                Inscreva-se como Voluntário
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Preencha o formulário abaixo e entraremos em contato para conversarmos sobre como você pode contribuir
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Nome */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent transition-colors"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent transition-colors"
                      required
                    />
                  </div>

                  {/* Telefone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent transition-colors"
                      required
                    />
                  </div>

                  {/* Área de Interesse */}
                  <div>
                    <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-2">
                      Área de interesse *
                    </label>
                    <select
                      id="area"
                      name="area"
                      value={formData.area}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent transition-colors"
                      required
                    >
                      <option value="">Selecione uma área</option>
                      <option value="educacao">Educação</option>
                      <option value="tecnologia">Tecnologia</option>
                      <option value="administrativo">Administrativo</option>
                      <option value="eventos">Eventos</option>
                      <option value="mentoria">Mentoria</option>
                      <option value="suporte-geral">Suporte Geral</option>
                    </select>
                  </div>

                  {/* Disponibilidade */}
                  <div>
                    <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                      Disponibilidade semanal *
                    </label>
                    <select
                      id="availability"
                      name="availability"
                      value={formData.availability}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent transition-colors"
                      required
                    >
                      <option value="">Selecione sua disponibilidade</option>
                      <option value="1-2h">1-2 horas por semana</option>
                      <option value="2-4h">2-4 horas por semana</option>
                      <option value="4-8h">4-8 horas por semana</option>
                      <option value="8h+">8+ horas por semana</option>
                      <option value="flexivel">Flexível</option>
                    </select>
                  </div>

                  {/* Experiência */}
                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                      Experiência prévia
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent transition-colors"
                    >
                      <option value="">Selecione sua experiência</option>
                      <option value="nenhuma">Nenhuma experiência</option>
                      <option value="voluntariado">Já fui voluntário antes</option>
                      <option value="educacao">Experiência em educação</option>
                      <option value="tecnologia">Experiência em tecnologia</option>
                      <option value="social">Experiência em projetos sociais</option>
                    </select>
                  </div>
                </div>

                {/* Motivação */}
                <div>
                  <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-2">
                    Por que você quer ser voluntário? *
                  </label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent transition-colors"
                    placeholder="Conte-nos um pouco sobre sua motivação para ser voluntário..."
                    required
                  ></textarea>
                </div>

                {/* Botão de Envio */}
                <div className="text-center pt-6">
                  <Button 
                    type="submit"
                    size="lg"
                    className="bg-[#FF6B00] hover:bg-[#E65A00] text-white min-w-[200px] h-12 text-base md:text-lg font-semibold"
                  >
                    Enviar inscrição
                  </Button>
                </div>

                <div className="text-center text-sm text-gray-500 mt-4">
                  <p>
                    * Campos obrigatórios. Entraremos em contato em até 48 horas.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-[#FF6B00] to-[#E65A00] text-white">
        <div className="px-4 md:px-8 lg:px-16 max-w-screen-2xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">
              Pronto para fazer a diferença?
            </h2>
            <p className="text-lg md:text-xl mb-8 md:mb-12 leading-relaxed opacity-90">
              Junte-se a nós nessa missão de transformar vidas através da educação, tecnologia e solidariedade. 
              Seu tempo e dedicação podem mudar o futuro de muitas pessoas.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
              <a href="#formulario-voluntario">
                <Button 
                  size="lg" 
                  className="bg-white text-[#FF6B00] hover:bg-gray-100 min-w-[200px] h-12 text-base md:text-lg font-semibold"
                >
                  Quero ser voluntário
                </Button>
              </a>
              <Link href="/projetos">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-[#FF6B00] min-w-[200px] h-12 text-base md:text-lg"
                >
                  Conhecer projetos
                </Button>
              </Link>
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm opacity-75">
                Tem dúvidas? Entre em contato conosco através do formulário ou pelo WhatsApp
              </p>
              <div className="flex justify-center items-center gap-4 mt-4">
                <a 
                  href="mailto:repenseong2@gmail.com" 
                  className="text-sm opacity-75 hover:opacity-100 transition-opacity"
                >
                  repenseong2@gmail.com
                </a>
                <span className="text-sm opacity-50">|</span>
                <a 
                  href="tel:+5571996166903" 
                  className="text-sm opacity-75 hover:opacity-100 transition-opacity"
                >
                  (71) 99616-6903
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 