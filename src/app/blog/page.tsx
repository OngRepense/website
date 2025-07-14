'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

// Dados simulados dos posts do blog
const blogPosts = [
  {
    id: 1,
    title: "A importância da educação tecnológica na transformação social",
    excerpt: "Descubra como a tecnologia pode ser uma ferramenta poderosa para promover mudanças positivas em comunidades vulneráveis.",
    image: "/images/blog/blog-post-1.jpg",
    category: "Educação",
    date: "15 Mar 2024",
    readTime: "5 min"
  },
  {
    id: 2,
    title: "Como o voluntariado pode impactar sua vida e a de outros",
    excerpt: "Conheça histórias inspiradoras de voluntários que estão fazendo a diferença em nossa comunidade.",
    image: "/images/blog/blog-post-2.jpg",
    category: "Voluntariado",
    date: "12 Mar 2024",
    readTime: "4 min"
  },
  {
    id: 3,
    title: "Inovação social: criando soluções para desafios comunitários",
    excerpt: "Explore como a inovação social está transformando a maneira como abordamos problemas sociais complexos.",
    image: "/images/blog/blog-post-3.jpg",
    category: "Inovação",
    date: "10 Mar 2024",
    readTime: "6 min"
  },
  {
    id: 4,
    title: "O poder da colaboração entre ONGs e empresas",
    excerpt: "Veja como parcerias estratégicas podem amplificar o impacto social e criar mudanças duradouras.",
    image: "/images/blog/blog-post-4.jpg",
    category: "Parcerias",
    date: "8 Mar 2024",
    readTime: "4 min"
  },
  {
    id: 5,
    title: "Tecnologia inclusiva: democratizando o acesso ao conhecimento",
    excerpt: "Conheça nossas iniciativas para tornar a tecnologia mais acessível a todas as pessoas.",
    image: "/images/blog/blog-post-5.jpg",
    category: "Tecnologia",
    date: "5 Mar 2024",
    readTime: "5 min"
  }
]

const categories = [
  "Todos",
  "Educação",
  "Tecnologia",
  "Voluntariado",
  "Inovação",
  "Parcerias"
]

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "Todos" || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="flex flex-col w-full min-h-screen bg-orange-50">
      {/* Hero Section */}
      <section className="w-full pt-32 pb-16">
        <div className="text-center">
          <h1 className="text-4xl lg:text-[2.75rem] font-bold leading-tight text-[#FF6B00]">
            Blog Repense
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto px-4">
            Compartilhando conhecimento e histórias inspiradoras sobre educação, tecnologia e transformação social.
          </p>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="w-full bg-white rounded-t-3xl flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Buscar artigos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                />
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? "bg-[#FF6B00] text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <Link href={`/blog/${post.id}`}>
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm text-[#FF6B00] font-medium">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">
                        {post.date}
                      </span>
                      <span className="text-sm text-gray-500">
                        {post.readTime} leitura
                      </span>
                    </div>
                    <h2 className="text-xl font-bold mb-2 text-gray-900 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-4">
                      <span className="text-[#FF6B00] font-medium inline-flex items-center">
                        Ler mais
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Nenhum artigo encontrado
              </h3>
              <p className="text-gray-600">
                Tente ajustar seus filtros ou termos de busca.
              </p>
            </div>
          )}

          {/* Newsletter Section */}
          <div className="mt-20 bg-orange-50 rounded-2xl p-8 md:p-12">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                Inscreva-se em nossa newsletter
              </h2>
              <p className="text-gray-600 mb-8">
                Receba novos artigos e atualizações sobre nossos projetos diretamente em seu e-mail.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                />
                <Button className="bg-[#FF6B00] hover:bg-[#E65A00] text-white">
                  Inscrever-se
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 