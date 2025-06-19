"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Contact from './components/Contact'
import TechIcon from './components/TechIcon'
import StarsBackground from './components/StarsBackground'
import WhyWorkWithUs from './components/WhyWorkWithUs'
import OurExpertise from './components/OurExpertise'
import OurStory from './components/OurStory'
import ParallaxBackground from './components/ParallaxBackground'
import ProjectCarousel from './components/ProjectCarousel'
import Pricing from './components/Pricing'
import { motion } from 'framer-motion';

const technologies = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Python',
  'Django',
  'Flutter',
  'iOS',
  'Android',
  'AWS',
  'Docker',
  'Git',
  'MongoDB',
  'PostgreSQL'
];

export default function Home() {
  // Parallax state for each side
  const [parallaxLeft, setParallaxLeft] = useState({ x: 0, y: 0 });
  const [parallaxRight, setParallaxRight] = useState({ x: 0, y: 0 });
  // Estado para controlar a visibilidade do mouse
  const [showMouse, setShowMouse] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const x = (e.clientX - centerX) / centerX;
      const y = (e.clientY - centerY) / centerY;
      // Left: move inverso, Right: move normal
      setParallaxLeft({ x: -x * 30, y: y * 30 });
      setParallaxRight({ x: x * 30, y: y * 30 });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowMouse(window.scrollY < 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <main className="min-h-screen relative">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative min-h-screen flex items-center justify-center bg-gray-950 text-white overflow-hidden z-10"
        >
          <StarsBackground />
          <div className="container mx-auto px-4 relative z-10 flex flex-col md:grid md:grid-cols-3 items-center justify-center">
            {/* Renan - Left */}
            <div className="hidden md:flex flex-col items-center justify-center relative h-full">
              <div className="relative w-80 h-80 flex items-center justify-center">
                {/* Efeitos de blur atrás da foto */}
                <div className="absolute inset-0 w-full h-full">
                  {/* Círculo de blur principal */}
                  <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                  {/* Círculo de blur secundário */}
                  <div className="absolute top-1/3 left-1/3 w-60 h-60 bg-blue-500/20 rounded-full blur-2xl"></div>
                  {/* Círculo de blur terciário */}
                  <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-pink-500/25 rounded-full blur-xl"></div>
                </div>
                
                {/* Quadrados decorativos com parallax */}
                <div
                  className="absolute -left-20 top-4 w-32 h-32 bg-purple-600 rounded-lg opacity-80 -z-10 transition-transform duration-100"
                  style={{ transform: `translate(${parallaxLeft.x}px, ${parallaxLeft.y}px)` }}
                ></div>
                <div
                  className="absolute left-8 top-2/3 w-40 h-40 border-4 border-white rounded-lg -z-10 transition-transform duration-100"
                  style={{ transform: `translate(${parallaxLeft.x * 0.7}px, ${parallaxLeft.y * 0.7}px)` }}
                ></div>
                <Image
                  src="/renan.png"
                  alt="Renan Santos"
                  fill
                  className="object-cover relative rounded-2xl border-4 border-white shadow-xl z-10"
                  priority
                />
              </div>
            </div>

            {/* Center Text */}
            <div className="flex flex-col items-center justify-center text-center py-6 md:py-0">
              <span className="text-lg md:text-xl text-gray-300 mb-2">Hello, we are</span>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
                <span className="text-purple-500">Renan</span> & <span className="text-purple-500">Samantha</span>
              </h1>
              <p className="text-2xl md:text-3xl font-bold mb-4">
                The <span className="text-purple-400">Dynamic</span> Duo
              </p>
              <div className="flex gap-4 mt-6 mb-8 justify-center">
                <a
                  href="#contact"
                  className="px-8 py-3 bg-purple-500 text-white rounded-md font-semibold hover:bg-purple-600 transition-colors shadow-md"
                >
                  Say Hello
                </a>
                <a
                  href="#about"
                  className="px-8 py-3 border-2 border-white text-white rounded-md font-semibold hover:bg-white hover:text-gray-900 transition-colors shadow-md"
                >
                  About Us
                </a>
              </div>
            </div>

            {/* Samantha - Right */}
            <div className="hidden md:flex flex-col items-center justify-center relative h-full">
              <div className="relative w-80 h-80 flex items-center justify-center">
                {/* Efeitos de blur atrás da foto */}
                <div className="absolute inset-0 w-full h-full">
                  {/* Círculo de blur principal */}
                  <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                  {/* Círculo de blur secundário */}
                  <div className="absolute top-1/3 right-1/3 w-60 h-60 bg-blue-500/20 rounded-full blur-2xl"></div>
                  {/* Círculo de blur terciário */}
                  <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-pink-500/25 rounded-full blur-xl"></div>
                </div>
                
                {/* Quadrados decorativos com parallax */}
                <div
                  className="absolute -right-20 top-4 w-32 h-32 bg-purple-600 rounded-lg opacity-80 -z-10 transition-transform duration-100"
                  style={{ transform: `translate(${parallaxRight.x}px, ${parallaxRight.y}px)` }}
                ></div>
                <div
                  className="absolute right-8 top-2/3 w-40 h-40 border-4 border-white rounded-lg -z-10 transition-transform duration-100"
                  style={{ transform: `translate(${parallaxRight.x * 0.7}px, ${parallaxRight.y * 0.7}px)` }}
                ></div>
                <Image
                  src="/samantha.png"
                  alt="Samantha Maia"
                  fill
                  className="object-cover relative rounded-2xl border-4 border-white shadow-xl z-10"
                  priority
                />
              </div>
            </div>

            {/* Mobile: show images above and below text */}
            <div className="flex md:hidden flex-col w-full items-center gap-8 mt-8">
              <div className="relative w-40 h-40 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src="/renan.png"
                  alt="Renan Santos"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="relative w-40 h-40 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src="/samantha.png"
                  alt="Samantha Maia"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Ícone do mouse para indicar rolagem */}
        <div
          className={`flex justify-center -mt-20 pb-[200px] transition-all duration-500
            ${showMouse ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        >
          <div className="relative flex items-center justify-center" style={{ width: 32, height: 54 }}>
            <svg width="32" height="54" viewBox="0 0 32 54" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect
                x="1.5"
                y="1.5"
                width="29"
                height="51"
                rx="14.5"
                stroke="#fff"
                strokeWidth="3"
                className={`mouse-outline transition-all duration-500 ${!showMouse ? 'mouse-outline-hide' : ''}`}
              />
            </svg>
            {/* Seta roxa animada, centralizada verticalmente */}
            <svg
              className={`absolute left-1/2 bottom-1 arrow-down transition-all duration-500 ${showMouse ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transform: 'translate(-50%, -50%)' }}
              width="12"
              height="12"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 3V13" stroke="#a855f7" strokeWidth="2" strokeLinecap="round"/>
              <path d="M4 9L8 13L12 9" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <style jsx>{`
              .mouse-outline {
                stroke-dasharray: 160;
                stroke-dashoffset: 0;
                transition: stroke-dashoffset 0.7s cubic-bezier(0.4,0,0.2,1);
              }
              .mouse-outline-hide {
                stroke-dashoffset: 160;
              }
              .arrow-down {
                animation: arrowDownAnim 1.2s infinite;
              }
              @keyframes arrowDownAnim {
                0% { opacity: 0; transform: translate(-50%, -50%) }
                40% { opacity: 1; transform: translate(-50%, -40%) }
                100% { opacity: 0; transform: translate(-50%, -30%) }
              }
            `}</style>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
        <OurExpertise />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        
          <WhyWorkWithUs />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <ProjectCarousel />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.25 }}
        >
          <Pricing />
        </motion.div>
        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Contact />
        </motion.div>
      </main>

      {/* Rodapé preto com gradiente suave */}
      <div
        className="fixed left-0 bottom-0 w-full h-[120px] z-[2147483647] pointer-events-none"
        style={{
          position: 'fixed',
          left: 0,
          bottom: 0,
          width: '100vw',
          height: '80px',
          zIndex: 2147483647,
          background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 100%)'
        }}
      />
    </>
  );
}
