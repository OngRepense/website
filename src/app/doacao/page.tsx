'use client'

import { Button } from "@/components/ui/button"
import { Modal } from "@/components/ui/modal"
import { useState } from "react"
import Image from "next/image"

export default function Doacao() {
  const [selectedMethod, setSelectedMethod] = useState<'pix' | 'qr'>('pix')
  const [copied, setCopied] = useState(false)
  const [isQRModalOpen, setIsQRModalOpen] = useState(false)

  const pixKey = "59.498.140/0001-84" // Chave PIX da ONG

  const handleCopyPixKey = async () => {
    try {
      await navigator.clipboard.writeText(pixKey)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Erro ao copiar chave PIX:', err)
    }
  }

  return (
    <div className="flex flex-col w-full min-h-screen bg-orange-50">
      {/* Hero Section */}
      <section className="w-full pt-32 pb-16">
        <div className="text-center">
          <h1 className="text-4xl lg:text-[2.75rem] font-bold leading-tight text-[#FF6B00]">
            Faça sua Doação
          </h1>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            Sua contribuição faz a diferença na vida de muitas pessoas. 
            Ajude-nos a continuar transformando vidas através da educação e tecnologia.
          </p>
        </div>
      </section>

      {/* Donation Section */}
      <section className="w-full bg-white rounded-t-3xl flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Donation Methods */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Como doar</h2>
              
              {/* Method Tabs */}
              <div className="flex space-x-2 mb-6">
                <button
                  onClick={() => setSelectedMethod('pix')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedMethod === 'pix'
                      ? 'bg-[#FF6B00] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Chave PIX
                </button>
                <button
                  onClick={() => setSelectedMethod('qr')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedMethod === 'qr'
                      ? 'bg-[#FF6B00] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  QR Code
                </button>
              </div>

              {/* PIX Method */}
              {selectedMethod === 'pix' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-[#FF6B00]">
                      Chave PIX
                    </h3>
                    <div className="bg-gray-50 p-4 rounded-lg border">
                      <p className="text-sm text-gray-600 mb-2">CNPJ</p>
                      <div className="flex items-center justify-between">
                        <p className="font-mono text-lg font-semibold text-gray-900">
                          {pixKey}
                        </p>
                        <Button
                          onClick={handleCopyPixKey}
                          variant="outline"
                          size="sm"
                          className="ml-2"
                        >
                          {copied ? 'Copiado!' : 'Copiar'}
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Como usar:</h4>
                    <ol className="text-sm text-blue-800 space-y-1">
                      <li>1. Abra seu app de pagamentos</li>
                      <li>2. Escolha a opção PIX</li>
                      <li>3. Cole a chave PIX copiada</li>
                      <li>4. Digite o valor da doação</li>
                      <li>5. Confirme o pagamento</li>
                    </ol>
                  </div>
                </div>
              )}

              {/* QR Code Method */}
              {selectedMethod === 'qr' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-[#FF6B00]">
                      QR Code PIX
                    </h3>
                                                              <div className="bg-gray-50 p-6 rounded-lg border flex flex-col items-center">
                       <div className="w-48 h-48 bg-white rounded-lg flex items-center justify-center mb-4 p-2">
                         <Image
                           src="/images/qr-code-pix.jpeg"
                           alt="QR Code PIX para doação"
                           width={176}
                           height={176}
                           className="rounded-lg"
                           priority
                         />
                       </div>
                       <p className="text-sm text-gray-600 text-center mb-4">
                         Escaneie o QR Code com seu app de pagamentos
                       </p>
                       <Button
                         onClick={() => setIsQRModalOpen(true)}
                         variant="outline"
                         className="border-[#FF6B00] text-[#FF6B00] hover:bg-[#FF6B00] hover:text-white"
                       >
                         Ampliar QR Code
                       </Button>
                     </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Como usar:</h4>
                    <ol className="text-sm text-green-800 space-y-1">
                      <li>1. Abra seu app de pagamentos</li>
                      <li>2. Escolha a opção PIX</li>
                      <li>3. Escaneie o QR Code</li>
                      <li>4. Digite o valor da doação</li>
                      <li>5. Confirme o pagamento</li>
                    </ol>
                  </div>
                </div>
              )}
            </div>

            {/* Donation Info */}
            <div className="lg:pl-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Sobre as Doações</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[#FF6B00]">
                    Para onde vai sua doação?
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-[#FF6B00] mr-2">•</span>
                      Compra de equipamentos para laboratórios de inovação
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FF6B00] mr-2">•</span>
                      Material escolar para crianças em vulnerabilidade
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FF6B00] mr-2">•</span>
                      Capacitação de professores e voluntários
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FF6B00] mr-2">•</span>
                      Manutenção dos projetos educacionais
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FF6B00] mr-2">•</span>
                      Expansão para novas comunidades
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold mb-3 text-[#FF6B00]">
                    Transparência
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Comprometemo-nos com total transparência no uso dos recursos. 
                    Relatórios mensais são publicados em nossas redes sociais.
                  </p>
                  <p className="text-sm text-gray-500">
                    100% das doações são destinadas aos projetos sociais
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold mb-3 text-[#FF6B00]">
                    Precisa de recibo?
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Para doações com recibo para dedução no imposto de renda, 
                    entre em contato conosco após a doação.
                  </p>
                  <Button
                    variant="outline"
                    className="border-[#FF6B00] text-[#FF6B00] hover:bg-[#FF6B00] hover:text-white"
                    onClick={() => window.location.href = '/contato'}
                  >
                    Solicitar Recibo
                  </Button>
                </div>

                <div className="text-center p-6 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl">
                  <h3 className="text-lg font-semibold mb-2 text-[#FF6B00]">
                    Obrigado por sua generosidade!
                  </h3>
                  <p className="text-gray-600">
                    Cada doação, por menor que seja, faz uma grande diferença 
                    na vida das pessoas que atendemos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QR Code Modal */}
      <Modal
        isOpen={isQRModalOpen}
        onClose={() => setIsQRModalOpen(false)}
        title="QR Code PIX"
      >
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-white p-4 rounded-lg border">
            <Image
              src="/images/qr-code-pix.jpeg"
              alt="QR Code PIX para doação"
              width={300}
              height={300}
              className="rounded-lg"
              priority
            />
          </div>
          <p className="text-sm text-gray-600 text-center">
            Escaneie este QR Code com seu app de pagamentos para fazer a doação
          </p>
          <div className="bg-blue-50 p-3 rounded-lg w-full">
            <p className="text-sm text-blue-800 text-center">
              <strong>Chave PIX:</strong> {pixKey}
            </p>
          </div>
        </div>
      </Modal>
    </div>
  )
} 