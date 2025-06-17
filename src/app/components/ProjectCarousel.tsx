import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    image: '/project1-placeholder.jpg',
    title: 'Transportation Management System',
    description: 'A comprehensive solution for transportation companies, featuring real-time tracking, route optimization, and fleet management.',
    techs: ['React Native', 'Node.js', 'Firebase'],
  },
  {
    image: '/project2-placeholder.jpg',
    title: 'Agribusiness Platform',
    description: 'Digital transformation solution for agribusiness, including crop management, inventory control, and market analysis.',
    techs: ['Flutter', 'Python', 'Power BI'],
  },
  {
    image: '/project3-placeholder.jpg',
    title: 'Cross-Platform Mobile App',
    description: 'A successful mobile application available on both iOS and Android, featuring modern UI/UX and seamless performance.',
    techs: ['React Native', 'Supabase', 'GCP'],
  },
  {
    image: '/project4-placeholder.jpg',
    title: 'E-commerce Solution',
    description: 'A scalable e-commerce platform with payment integration and analytics.',
    techs: ['Next.js', 'Stripe', 'MongoDB'],
  },
  {
    image: '/project5-placeholder.jpg',
    title: 'Analytics Dashboard',
    description: 'A dashboard for real-time business analytics and reporting.',
    techs: ['React', 'D3.js', 'AWS'],
  },
];

export default function ProjectCarousel() {
  const rowRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Scroll automático infinito
  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;
    let isResetting = false;
    const scrollStep = 2;
    const interval = setInterval(() => {
      if (!row) return;
      if (isResetting) return;
      row.scrollLeft += scrollStep;
      if (row.scrollLeft >= row.scrollWidth / 2) {
        isResetting = true;
        row.scrollLeft = row.scrollLeft - row.scrollWidth / 2;
        setTimeout(() => { isResetting = false; }, 10);
      }
    }, 20);
    return () => clearInterval(interval);
  }, []);

  // Drag-to-scroll
  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;
    const onMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      startX.current = e.pageX - row.offsetLeft;
      scrollLeft.current = row.scrollLeft;
      row.classList.add('cursor-grabbing');
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - row.offsetLeft;
      const walk = (x - startX.current) * 1.2; // Sensibilidade
      row.scrollLeft = scrollLeft.current - walk;
    };
    const onMouseUp = () => {
      isDragging.current = false;
      row.classList.remove('cursor-grabbing');
    };
    row.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    return () => {
      row.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!rowRef.current) return;
    const width = rowRef.current.offsetWidth;
    rowRef.current.scrollBy({
      left: direction === 'left' ? -width : width,
      behavior: 'smooth',
    });
  };

  // Renderiza os projetos duas vezes para efeito infinito
  const infiniteProjects = [...projects, ...projects];

  return (
    <section className="py-20 bg-gray-950 text-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8 px-4">
          <h2 className="text-3xl font-bold">
            <span className="text-purple-500">Featured</span> Projects
          </h2>
          <Link href="/projetos" className="px-6 py-2 bg-purple-500 text-white rounded-md font-semibold hover:bg-purple-600 transition-colors shadow-md">
            Ver todos
          </Link>
        </div>
        <div className="relative w-full">
          <button
            aria-label="Scroll left"
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-gray-800 hover:bg-purple-600 transition-colors"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
          </button>
          <div
            ref={rowRef}
            className="flex gap-8 overflow-x-auto scroll-smooth w-full custom-scrollbar-hide select-none cursor-grab"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {infiniteProjects.map((project, idx) => (
              <div
                key={project.title + '-' + idx}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg min-w-[420px] max-w-lg flex-shrink-0 scroll-snap-align-start flex flex-col justify-between"
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col flex-1 p-6 pb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-700">
                    {project.techs.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-purple-600/20 text-purple-400 rounded text-sm">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            aria-label="Scroll right"
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-gray-800 hover:bg-purple-600 transition-colors"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
      <style jsx global>{`
        .custom-scrollbar-hide::-webkit-scrollbar { display: none; }
        .custom-scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
} 