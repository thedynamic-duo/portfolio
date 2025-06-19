'use client';

export default function Navigation() {
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };
  return (
    <nav className="fixed top-0 w-full bg-black text-white backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="/" className="text-xl font-bold text-white">Samantha & Renan</a>
          <div className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="/projetos" className="text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors" onClick={handleContactClick}>Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
} 