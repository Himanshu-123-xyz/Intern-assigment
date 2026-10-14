import React from 'react'

export default function Quote() {
  return (
    <section className="relative w-full h-[360px] lg:h-[480px] flex items-center justify-start overflow-hidden">
  
     
      <img 
        src="/quote.png" 
        alt="Children playing on beach" 
        className="absolute inset-0 w-full h-full object-cover"
      />

      
      <div className="absolute inset-0 bg-black/35 lg:bg-black/25"></div>

  
      <div className="relative z-10 max-w-3xl pl-15 mt-32 ml-8">
        <h2 className="text-2xl lg:text-4xl font-serif font-light text-[#FBF9F5] leading-relaxed tracking-wide">
          You deserve a place where your story is heard, valued, and understood.{" "}
          <span className="font-serif italic font-light opacity-90">
            Nothing will be too heavy for us to carry together.
          </span>
        </h2>
      </div>

    </section>
  )
}