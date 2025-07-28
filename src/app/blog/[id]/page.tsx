'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

// Dados simulados dos posts do blog
const blogPosts = [
  {
    id: 1,
    title: "A Tecnologia como Catalisador da Transformação Social: O Compromisso da ONG Repense com a Responsabilidade Educacional",
    excerpt: "Descubra como a tecnologia pode ser uma ferramenta poderosa para promover mudanças positivas em comunidades vulneráveis.",
    content: `
      <div class="text-center mb-12">
        <div class="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
          <span class="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
          Educação & Tecnologia
        </div>
        <p class="text-lg text-gray-600 italic">Como a tecnologia está transformando vidas e comunidades através da educação</p>
      </div>

      <h2>Introdução</h2>
      
      <p>A tecnologia, em sua constante evolução, apresenta-se como uma <strong>força transformadora</strong> com o potencial de redefinir realidades e impulsionar o progresso social. Longe de ser um mero conjunto de ferramentas digitais, ela representa um vetor de oportunidades e um pilar fundamental para o desenvolvimento humano. A inteligência artificial, em particular, emerge como um campo promissor, capaz de otimizar processos e gerar soluções inovadoras para desafios complexos.</p>
      
      <blockquote>
        "A tecnologia, quando utilizada com propósito e humanidade, é a chave para uma verdadeira transformação social."
      </blockquote>
      
      <p>Nesse cenário de profunda transformação, a <strong>ONG Repense</strong> assume um papel de vanguarda. Com um compromisso inabalável com a responsabilidade social, a Repense atua no coração de comunidades vulneráveis, demonstrando que a educação tecnológica, aliada ao entendimento e aplicação da inteligência artificial, transcende a esfera do privilégio para se consolidar como um direito fundamental.</p>
      
      <p>A missão da ONG vai além do ensino de habilidades técnicas; ela se concentra em empoderar indivíduos, abrir caminhos para um futuro mais equitativo e construir pontes onde antes existiam barreiras. A Repense compreende que a tecnologia, quando utilizada com propósito e humanidade, é a chave para uma verdadeira transformação social, com um foco inabalável no impacto positivo e na formação de cidadãos conscientes e proativos.</p>

      <h2>Desmistificando a Tecnologia: Acessibilidade e Empoderamento</h2>
      
      <p>A percepção da tecnologia muitas vezes é permeada por uma aura de complexidade, associada a termos técnicos e a um universo restrito a especialistas. Contudo, a realidade é que a tecnologia permeia nosso cotidiano de maneira intrínseca, desde as interações mais simples até as mais complexas. O smartphone, por exemplo, ilustra a ubiquidade da tecnologia, sendo um dispositivo multifuncional que facilita a comunicação, o acesso à informação e a realização de diversas tarefas diárias. A familiaridade com tais ferramentas, mesmo sem o domínio de seus mecanismos internos, demonstra a capacidade humana de integrar a tecnologia em suas vidas.</p>
      
      <p>Fundamentalmente, a tecnologia constitui uma ferramenta. Assim como um instrumento físico é concebido para uma finalidade específica, as soluções tecnológicas são desenvolvidas para processar informações e otimizar processos. O acesso e a orientação adequada são, portanto, cruciais para que indivíduos de todas as esferas sociais possam usufruir plenamente de seus benefícios. A ONG Repense, com sua abordagem séria e comprometida, atua precisamente nesse ponto, desmistificando a complexidade tecnológica e promovendo sua acessibilidade. A organização transforma a percepção de um campo restrito em um domínio aberto ao aprendizado e ao desenvolvimento pessoal, capacitando os indivíduos a utilizar a tecnologia como um recurso estratégico para aprimorar suas vidas e contribuir para o progresso coletivo.</p>

      <h2>Os Projetos da Repense em Ação: Onde a Tecnologia Encontra o Compromisso Social</h2>
      
      <p>Com a compreensão de que a tecnologia é um instrumento de empoderamento, a ONG Repense materializa seu compromisso social por meio de projetos concretos que transformam realidades. A atuação da Repense transcende a retórica da inovação social, consolidando-a em iniciativas que demonstram o potencial da tecnologia como catalisador para o desenvolvimento humano e comunitário.</p>
      
      <div class="grid md:grid-cols-1 gap-8 my-12">
        <div class="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-2xl border-l-4 border-blue-400">
          <h3 class="text-xl font-bold text-blue-900 mb-4 flex items-center">
            <span class="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Reforço Escolar Comunitário
          </h3>
          <p class="text-blue-800 leading-relaxed">Em um contexto onde o acesso a recursos educacionais de qualidade é frequentemente limitado, este projeto oferece suporte pedagógico a crianças e adolescentes em situação de vulnerabilidade. A integração da tecnologia no processo de aprendizagem, através de softwares educativos, plataformas interativas e introdução à programação, não apenas enriquece o conteúdo, mas também estimula o pensamento crítico e a capacidade de inovação.</p>
          <p class="text-blue-800 leading-relaxed mt-4">A Repense, por meio desta iniciativa, capacita os alunos a questionar o status quo e a utilizar a tecnologia como uma ferramenta para abordar desafios reais em suas comunidades, fomentando a cidadania ativa e o engajamento social.</p>
        </div>

        <div class="bg-gradient-to-r from-orange-50 to-orange-100 p-8 rounded-2xl border-l-4 border-orange-400">
          <h3 class="text-xl font-bold text-orange-900 mb-4 flex items-center">
            <span class="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Conecteai
          </h3>
          <p class="text-orange-800 leading-relaxed">Representa outra faceta do compromisso da Repense com a dignidade humana. Em um cenário de desafios no mercado de trabalho, esta agência de emprego solidária emprega a inteligência artificial para otimizar a conexão entre indivíduos e oportunidades de trabalho digno.</p>
          <p class="text-orange-800 leading-relaxed mt-4">A IA atua como um recurso estratégico, aprimorando a correspondência entre perfis e vagas, e identificando as melhores oportunidades com base nas competências e aspirações dos candidatos. Essa otimização permite que a equipe da Repense dedique maior atenção ao acompanhamento humano, oferecendo mentorias e treinamentos personalizados.</p>
        </div>

        <div class="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-2xl border-l-4 border-green-400">
          <h3 class="text-xl font-bold text-green-900 mb-4 flex items-center">
            <span class="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Laboratório de Inovação
          </h3>
          <p class="text-green-800 leading-relaxed">Constitui o epicentro da pesquisa e desenvolvimento da Repense. Neste ambiente, problemas sociais são meticulosamente analisados e transformados em desafios tecnológicos a serem superados. Em colaboração com instituições acadêmicas e empresas, o laboratório desenvolve soluções inovadoras que emergem das necessidades intrínsecas das comunidades.</p>
          <p class="text-green-800 leading-relaxed mt-4">Seja no desenvolvimento de aplicativos com IA para monitoramento de saúde em regiões remotas, plataformas inteligentes para otimização da distribuição de recursos, ou sistemas baseados em IA para facilitar o acesso à informação e à educação personalizada, cada projeto é concebido para gerar um impacto social positivo e duradouro.</p>
        </div>
      </div>

      <blockquote class="bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-400 p-6 rounded-r-xl">
        <p class="text-purple-800 font-medium">A ciência e a tecnologia, com a inteligência artificial como um motor propulsor, unem-se à empatia, reafirmando que a inovação não se restringe a ganhos financeiros, mas se traduz em vidas transformadas.</p>
      </blockquote>

      <h2>O Futuro Repensado: Inovação, Cidadania e o Papel Transformador da Tecnologia</h2>
      
      <p>A confluência da tecnologia e do compromisso social, conforme demonstrado pela Repense, culmina em uma redefinição do futuro. A educação tecnológica, no escopo da atuação da ONG, transcende a mera aquisição de habilidades operacionais; ela se configura como um processo de capacitação para o pensamento inovador, o questionamento crítico e a proatividade cidadã, impulsionado pelas vastas possibilidades da inteligência artificial.</p>
      
      <p>Consideremos o percurso de um jovem em uma comunidade vulnerável que, através do apoio educacional da Repense, descobre o potencial da programação e das aplicações da IA. Essa experiência não apenas amplia seu horizonte profissional, mas também o capacita a visualizar o mundo sob uma nova perspectiva, onde a inteligência artificial se torna uma aliada estratégica. Cada linha de código e cada algoritmo de IA representam uma oportunidade de construir soluções inovadoras, de abordar problemas sociais e de amplificar vozes historicamente marginalizadas. A capacitação tecnológica, com um enfoque robusto em IA, não se limita a um certificado; ela se traduz em um passaporte para um universo de oportunidades, permitindo que o indivíduo se torne um desenvolvedor de soluções de IA para o bem social, um designer de interfaces inteligentes, um empreendedor que otimiza processos com IA, ou um inovador capaz de conceber soluções para desafios prementes, como a escassez hídrica, por meio de modelos preditivos de IA. A autonomia e a capacidade de utilizar a tecnologia em benefício próprio e da comunidade tornam-se realidades tangíveis, consolidando o exercício pleno da cidadania.</p>
      
      <p>Adicionalmente, a inovação social, catalisada pela tecnologia e pela inteligência artificial, é um pilar fundamental para a transformação de comunidades inteiras. O Laboratório de Inovação da Repense funciona como um polo de convergência onde a criatividade, o conhecimento técnico e a IA se unem para desenvolver soluções adaptadas às realidades locais. A expertise dos moradores da comunidade, combinada com o domínio das ferramentas tecnológicas e de IA, os posiciona como protagonistas de sua própria evolução. Eles não aguardam soluções externas; eles as concebem, com base em sua vivência e em uma visão prospectiva. A tecnologia, com a IA na vanguarda, confere voz e poder a quem historicamente esteve à margem, evidenciando que a inovação genuína emerge da necessidade e da colaboração, e que a cidadania se manifesta também na capacidade de moldar o futuro com proatividade e discernimento.</p>
      
      <p>Em um cenário global cada vez mais interconectado, a educação tecnológica, com a inteligência artificial como um de seus pilares, representa um farol de esperança. Ela viabiliza a conexão das comunidades vulneráveis não apenas à internet, mas a um futuro repleto de possibilidades, onde a criatividade é ilimitada e a capacidade de resolver problemas é tão abrangente quanto a imaginação humana. É a comprovação de que, com acesso, oportunidade e o domínio das fronteiras tecnológicas emergentes, qualquer indivíduo pode se tornar um agente de mudança, transformando a realidade com suas próprias mãos e, evidentemente, com o auxílio de códigos e algoritmos inteligentes, sempre pautado por um olhar crítico e propositivo sobre o mundo e seu papel intrínseco nele.</p>

      <h2>Conclusão: O Compromisso Inabalável da Repense com a Transformação Social</h2>
      
      <div class="bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100 p-8 rounded-2xl border-2 border-orange-200 mb-8">
        <p class="text-lg text-gray-800 leading-relaxed mb-6">Ao final desta análise, torna-se evidente que a tecnologia, e em particular a inteligência artificial, transcende a mera funcionalidade instrumental. Seu verdadeiro poder reside na intencionalidade de seu uso, na humanidade que a permeia e no propósito social que a orienta.</p>
        
        <p class="text-lg text-gray-800 leading-relaxed mb-6">A <strong>ONG Repense</strong> emerge como um paradigma nesse contexto, demonstrando a viabilidade de empregar a inovação e a IA para edificar uma sociedade mais justa, inclusiva e equitativa, com um foco inabalável no impacto social.</p>
      </div>
      
      <p>A Repense, por meio de sua atuação, reitera que a educação tecnológica, incluindo o domínio da inteligência artificial, não constitui um privilégio, mas um <strong>direito universal</strong>. O conhecimento digital, em sua essência, não se restringe à programação, mas se expande para o empoderamento.</p>
      
      <div class="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-xl my-8">
        <h3 class="text-lg font-bold text-blue-900 mb-3">A pergunta que se impõe é:</h3>
        <p class="text-blue-800 text-xl font-medium">Qual o seu papel nessa transformação?</p>
      </div>
      
      <p>A ONG Repense convida à reflexão e à ação. A organização está de portas abertas para aqueles que compartilham desse propósito:</p>
      
      <ul class="list-none space-y-4 my-8">
        <li class="flex items-start">
          <span class="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</span>
          <div>
            <strong class="text-gray-900">Voluntariado:</strong> Dedicando tempo e conhecimento
          </div>
        </li>
        <li class="flex items-start">
          <span class="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</span>
          <div>
            <strong class="text-gray-900">Doações financeiras:</strong> Que permitem a continuidade e expansão dos projetos
          </div>
        </li>
        <li class="flex items-start">
          <span class="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</span>
          <div>
            <strong class="text-gray-900">Disseminação:</strong> Inspirando outros a reconhecerem o poder da tecnologia aliada à humanidade
          </div>
        </li>
      </ul>
      
      <blockquote class="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-400 p-6 rounded-r-xl my-8">
        <p class="text-green-800 font-medium text-lg">Em última análise, a verdadeira revolução tecnológica não se manifesta nos avanços mais recentes de hardware ou software. Ela reside na capacidade de empregar essa tecnologia, com a inteligência artificial como aliada estratégica, para impactar vidas, construir conexões, acender a chama da esperança e, coletivamente, repensar e edificar um futuro onde a humanidade, a tecnologia e a inteligência artificial caminham em sinergia, rumo a um amanhã mais promissor e socialmente responsável.</p>
      </blockquote>
    `,
    image: "/images/blog/blog-post-1.jpg",
    category: "Educação",
    date: "15 Mar 2024",
    readTime: "8 min",
    author: "Dmeval Neto",
    authorAvatar: "/images/foto-fundador.png"
  },
  {
    id: 2,
    title: "Como o voluntariado pode impactar sua vida e a de outros",
    excerpt: "Conheça histórias inspiradoras de voluntários que estão fazendo a diferença em nossa comunidade.",
    content: "Conteúdo do post 2...",
    image: "/images/blog/blog-post-2.jpg",
    category: "Voluntariado",
    date: "12 Mar 2024",
    readTime: "4 min",
    author: "Equipe Repense",
    authorAvatar: "/images/perfil-elaine.png"
  },
  {
    id: 3,
    title: "Inovação social: criando soluções para desafios comunitários",
    excerpt: "Explore como a inovação social está transformando a maneira como abordamos problemas sociais complexos.",
    content: "Conteúdo do post 3...",
    image: "/images/blog/blog-post-3.jpg",
    category: "Inovação",
    date: "10 Mar 2024",
    readTime: "6 min",
    author: "Equipe Repense",
    authorAvatar: "/images/perfil-elaine.png"
  },
  {
    id: 4,
    title: "O poder da colaboração entre ONGs e empresas",
    excerpt: "Como parcerias estratégicas estão mudando o mundo e criando impacto social duradouro",
    content: `
      <div class="text-center mb-12">
        <div class="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
          <span class="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
          Parcerias & Impacto Social
        </div>
        <p class="text-lg text-gray-600 italic">Como parcerias estratégicas estão mudando o mundo e criando impacto social duradouro</p>
      </div>

      <p>Já parou pra pensar como o mundo pode mudar quando diferentes forças se unem? ONGs e empresas têm se aproximado cada vez mais, e isso não é à toa: essa parceria tem mostrado um <strong>poder transformador real</strong>, criando soluções que impactam comunidades inteiras e geram valor para todos os envolvidos.</p>
      
      <p>Neste post, você vai entender por que a colaboração entre o setor social e o setor privado é uma das estratégias mais promissoras para quem quer fazer a diferença de verdade.</p>

      <hr class="my-8 border-gray-200">

      <h2>O que cada um traz pra mesa?</h2>
      
      <p>As ONGs conhecem as necessidades das comunidades como ninguém. Estão ali no dia a dia, escutando, acolhendo, agindo. Já as empresas têm recursos, estrutura, pessoas qualificadas e, muitas vezes, alcance nacional ou até global. Quando essas duas potências se encontram, o resultado é um só: <strong>impacto social em escala!</strong></p>
      
      <p>Essa união permite:</p>
      
      <ul class="list-none space-y-3 my-6">
        <li class="flex items-start">
          <span class="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">•</span>
          <div><strong>Mais recursos para projetos sociais</strong></div>
        </li>
        <li class="flex items-start">
          <span class="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">•</span>
          <div><strong>Acesso a conhecimento técnico e ferramentas de gestão</strong></div>
        </li>
        <li class="flex items-start">
          <span class="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">•</span>
          <div><strong>Visibilidade ampliada para as causas sociais</strong></div>
        </li>
        <li class="flex items-start">
          <span class="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">•</span>
          <div><strong>Ações mais sustentáveis e com maior alcance</strong></div>
        </li>
      </ul>

      <hr class="my-8 border-gray-200">

      <h2>Benefício mútuo: todo mundo sai ganhando</h2>
      
      <p>Sim, essa parceria é <strong>ganha-ganha</strong>. As ONGs conseguem ampliar seus projetos e atender mais pessoas. As empresas, por outro lado, fortalecem sua imagem, se conectam com causas relevantes e ainda motivam seus colaboradores.</p>
      
      <blockquote class="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-400 p-6 rounded-r-xl my-8">
        <p class="text-blue-800 font-medium text-lg">Hoje, o consumidor quer mais do que um bom produto — ele quer saber o que aquela marca apoia. Propósito importa. E muito.</p>
      </blockquote>

      <hr class="my-8 border-gray-200">

      <h2>Exemplos que fazem brilhar os olhos ✨</h2>
      
      <p>Quer ver isso funcionando na prática? Aqui vão algumas ideias:</p>

      <div class="grid md:grid-cols-1 gap-8 my-12">
        <div class="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-2xl border-l-4 border-green-400">
          <h3 class="text-xl font-bold text-green-900 mb-4 flex items-center">
            <span class="text-2xl mr-3">💰</span>
            Campanhas de arrecadação solidária
          </h3>
          <p class="text-green-800 leading-relaxed">Marcas que destinam parte das vendas para apoiar projetos sociais e ainda divulgam a causa nas redes, aumentando a conscientização.</p>
        </div>

        <div class="bg-gradient-to-r from-purple-50 to-purple-100 p-8 rounded-2xl border-l-4 border-purple-400">
          <h3 class="text-xl font-bold text-purple-900 mb-4 flex items-center">
            <span class="text-2xl mr-3">👩🏽‍🏫</span>
            Programas de voluntariado corporativo
          </h3>
          <p class="text-purple-800 leading-relaxed">Funcionários de empresas que doam tempo, talento e conhecimento para fortalecer o trabalho de ONGs.</p>
        </div>

        <div class="bg-gradient-to-r from-orange-50 to-orange-100 p-8 rounded-2xl border-l-4 border-orange-400">
          <h3 class="text-xl font-bold text-orange-900 mb-4 flex items-center">
            <span class="text-2xl mr-3">📚</span>
            Apoio à educação e geração de renda
          </h3>
          <p class="text-orange-800 leading-relaxed">Empresas que apoiam iniciativas que formam jovens, mulheres ou pessoas em situação de vulnerabilidade para o mercado de trabalho ou para empreender.</p>
        </div>
      </div>

      <hr class="my-8 border-gray-200">

      <h2>O que faz uma parceria dar certo?</h2>
      
      <p>O segredo está no <strong>alinhamento de valores</strong>. Não basta uma empresa apoiar qualquer causa só pra "pegar bem". A conexão precisa ser real. É preciso diálogo, escuta, planejamento e objetivos em comum.</p>
      
      <p>Quando ONG e empresa acreditam no mesmo propósito e trabalham juntas com respeito e transparência, o impacto vai muito além do esperado.</p>

      <hr class="my-8 border-gray-200">

      <h2>E aí, vamos colaborar?</h2>
      
      <p>Se você faz parte de uma ONG, que tal começar a olhar para o setor privado como um aliado estratégico? Se você trabalha em uma empresa, talvez esteja na hora de olhar com mais atenção para o impacto social que sua marca pode gerar.</p>
      
      <div class="bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100 p-8 rounded-2xl border-2 border-orange-200 mb-8">
        <p class="text-lg text-gray-800 leading-relaxed">Transformar o mundo pode parecer uma tarefa enorme — e é mesmo. Mas quando a gente se une, cada passo tem muito mais força.</p>
      </div>
      
      <div class="text-center">
        <p class="text-xl font-bold text-gray-900 mb-4">Vamos juntos? 💪🏽🌍</p>
      </div>
    `,
    image: "/images/blog/blog-post-4.jpg",
    category: "Parcerias",
    date: "8 Mar 2024",
    readTime: "5 min",
    author: "Sini Chaves",
    authorAvatar: "/images/perfil-sini.png"
  },
  {
    id: 5,
    title: "Tecnologia inclusiva: democratizando o acesso ao conhecimento",
    excerpt: "Conheça nossas iniciativas para tornar a tecnologia mais acessível a todas as pessoas.",
    content: "Conteúdo do post 5...",
    image: "/images/blog/blog-post-5.jpg",
    category: "Tecnologia",
    date: "5 Mar 2024",
    readTime: "5 min",
    author: "Equipe Repense",
    authorAvatar: "/images/perfil-elaine.png"
  }
]

export default function BlogPost() {
  const params = useParams()
  const postId = params?.id ? parseInt(params.id as string) : null
  
  const post = blogPosts.find(p => p.id === postId)
  
  if (!postId || !post) {
    return (
      <div className="min-h-screen bg-orange-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post não encontrado</h1>
          <Link href="/blog">
            <Button className="bg-[#FF6B00] hover:bg-[#E65A00] text-white">
              Voltar ao blog
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Hero Section */}
      <section className="w-full pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <Link href="/blog" className="inline-flex items-center text-[#FF6B00] hover:text-[#E65A00] mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Voltar ao blog
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-[#FF6B00] text-white text-sm font-medium rounded-full">
                {post.category}
              </span>
              <span className="text-gray-500 text-sm">{post.date}</span>
              <span className="text-gray-500 text-sm">{post.readTime} leitura</span>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Author Info */}
          <div className="flex items-center gap-4 mb-8">
            <Image
              src={post.authorAvatar}
              alt={post.author}
              width={48}
              height={48}
              className="rounded-full"
            />
            <div>
              <p className="font-semibold text-gray-900">{post.author}</p>
              <p className="text-gray-600 text-sm">{post.date}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="w-full bg-white rounded-t-3xl flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-16">
          {/* Featured Image */}
          <div className="relative h-64 md:h-96 mb-12 rounded-2xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Article Body */}
          <article className="max-w-none">
            <div 
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="text-gray-700 leading-relaxed prose prose-lg max-w-none
                prose-headings:text-gray-900 prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-orange-200 prose-h2:pb-2
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-gray-800
                prose-p:text-gray-700 prose-p:leading-7 prose-p:mb-6
                prose-strong:text-gray-900 prose-strong:font-semibold
                prose-ul:my-6 prose-ol:my-6
                prose-li:text-gray-700 prose-li:mb-2
                prose-blockquote:border-l-4 prose-blockquote:border-orange-400 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600
                prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline
                prose-img:rounded-lg prose-img:shadow-md
                [&>*:first-child]:mt-0
                [&>h2:first-child]:mt-0
                [&>p:first-child]:mt-0"
            />
          </article>

          {/* Share Section */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Compartilhe este artigo</h3>
            <div className="flex gap-4">
              <Button variant="outline" className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
                Twitter
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
                Facebook
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </Button>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold mb-8">Artigos relacionados</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts
                .filter(p => p.id !== post.id)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`}>
                    <article className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-sm text-[#FF6B00] font-medium">
                          {relatedPost.category}
                        </span>
                        <span className="text-sm text-gray-500">
                          {relatedPost.readTime} leitura
                        </span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                        {relatedPost.title}
                      </h4>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </article>
                  </Link>
                ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-orange-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Quer fazer parte da transformação?
            </h3>
            <p className="text-gray-600 mb-6">
              Junte-se à ONG Repense e ajude-nos a levar educação tecnológica para mais pessoas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato">
                <Button className="bg-[#FF6B00] hover:bg-[#E65A00] text-white">
                  Entre em contato
                </Button>
              </Link>
              <Link href="/projetos">
                <Button variant="outline" className="border-[#FF6B00] text-[#FF6B00] hover:bg-[#FF6B00] hover:text-white">
                  Conheça nossos projetos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 