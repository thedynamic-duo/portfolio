import React from 'react';

export default function WhyWorkWithUs() {
  return (
    <section className="relative py-24 bg-gray-950 text-white overflow-hidden">
      {/* Elementos gráficos */}
      <div className="absolute left-0 top-10 w-32 h-32 bg-purple-700 opacity-30 rounded-lg -z-10"></div>
      <div className="absolute right-0 bottom-0 w-40 h-40 border-4 border-white rounded-lg opacity-40 -z-10"></div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
        {/* Texto */}
        <div className="flex-1 pl-0 md:pl-16 lg:pl-24">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="text-purple-500">Why Work</span> With Us
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-purple-400">
            Samantha & Renan — Full Stack Developers
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-xl">
            We are a dynamic duo passionate about building robust, scalable, and beautiful digital solutions. Our combined expertise brings together the best of design, development, and user experience.
          </p>
          <ul className="mb-8 space-y-3">
            <li className="flex items-center gap-3">
              <span className="inline-block w-3 h-3 bg-purple-500 rounded-full"></span>
              <span>Over 5 years of combined experience in web and mobile development</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="inline-block w-3 h-3 bg-purple-500 rounded-full"></span>
              <span>Agile, communicative, and focused on results</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="inline-block w-3 h-3 bg-purple-500 rounded-full"></span>
              <span>Pixel-perfect UI with strong backend architecture</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="inline-block w-3 h-3 bg-purple-500 rounded-full"></span>
              <span>We care about your business goals and user experience</span>
            </li>
          </ul>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-purple-500 text-white rounded-md font-semibold hover:bg-purple-600 transition-colors shadow-md"
          >
            Let's Talk
          </a>
        </div>
        {/* Elementos gráficos ou foto (opcional) */}
        <div className="flex-1 flex items-center justify-center relative">
          <div className="w-64 h-64 bg-purple-800 opacity-20 rounded-2xl absolute -top-8 -right-8 -z-10"></div>
          <div className="w-56 h-56 border-4 border-purple-500 rounded-2xl absolute top-12 right-12 -z-10"></div>
          {/* Você pode colocar uma foto de vocês aqui, se quiser */}
        </div>
      </div>
    </section>
  );
} 