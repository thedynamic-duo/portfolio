"use client";
import { useState } from 'react';
import Image from 'next/image';
import Navigation from '../components/Navigation';

const projetos = [
  {
    titulo: 'App de Delivery',
    descricao: 'Aplicativo completo de delivery com rastreamento em tempo real, pagamentos integrados e painel administrativo.',
    imagens: [
      '/projetos/delivery-1.jpg',
      '/projetos/delivery-2.jpg',
      '/projetos/delivery-3.jpg',
      '/projetos/delivery-4.jpg',
      '/projetos/delivery-5.jpg',
    ],
    tecnologias: ['React Native', 'Node.js', 'Firebase', 'Stripe'],
  },
  {
    titulo: 'Dashboard Analytics',
    descricao: 'Dashboard para visualização de métricas de negócio em tempo real, com gráficos interativos e exportação de relatórios.',
    imagens: [
      '/projetos/analytics-1.jpg',
      '/projetos/analytics-2.jpg',
      '/projetos/analytics-3.jpg',
    ],
    tecnologias: ['Next.js', 'D3.js', 'Tailwind', 'Supabase'],
  },
  {
    titulo: 'E-commerce Moderno',
    descricao: 'Plataforma de e-commerce responsiva, com checkout otimizado, integração com gateways de pagamento e painel de vendas.',
    imagens: [
      '/projetos/ecommerce-1.jpg',
      '/projetos/ecommerce-2.jpg',
      '/projetos/ecommerce-3.jpg',
      '/projetos/ecommerce-4.jpg',
    ],
    tecnologias: ['React', 'Node.js', 'MongoDB', 'Vercel'],
  },
];


function Carousel({ imagens }: { imagens: string[] }) {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex(i => (i === 0 ? imagens.length - 1 : i - 1));
  const next = () => setIndex(i => (i === imagens.length - 1 ? 0 : i + 1));
  return (
    <div className="relative w-full h-64 md:h-80 bg-gray-900 rounded-xl overflow-hidden flex items-center justify-center">
      <button onClick={prev} className="absolute left-2 z-10 bg-black/60 hover:bg-purple-600 text-white p-2 rounded-full transition-colors">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
      </button>
      <Image src={imagens[index]} alt="Projeto" fill className="object-cover transition-all duration-300" />
      <button onClick={next} className="absolute right-2 z-10 bg-black/60 hover:bg-purple-600 text-white p-2 rounded-full transition-colors">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
      </button>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {imagens.map((_, i) => (
          <span key={i} className={`w-2 h-2 rounded-full ${i === index ? 'bg-purple-500' : 'bg-white/30'}`}></span>
        ))}
      </div>
    </div>
  );
}

export default function ProjetosPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-950 text-white py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-center">
          <span className="text-purple-500">Nossos</span> Projetos
        </h1>
        <div className="flex flex-col gap-16 max-w-4xl mx-auto">
          {projetos.map((projeto, idx) => (
            <div key={idx} className="bg-gray-900 rounded-2xl shadow-xl p-8 flex flex-col gap-6">
              <Carousel imagens={projeto.imagens} />
              <h2 className="text-2xl md:text-3xl font-bold text-purple-400">{projeto.titulo}</h2>
              <p className="text-gray-300 text-lg">{projeto.descricao}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {projeto.tecnologias.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-purple-700/30 text-purple-300 rounded-full text-sm font-semibold border border-purple-700/50">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
} 