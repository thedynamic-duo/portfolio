import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dynamic Duo - Portfolio",
  description: "Creative and professional portfolio showcasing our work",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-sm z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <a href="/" className="text-xl font-bold text-white">Dynamic Duo</a>
              <div className="hidden md:flex space-x-6">
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
                <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
