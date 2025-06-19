import { useEffect, useRef, useState } from 'react';

export default function Contact() {
  // Fade-in animation
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) setVisible(true);
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <section id="contact" className="container mx-auto px-4 py-20">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-white">
        <span className="text-purple-500">Contact</span> Us
      </h2>
      <div ref={ref} className={`max-w-4xl mx-auto grid md:grid-cols-2 gap-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Let's Work Together</h3>
          <p className="text-gray-300">
            We combine our expertise to deliver high-quality solutions faster.
            Whether you need a mobile app, web platform, or complete digital transformation,
            we're here to help you achieve your goals.
          </p>
          <div className="space-y-4">
            {/* Samantha's Contact */}
            <div className="space-y-2">
              <h4 className="font-semibold">Samantha Maia</h4>
              <div className="flex items-center space-x-4 group">
                <svg className="w-6 h-6 text-purple-500 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-125" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300">samantha.maiasaldanha@gmail.com</span>
              </div>
            </div>
            {/* Renan's Contact */}
            <div className="space-y-2">
              <h4 className="font-semibold">Renan Santos</h4>
              <div className="flex items-center space-x-4 group">
                <svg className="w-6 h-6 text-purple-500 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-125" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300">devrcsantos@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z"/>
              </svg>
            </a>
          </div>
        </div>
        <form className="space-y-8 bg-gray-900/80 rounded-2xl shadow-xl p-8 border border-gray-800 backdrop-blur-md">
          {/* Floating label for Name */}
          <div className="relative">
            <input
              type="text"
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              className="peer mt-1 block w-full rounded-lg bg-gray-800 border-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500 text-lg py-5 px-4 placeholder-transparent"
              placeholder="Your name"
            />
            <label htmlFor="name" className={`absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-base pointer-events-none transition-all duration-200
              peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-400
              ${name ? '-top-2 text-xs text-purple-400' : ''}`}>Name</label>
          </div>
          {/* Floating label for Email */}
          <div className="relative">
            <input
              type="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="peer mt-1 block w-full rounded-lg bg-gray-800 border-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500 text-lg py-5 px-4 placeholder-transparent"
              placeholder="you@email.com"
            />
            <label htmlFor="email" className={`absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-base pointer-events-none transition-all duration-200
              peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-400
              ${email ? '-top-2 text-xs text-purple-400' : ''}`}>Email</label>
          </div>
          {/* Floating label for Message */}
          <div className="relative">
            <textarea
              id="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              rows={5}
              className="peer mt-1 block w-full rounded-lg bg-gray-800 border-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500 text-lg py-5 px-4 placeholder-transparent resize-none"
              placeholder="How can we help you?"
            ></textarea>
            <label htmlFor="message" className={`absolute left-4 top-8 text-gray-400 text-base pointer-events-none transition-all duration-200
              peer-focus:top-2 peer-focus:text-xs peer-focus:text-purple-400
              ${message ? 'top-2 text-xs text-purple-400' : ''}`}>Message</label>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
} 