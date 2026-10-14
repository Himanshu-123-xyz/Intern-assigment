import React from 'react'

export default function About() {
  return (
    <section className="w-full bg-[#1C3B2B] py-16 lg:py-24 overflow-hidden">
    
      <div className="w-full flex flex-col lg:flex-row items-stretch justify-between">
        
        
        <div className="w-full lg:w-[65%] px-6 sm:px-12 lg:pl-24 lg:pr-16 flex flex-col justify-center py-8">
          
          
          <h2 className="text-3xl sm:text-4xl lg:font-[50px] font-serif font-light text-[#FBF9F5] leading-[1.25] mb-12 max-w-2xl">
            You’re holding onto hope that life can be better than it is right now.
          </h2>

         
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs sm:text-sm text-[#FBF9F5] font-sans leading-relaxed">
            
           
            <div className="space-y-4">
              <p className="font-semibold uppercase tracking-[0.15em] text-[#FBF9F5] text-[11px]">
                AT DR. MAYA REYNOLDS PSYCHOLOGY, WE WANT TO MAKE THAT HOPE A REALITY.
              </p>
              <p className="text-[#FBF9F5] font-[100]">
                Whether you're an adult seeking personal growth, looking to work through your trauma, a couple working on your relationship, or a parent looking for support for your child, we provide a compassionate and safe space to help you navigate all of life's ups and downs.
              </p>
            </div>

           
            <div className="flex items-end">
              <p className="text-[#FBF9F5] font-[100]">
                First and foremost, we believe what you're going through is real, valid, and worthy of support. Our team offers clients an environment to discover a new life and a deeper sense of self in the midst of their struggles. As we tap into the power of connection and understanding, you can find your footing again and take a transformative path forward.
              </p>
            </div>

          </div>

        </div>

       
        <div className="w-full lg:w-[30%] h-[500px]">
          <img 
            src="/dr_maya.png" 
            alt="Calm Beach" 
            className="w-full h-full object-cover rounded-l-none"
          />
        </div>

      </div>
    </section>
  )
}