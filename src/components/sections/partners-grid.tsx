import Image from 'next/image'

const partners = [
  {
    name: 'Assaí Atacadista',
    logo: '/images/partners/assai.png',
    link: 'https://www.assai.com.br'
  },
  {
    name: 'Grupo Parvi',
    logo: '/images/partners/parvi.png',
    link: 'https://www.grupoparvi.com.br'
  },
  {
    name: 'C&A',
    logo: '/images/partners/cea.png',
    link: 'https://www.cea.com.br'
  }
]

export function PartnersGrid() {
  return (
    <section className="w-full bg-white">
      <div className="container mx-auto max-w-6xl py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Empresas que apoiam nossa causa
          </h2>
          <p className="text-gray-600">
            Conheça as empresas que acreditam no nosso trabalho e nos ajudam a transformar vidas através da educação e tecnologia.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-items-center px-4">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[240px] h-[120px] relative group"
            >
              <div className="absolute inset-0 rounded-xl bg-white shadow-sm group-hover:shadow-md transition-shadow duration-300 p-6">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={`Logo ${partner.name}`}
                    fill
                    className="object-contain p-2"
                    sizes="240px"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
} 