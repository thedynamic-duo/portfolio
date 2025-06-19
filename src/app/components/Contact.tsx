import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Depoimentos fictícios
  const testimonials = [
    {
      text: "Trabalhar com Renan e Samantha foi uma experiência incrível! Eles entregaram tudo com muita qualidade e atenção aos detalhes.",
      name: "João Silva",
      role: "CTO na TechX",
      img: "/samantha.png"
    },
    {
      text: "Profissionais super dedicados, criativos e sempre prontos para ajudar. Recomendo muito!",
      name: "Maria Oliveira",
      role: "Product Manager na Inova",
      img: "/renan.png"
    },
    {
      text: "O projeto ficou acima das expectativas. Comunicação clara e entrega rápida.",
      name: "Carlos Souza",
      role: "Empreendedor",
      img: "/samantha.png"
    }
  ];

  return (
    <section id="contact" className="w-full px-0 bg-[#1a1a1e] h-[1000px] mb-10">
      <div className="grid md:grid-cols-2 gap-0 items-stretch h-full min-h-0">
        {/* Lado esquerdo: Formulário */}
        <div className="max-w-2xl w-full py-[120px] px-12 ml-24 mt-24 mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-left">
            <span className="text-purple-500">Contact</span> Us
          </h2>
          <div className="flex justify-start mb-6">
            <div className="w-24 h-1 bg-white rounded" />
          </div>
          <p className="text-left text-cyan-400 mb-10 font-medium">Have a question or want to work together?</p>
          <form className="p-0 rounded-none shadow-none flex flex-col gap-4 bg-transparent">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={e => setName(e.target.value)}
              style={{ outline: 'none' }}
              className="w-full bg-gray-800 text-gray-200 placeholder-gray-400 py-4 px-4 rounded-none outline-none focus:outline-none ring-0 focus:ring-2 focus:ring-cyan-400 transition"
            />
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{ outline: 'none' }}
              className="w-full bg-gray-800 text-gray-200 placeholder-gray-400 py-4 px-4 rounded-none outline-none focus:outline-none ring-0 focus:ring-2 focus:ring-cyan-400 transition"
            />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              rows={5}
              style={{ outline: 'none' }}
              className="w-full bg-gray-800 text-gray-200 placeholder-gray-400 py-4 px-4 rounded-none resize-none outline-none focus:outline-none ring-0 focus:ring-2 focus:ring-cyan-400 transition"
            />
            <div className="flex justify-end">
              <button
                type="submit"
                className="border-2 border-white text-white px-8 py-2 rounded-none font-medium transition hover:bg-white hover:text-[#232428]"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
        
        {/* Lado direito: Depoimentos */}
        <div className="grid grid-cols-2 grid-rows-2 gap-0 h-full w-full min-h-0">
          {/* Depoimento grande à esquerda (row-span-2) */}
          <div className="bg-gray-800 border-t-4 border-purple-500 border-r border-gray-300/30 h-full w-full flex flex-col justify-start col-span-1 row-span-2 p-8">
            {/* Primeira linha: apóstrofo e imagem */}
            <div className="flex items-start justify-between mb-4">
              <span className="text-5xl text-purple-500 font-bold leading-none">“</span>
              <Image src={testimonials[0].img} alt={testimonials[0].name} width={48} height={48} className="w-12 h-12 rounded-full border-2 border-purple-500 object-cover" />
            </div>
            {/* Segunda linha: texto */}
            <div className="text-gray-200 mb-2 pb-0">{testimonials[0].text}</div>
            {/* Terceira linha: nome e cargo */}
            <div className="pt-10">
              <div className="font-bold text-white">{testimonials[0].name}</div>
              <div className="text-xs text-gray-400">{testimonials[0].role}</div>
            </div>
          </div>
          {/* Depoimentos menores à direita */}
          <div className="bg-gray-800 border-t-4 border-purple-500 h-full w-full flex flex-col justify-start col-span-1 row-span-1 p-8">
            <div className="flex items-start justify-between mb-4">
              <span className="text-5xl text-purple-500 font-bold leading-none">“</span>
              <Image src={testimonials[1].img} alt={testimonials[1].name} width={48} height={48} className="w-12 h-12 rounded-full border-2 border-purple-500 object-cover" />
            </div>
            <div className="text-gray-200 mb-2 pb-0">{testimonials[1].text}</div>
            <div className="pt-10">
              <div className="font-bold text-white">{testimonials[1].name}</div>
              <div className="text-xs text-gray-400">{testimonials[1].role}</div>
            </div>
          </div>
          <div className="bg-gray-800 border-t-4 border-purple-500 h-full w-full flex flex-col justify-start col-span-1 row-span-1 p-8">
            <div className="flex items-start justify-between mb-4">
              <span className="text-5xl text-purple-500 font-bold leading-none">“</span>
              <Image src={testimonials[2].img} alt={testimonials[2].name} width={48} height={48} className="w-12 h-12 rounded-full border-2 border-purple-500 object-cover" />
            </div>
            <div className="text-gray-200 mb-2 pb-0">{testimonials[2].text}</div>
            <div className="pt-10">
              <div className="font-bold text-white">{testimonials[2].name}</div>
              <div className="text-xs text-gray-400">{testimonials[2].role}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 