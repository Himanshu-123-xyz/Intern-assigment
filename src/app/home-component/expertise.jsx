import React from 'react'

export default function Expertise() {
  return (
    <section className="w-full bg-[#F9F8F6] py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-12">
        
       
        <div className="w-full lg:w-[35%] pt-2">
          <h2 className="text-4xl lg:font-[40px] font-serif font-light text-[#1C3B2B] leading-tight">
            Our areas of <br />
            <span className="font-serif font-light italic text-[#4A6B5D] text-5xl lg:text-4xl font-normal block mt-1">
              expertise
            </span>
          </h2>
        </div>

       
        <div className="w-full lg:w-[65%] grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-0">
          
        
          <div className="flex flex-col">
            <div className="border-b border-gray-200/80 py-5 text-xs lg:font-[15px] font-sans tracking-[0.2em] text-[#1C3B2B] uppercase">
              ANXIETY & PANIC DISORDERS
            </div>
            <div className="border-b border-gray-200/80 py-5 text-xs lg:font-[15px] font-sans tracking-[0.2em] text-[#1C3B2B] uppercase">
              TRAUMA
            </div>
            <div className="border-b border-gray-200/80 py-5 text-xs lg:font-[15px] font-sans tracking-[0.2em] text-[#1C3B2B] uppercase">
              SOMATIC & NERVOUS SYSTEM BALANCE
            </div>
            <div className="border-b border-gray-200/80 py-5 text-xs lg:font-[15px] font-sans tracking-[0.2em] text-[#1C3B2B] uppercase">
              HIGH INTERNAL PRESSURE & PERFECTIONISM
            </div>
            <div className="border-b border-gray-200/80 py-5 text-xs lg:font-[15px] font-sans tracking-[0.2em] text-[#1C3B2B] uppercase">
              PROFESSIONAL BURNOUT & WORK STRESS
            </div>
          </div>

          
          <div className="flex flex-col">
            <div className="border-b border-gray-200/80 py-5 text-xs lg:font-[15px] font-sans tracking-[0.2em] text-[#1C3B2B] uppercase">
              HEALTHY BOUNDARIES & RELATIONSHIPS
            </div>
            <div className="border-b border-gray-200/80 py-5 text-xs lg:font-[15px] font-sans tracking-[0.2em] text-[#1C3B2B] uppercase">
              TEENS
            </div>
            <div className="border-b border-gray-200/80 py-5 text-xs lg:font-[15px] font-sans tracking-[0.2em] text-[#1C3B2B] uppercase">
              INTIMACY & CONNECTION
            </div>
            <div className="py-5 text-xs lg:text-sm font-sans tracking-[0.2em] text-[#1C3B2B] uppercase">
              ...AND MORE.
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}