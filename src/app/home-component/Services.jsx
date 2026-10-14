import React from 'react'

export default function Services() {
  return (
    <section className="w-full bg-[#FBF9F5] py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
       
        <div className="mb-12">
          <h2 className="text-4xl lg:text-5xl font-serif font-light text-[#1C3B2B]">
            Who we <span className="italic font-serif text-[#4A6B5D]">help</span>
          </h2>
        </div>

       
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          
        
          <div className="flex flex-col space-y-5">
            <div className="w-full h-[320px] lg:h-[360px] overflow-hidden">
              <img 
                src="/anxity_theropy.png" 
                alt="Adults Therapy" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-serif font-light text-[#1C3B2B]">
              Anxiety Therapy in Santa Monica
            </h3>
            <p className="text-sm text-gray-700 font-sans leading-relaxed">
              For adults who appear capable and functional on the outside while quietly carrying constant worry, bodily tension, racing thoughts, or sleep disruption. We identify roots and restore autonomic balance.
            </p>
          </div>

          
          <div className="flex flex-col space-y-5">
            <div className="w-full h-[320px] lg:h-[360px] overflow-hidden">
              <img 
                src="/EMDR_theropy.png" 
                alt="Couples Therapy" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-serif font-light text-[#1C3B2B]">
              Trauma & EMDR Therapy
            </h3>
            <p className="text-sm text-gray-700 font-sans leading-relaxed">
              Paced, safe healing for single-incident trauma or long-standing childhood wounds and relational patterns. Utilizing EMDR and somatic stabilization to release painful stored memories safely.
            </p>
          </div>

        
          <div className="flex flex-col space-y-5">
            <div className="w-full h-[320px] lg:h-[360px] overflow-hidden">
              <img 
                src="/professional_burnout.png" 
                alt="Children & Teens Therapy" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-serif font-light text-[#1C3B2B]">
              Burnout & Perfectionism
            </h3>
            <p className="text-sm text-gray-700 font-sans leading-relaxed">
              Tailored care for professionals, creatives, and entrepreneurs depleted by relentless internal pressure, imposter feelings, and difficulty stepping away from work obligations.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}