'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full bg-[#1b362d] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
      
      <Link href="/" className="font-serif text-2xl md:text-3xl font-light tracking-wide text-[#FBF9F5] leading-none flex flex-col">
        <span>Dr. Maya Reynolds</span>
        <span className="text-[11px] font-sans tracking-[0.25em] text-[#FBF9F5]/80 mt-1 uppercase">
            Psychologist
        </span>
        </Link>

        
        <nav className="hidden md:flex items-center gap-8 text-sm tracking-widest font-sans">
          <Link href="#about" className="hover:text-amber-200 transition-colors">ABOUT</Link>
          <Link href="#services" className="hover:text-amber-200 transition-colors">SERVICES</Link>
          <Link href="#contact" className="hover:text-amber-200 transition-colors">CONTACT</Link>
          <Link href="#faqs" className="hover:text-amber-200 transition-colors">FAQs</Link>
          <Link href="#office" className="hover:text-amber-200 transition-colors">OUR OFFICE</Link>
        </nav>

        
        <button 
          onClick={toggleMenu} 
          className="md:hidden p-2 text-[#FBF9F5] focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
           
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
           
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      
      {isOpen && (
        <div 
          onClick={toggleMenu} 
          className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity"
        />
      )}

    
      <div className={`fixed top-0 right-0 h-full w-[75%] max-w-sm bg-[#1b362d] z-50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col p-6 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <span className="font-serif text-2xl text-[#FBF9F5]">Dr. Maya Reynolds</span>
          <button onClick={toggleMenu} className="p-2 text-[#FBF9F5]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

       
        <div className="flex flex-col gap-6 mt-8 text-lg font-sans tracking-widest text-[#FBF9F5]">
          <Link href="#about" onClick={toggleMenu} className="hover:text-amber-200 transition-colors">ABOUT</Link>
          <Link href="#services" onClick={toggleMenu} className="hover:text-amber-200 transition-colors">SERVICES</Link>
          <Link href="#contact" onClick={toggleMenu} className="hover:text-amber-200 transition-colors">CONTACT</Link>
          <Link href="#faqs" onClick={toggleMenu} className="hover:text-amber-200 transition-colors">FAQs</Link>
          <Link href="#office" onClick={toggleMenu} className="hover:text-amber-200 transition-colors">OUR OFFICE</Link>
        </div>
      </div>
    </header>
  );
}