import React from 'react'

export default function Footer() {
  return (
   <footer className="w-full bg-[#FFFF] py-16 md:py-20 px-6 md:px-12 lg:px-20 border-t border-gray-200/60">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 text-[#1C3B2B]">
    
   
    <div className="md:col-span-5 space-y-6">
  
      <div className="space-y-1">
        <h2 className="text-3xl lg:text-4xl font-serif text-[#1C3B2B] tracking-tight">
          Dr. Maya Reynolds
        </h2>
        <p className="text-xs font-sans tracking-[0.25em] text-[#4A6B5D] uppercase font-medium">
          PSYCHOLOGY & COUNSELING
        </p>
      </div>

      <p className="text-xs sm:text-sm font-sans text-gray-600 leading-relaxed max-w-md">
        We want to make getting started simple. You’re welcome to come into our sanctuary suite in Santa Monica or schedule virtual appointments from anywhere in California—whatever works best for you.
      </p>
    </div>

  
    <div className="md:col-span-2 space-y-4">
      <h3 className="text-xs font-sans tracking-[0.2em] text-[#1C3B2B] uppercase font-semibold">
        NAVIGATE
      </h3>
      <ul className="space-y-2 text-xs sm:text-sm font-sans text-gray-600">
        <li>
          <a href="#home" className="hover:text-[#4A6B5D] transition-colors">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-[#4A6B5D] transition-colors">
            About
          </a>
        </li>
        <li>
          <a href="#specialties" className="hover:text-[#4A6B5D] transition-colors">
            Specialties
          </a>
        </li>
        <li>
          <a href="#faqs" className="hover:text-[#4A6B5D] transition-colors">
            FAQs
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-[#4A6B5D] transition-colors">
            Contact
          </a>
        </li>
      </ul>
    </div>

    {/* Column 3: Specialties / Practice Areas (~2 Cols) */}
    <div className="md:col-span-2 space-y-4">
      <h3 className="text-xs font-sans tracking-[0.2em] text-[#1C3B2B] uppercase font-semibold">
        SPECIALTIES
      </h3>
      <ul className="space-y-2 text-xs sm:text-sm font-sans text-gray-600">
        <li>Trauma Recovery</li>
        <li>EMDR Therapy</li>
        <li>Anxiety & Panic</li>
        <li>Burnout Relief</li>
        <li>Somatic Healing</li>
        <li>Relationships</li>
      </ul>
    </div>

    {/* Column 4: Contact Details (~3 Cols) */}
    <div className="md:col-span-3 space-y-4">
      <h3 className="text-xs font-sans tracking-[0.2em] text-[#1C3B2B] uppercase font-semibold">
        CONTACT
      </h3>
      <div className="space-y-3 text-xs sm:text-sm font-sans text-gray-600 leading-relaxed">
        <div>
          <p>123th Street 45 W</p>
          <p>Santa Monica, CA 90401</p>
        </div>

        <div>
          <p>
            <a href="mailto:hello@drmayareynolds.com" className="hover:text-[#4A6B5D] transition-colors">
              hello@drmayareynolds.com
            </a>
          </p>
          <p>
            <a href="tel:3105550192" className="hover:text-[#4A6B5D] transition-colors">
              (310) 555-0192
            </a>
          </p>
        </div>

        <p className="pt-2 italic text-xs text-gray-500">
          Serving Santa Monica, Venice, Brentwood, Pacific Palisades, & across California via Telehealth.
        </p>
      </div>
    </div>

  </div>
</footer>
  )
}
