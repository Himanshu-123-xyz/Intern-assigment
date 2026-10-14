import React from 'react'

export default function How_we_work() {
  return (
    <section className="w-full bg-[#FBF9F5] py-16 lg:py-24 overflow-hidden">
      <div className="w-full flex flex-col lg:flex-row items-stretch justify-between">
        
       
        <div className="w-full lg:w-[70%] px-6 sm:px-12 lg:pl-24 lg:pr-16 flex flex-col justify-center py-6">
          
          {/* Category Label */}
          <span className="text-[11px] lg:text-xs font-sans uppercase tracking-[0.25em] text-[#4A6B5D] font-semibold mb-6">
            HOW WE WORK
          </span>

          {/* Main Serif Heading */}
          <h2 className="text-3xl sm:text-4xl lg:font-[50px] font-serif font-light text-[#1C3B2B] leading-tight mb-12">
            We’re here to make a difference.
          </h2>

          {/* 2-Column Text Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs sm:text-sm text-gray-700 font-sans leading-relaxed">
            
            {/* Left Column P Tags */}
            <div className="space-y-4">
              <p className="font-semibold uppercase tracking-[0.15em] text-[#1C3B2B] text-[11px] leading-relaxed">
                AT DR. MAYA REYNOLDS PSYCHOLOGY, WE PRIORITIZE YOUR MENTAL WELLBEING ABOVE ALL ELSE.
              </p>
              <p className="text-gray-600">
                Here, your needs are always top priority. Dr. Maya Reynolds and our team take the time to deeply listen in order to truly understand your unique story, emotional triggers, and personal struggles. We recognize that no two individuals are the same, which is why your therapy plan is intentionally tailored to your specific goals and lifestyle. (You won’t find any one-size-fits-all solutions here.)
              </p>
            </div>

            {/* Right Column P Tag */}
            <div>
              <p className="text-gray-600">
                Through evidence-based practices like EMDR, somatic techniques, and compassionate dialog, we gently guide you to process underlying anxiety and trauma. We take your healing process seriously, helping you uncover internal strengths, build healthier relationship patterns, and step confidently into a balanced, fulfilling future.
              </p>
            </div>

          </div>

        </div>

        
        <div className="w-full lg:w-[25%] min-h-[400px] lg:min-h-[550px]">
          <img 
            src="/consult.png" 
            alt="Dr. Maya Reynolds Therapy Space" 
            className="w-full h-full object-cover object-left-top"
          />
        </div>

      </div>
    </section>
  )
}