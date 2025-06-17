import React from 'react';

const expertiseBlocks = [
  {
    title: 'Front-end',
    techs: [
      { icon: '/icons/react.png', name: 'React' },
      { icon: '/icons/react.png', name: 'React Native' },
      { icon: '/icons/typescript.png', name: 'TypeScript' },
      { icon: '/icons/javascript.png', name: 'JavaScript' },
      { icon: '/icons/tailwind.png', name: 'Tailwind' },
      { icon: '/icons/flutter.png', name: 'Flutter' },
      { icon: '/icons/dart.png', name: 'Dart' },
    ],
  },
  {
    title: 'Back-end',
    techs: [
      { icon: '/icons/node.png', name: 'Node.js' },
      { icon: '/icons/postgres.png', name: 'PostgreSQL' },
      { icon: '/icons/supabase.png', name: 'Supabase' },
      { icon: '/icons/firebase.png', name: 'Firebase' },
    ],
  },
  {
    title: 'Artificial Intelligence',
    techs: [
      { icon: '/icons/openai.png', name: 'OpenAI' },
      { icon: '/icons/anthropic.png', name: 'Anthropic' },
      { icon: '/icons/gemini.png', name: 'Gemini' },
      { icon: '/icons/claude.png', name: 'Claude' },
    ],
  },
  {
    title: 'Analytics',
    techs: [
      { icon: '/icons/python.svg', name: 'Python' },
      { icon: '/icons/google-analytics.png', name: 'Google Analytics' },
      { icon: '/icons/looker.png', name: 'Looker Studio' },
      { icon: '/icons/powerbi.png', name: 'Power BI' },
    ],
  },
  {
    title: 'Design & UI/UX',
    techs: [
      { icon: '/icons/figma.png', name: 'Figma' },
      { icon: '/icons/photoshop.png', name: 'Photoshop' },
      { icon: '/icons/illustrator.png', name: 'Illustrator' },
      { icon: '/icons/framer.png', name: 'Framer' },
    ],
  },
  {
    title: 'Stores',
    techs: [
      { icon: '/icons/play_store.png', name: 'Google Play' },
      { icon: '/icons/app_store.png', name: 'App Store' },
    ],
  },
];

export default function OurExpertise() {
  return (
    <section className="py-20 bg-gray-950 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-12 text-center">
          <span className="text-purple-500">Our</span> Expertise
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {expertiseBlocks.map((block) => (
            <div
              key={block.title}
              className="relative rounded-2xl overflow-hidden shadow-lg bg-gray-800 group min-h-[340px] min-w-[260px] flex items-center justify-center cursor-pointer px-24 py-24"
            >
              <h3 className="text-2xl font-bold text-purple-400 z-10 group-hover:opacity-0 transition-opacity duration-300 text-center w-full">
                {block.title}
              </h3>
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-purple-800 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-6 py-8">
                {block.title === 'Back-end' ? (
                  <div className="flex flex-wrap gap-2 justify-center mb-2 w-full">
                    {block.techs.map((tech) => (
                      <div key={tech.name} className="flex flex-col items-center">
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className={`w-10 h-10 object-contain ${tech.name === 'Google Analytics' ? 'p-1 bg-white bg-opacity-90 rounded' : ''}`}
                        />
                        <span className="text-xs text-gray-200 mt-1 text-center break-words w-20">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2 justify-center mb-2 w-full">
                    {block.techs.map((tech) => (
                      <div key={tech.name} className="flex flex-col items-center">
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className={`w-10 h-10 object-contain ${tech.name === 'Google Analytics' ? 'p-1 bg-white bg-opacity-90 rounded' : ''}`}
                        />
                        <span className="text-xs text-gray-200 mt-1 text-center break-words w-20">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 