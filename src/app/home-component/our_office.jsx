import React from 'react'

export default function Our_office() {
  return (
    <section className="w-full bg-[#FBF9F5] py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto space-y-12">
        
    
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[11px] lg:text-xs font-sans uppercase tracking-[0.25em] text-[#4A6B5D] font-semibold block">
            A CALM SPACE FOR HEALING
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1C3B2B] font-normal">
            Our Santa Monica{" "}
            <span className="font-serif italic text-[#4A6B5D] font-light">
              Sanctuary
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed pt-2">
            Located in Santa Monica, California. A quiet, private suite intentionally designed to feel calm and grounding, with abundant natural light, exposed brick, and an uncluttered atmosphere. Clients often share that the space itself helps them feel more at ease when they arrive. In-person therapy is offered here, alongside secure telehealth appointments across California.
          </p>
        </div>

     
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
          
         
          <div className="bg-white p-4 sm:p-5 shadow-sm border border-gray-100 flex flex-col space-y-4">
            <div className="w-full h-[320px] sm:h-[380px] overflow-hidden">
              <img 
                src="/office1.jpeg" 
                alt="Warm Natural Light & Architectural Calm" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-1 pt-1">
              <h3 className="text-lg sm:text-xl font-serif text-[#1C3B2B]">
                Warm Natural Light & Architectural Calm
              </h3>
              <p className="text-xs text-gray-500 font-sans leading-relaxed">
                Tall airy windows and acoustic warmth to foster ease and open conversation.
              </p>
            </div>
          </div>

     
          <div className="bg-white p-4 sm:p-5 shadow-sm border border-gray-100 flex flex-col space-y-4">
            <div className="w-full h-[320px] sm:h-[380px] overflow-hidden">
              <img 
                src="/office2.jpeg" 
                alt="Intentional Seating & Serene Ambiance" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-1 pt-1">
              <h3 className="text-lg sm:text-xl font-serif text-[#1C3B2B]">
                Intentional Seating & Serene Ambiance
              </h3>
              <p className="text-xs text-gray-500 font-sans leading-relaxed">
                Private, supportive furnishings designed to provide grounding comfort throughout your session.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}