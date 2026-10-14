import React from 'react'

export default function Honoring() {
  return (
    <section className="w-full bg-[#FBF9F5] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch justify-between gap-10 lg:gap-14">
        
       
        <div className="w-full lg:w-[55%] h-[360px] lg:h-[480px]">
          <img 
            src="/Family.png" 
            alt="Family standing together at the beach" 
            className="w-full h-full object-cover"
          />
        </div>

 
        <div className="w-full lg:w-[45%] flex flex-col justify-end pb-2 lg:pb-6">
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-serif text-[#1C3B2B] leading-[1.25]">
            Honoring where you’ve been{" "}
            <span className="font-serif italic font-light text-[#4A6B5D] text-4xl lg:text-5xl">
              &
            </span>{" "}
            helping shape where you’re headed.
          </h2>
        </div>

      </div>
    </section>
  )
}