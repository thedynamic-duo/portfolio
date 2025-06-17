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

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gray-950 text-white overflow-hidden">
        <StarsBackground />
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:grid md:grid-cols-3 items-center justify-center min-h-screen">
          {/* Renan - Left */}
          <div className="hidden md:flex flex-col items-center justify-center relative h-full">
            <div className="relative w-96 h-96 flex items-center justify-center">
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
          <div className="flex flex-col items-center justify-center text-center py-12 md:py-0">
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
            <div className="relative w-96 h-96 flex items-center justify-center">
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
            <div className="relative w-64 h-64 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
              <Image
                src="/renan.png"
                alt="Renan Santos"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="relative w-64 h-64 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
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
      </section>

      <OurStory />
      <WhyWorkWithUs />
      <OurExpertise />
      <ProjectCarousel />

      {/* Contact Section */}
      <Contact />

      {/* Technologies Section */}
      <section id="technologies" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Tech Stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12">
            {technologies.map((tech) => (
              <TechIcon key={tech} name={tech} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
