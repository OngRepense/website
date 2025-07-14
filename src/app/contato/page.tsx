'use client'

import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log(formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="flex flex-col w-full min-h-screen bg-orange-50">
      {/* Hero Section */}
      <section className="w-full pt-32 pb-16">
        <div className="text-center">
          <h1 className="text-4xl lg:text-[2.75rem] font-bold leading-tight text-[#FF6B00]">
            Entre em Contato
          </h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full bg-white rounded-t-3xl flex-grow">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Envie sua mensagem</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Assunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                    required
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="volunteer">Quero ser voluntário</option>
                    <option value="partnership">Proposta de parceria</option>
                    <option value="donation">Informações sobre doação</option>
                    <option value="other">Outro assunto</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                    required
                  ></textarea>
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-[#FF6B00] hover:bg-[#E65A00] text-white py-3 rounded-lg text-lg"
                >
                  Enviar mensagem
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="lg:pl-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Informações de Contato</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[#FF6B00]">Endereço</h3>
                  <p className="text-gray-600">
                    Salvador, BA
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[#FF6B00]">E-mail</h3>
                  <a 
                    href="mailto:repenseong2@gmail.com" 
                    className="text-gray-600 hover:text-[#FF6B00] transition-colors"
                  >
                    repenseong2@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[#FF6B00]">Telefone</h3>
                  <a 
                    href="tel:+5571996166903" 
                    className="text-gray-600 hover:text-[#FF6B00] transition-colors"
                  >
                    (71) 99616-6903
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[#FF6B00]">Redes Sociais</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#FF6B00] transition-colors"
                    >
                      <span className="sr-only">Facebook</span>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#FF6B00] transition-colors"
                    >
                      <span className="sr-only">Instagram</span>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 011.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772 4.915 4.915 0 01-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#FF6B00] transition-colors"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="bg-orange-50 p-6 rounded-xl mt-12">
                  <h3 className="text-lg font-semibold mb-3 text-[#FF6B00]">Horário de Atendimento</h3>
                  <p className="text-gray-600">
                    Segunda a Sexta: 9h às 18h<br />
                    Sábado: 9h às 13h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 