import React from 'react'

export default function Specialties() {
  return (
    <section className="w-full bg-[#1C3B2B] text-[#FBF9F5] py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
        
       
        <div className="w-full lg:w-[30%] pt-2">
          <h2 className="text-3xl sm:text-4xl lg:font-[40px] font-light font-serif text-[#FBF9F5] leading-tight">
            Our{" "}
            <span className="font-serif italic font-light text-[#A3B899]">
              specialties
            </span>{" "}
            <br className="hidden lg:block" />
            include...
          </h2>
        </div>

       
        <div className="w-full lg:w-[70%] grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
          
      
          <div className="flex flex-col items-start space-y-4">
            <h3 className="text-2xl font-serif text-[#FBF9F5]">
              Trauma Recovery
            </h3>
            <p className="text-xs sm:text-sm text-[#FBF9F5]/80 font-sans font-[100] leading-relaxed">
              We don't always know when and how we've experienced trauma. In therapy, we work together to help you process your past, understand what's causing you to feel "stuck," and regain a visceral sense of safety and agency.
            </p>
            <a 
              href="#learn-more" 
              className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-[#FBF9F5] border-b border-[#FBF9F5] pb-1 hover:text-[#A3B899] hover:border-[#A3B899] transition-colors"
            >
              LEARN MORE
            </a>
          </div>

          
          <div className="flex flex-col items-start space-y-4">
            <h3 className="text-2xl font-serif text-[#FBF9F5]">
              EMDR Reprocessing
            </h3>
            <p className="text-xs sm:text-sm text-[#FBF9F5]/80 font-sans font-[100] leading-relaxed">
              Eye Movement Desensitization and Reprocessing (EMDR) is a powerful, evidence-backed modality that aids the brain in reprocessing painful or distressing memories so they no longer trigger acute daily distress.
            </p>
            <a 
              href="#learn-more" 
              className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-[#FBF9F5] border-b border-[#FBF9F5] pb-1 hover:text-[#A3B899] hover:border-[#A3B899] transition-colors"
            >
              LEARN MORE
            </a>
          </div>

          
          <div className="flex flex-col items-start space-y-4">
            <h3 className="text-2xl font-serif text-[#FBF9F5]">
              Anxiety & Panic Relief
            </h3>
            <p className="text-xs sm:text-sm text-[#FBF9F5]/80 font-sans font-[100] leading-relaxed">
              Moving past perpetual alarm states and catastrophic thoughts through physiological nervous system regulation, cognitive reframing, and actionable somatic stabilization techniques.
            </p>
            <a 
              href="#learn-more" 
              className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-[#FBF9F5] border-b border-[#FBF9F5] pb-1 hover:text-[#A3B899] hover:border-[#A3B899] transition-colors"
            >
              LEARN MORE
            </a>
          </div>

      
          <div className="flex flex-col items-start space-y-4">
            <h3 className="text-2xl font-serif text-[#FBF9F5]">
              Burnout & High Achievers
            </h3>
            <p className="text-xs sm:text-sm text-[#FBF9F5]/80 font-sans font-[100] leading-relaxed">
              High-functioning exhaustion requires intentional, specialized care. We unpack internalized perfectionism, rebalance boundary fatigue, and craft life rhythms that preserve both well-being and ambition.
            </p>
            <a 
              href="#learn-more" 
              className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-[#FBF9F5] border-b border-[#FBF9F5] pb-1 hover:text-[#A3B899] hover:border-[#A3B899] transition-colors"
            >
              LEARN MORE
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}