import React from 'react'

export default function Hero_Sec() {
  return (
    <section className="w-full bg-[#1C3B2B] py-12 lg:py-20 overflow-hidden">
      
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-15 lg:gap-10">
        
      
        <div className="w-full lg:w-[43%]">
          <img 
            src="/therapist_context_hero.png" 
            alt="Therapy and Support" 
            className="w-full h-[400px] lg: h-[520px] object-cover shadow-sm"
          />
        </div>

       
        <div className="w-full lg:w-[64%] px-6 lg:px-12 flex flex-col justify-center">
         
          <div className="lg:mb-30">
            <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#FBF9F5] font-semibold">
              THERAPY & COUNSELING IN SANTA MONICA & ACROSS CA
            </span>
          </div>

         
          <div className="lg:mb-10">
            <h1 className="text-3xl lg:text-5xl font-serif font-light font-heading text-[#FBF9F5] leading-[1.25]">
              Rebuild your foundation on solid ground and finally begin to{" "}
              <span className="font-serif italic text-[#FBF9F5]">thrive.</span>
            </h1>

           
            <p className="text-[#FBF9F5] text-sm lg:text-base max-w-xl font-sans lg:mt-10 font-[100]">
              Evidence-based therapy for adults navigating anxiety, trauma, and burnout to reflect, heal, and find sustainable relief in an authentic, supportive space.
            </p>
          </div>

          <div className="pt-2">
            <a 
              href="#contact" 
              className="inline-block text-xs uppercase tracking-[0.2em] font-sans text-[#FBF9F5] border-b border-[#FBF9F5] pb-1 hover:opacity-75 transition"
            >
              BOOK AN APPOINTMENT
            </a>
          </div>
        </div>

        
        <div className="hidden lg:block lg:w-[12%] h-[400px] lg:h-[480px] -mr-8">
          <img 
            src="/therapist_context_hero.png" 
            alt="Calm Beach Detail" 
            className="w-full h-full object-cover object-left"
          />
        </div>

      </div>
    </section>
  )
}