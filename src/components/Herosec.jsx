import React from 'react'

const Herosec = () => {
  return (
    <div className="w-full md:min-h-screen text-[#FACC15] px-6 md:px-12 flex items-center py-24">
      <div className="w-full md:w-3/5 flex flex-col">

        <span className="inline-block bg-[#FACC15]/10 border border-[#FACC15]/30 text-[#FACC15] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 max-w-fit">
          Event Ended · April 19, 2026
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 leading-[1.1]">
          Blueprint Lucknow Guild
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white/80 mb-1 leading-snug">
          A free, one-day hardware workshop for teens
        </h2>
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white/80 mb-4 leading-snug">
          aged 13–18 in Lucknow
        </h2>
        <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FACC15] mb-8">
          Thank you for joining us!
        </p>

        <div className="flex flex-wrap gap-4 mb-8">
          <a href="/gallery"
            className="bg-[#FACC15] text-[#15294D] font-bold text-base px-7 py-3.5 rounded hover:bg-yellow-300 transition-colors">
            View Gallery →
          </a>
          <a href="https://www.instagram.com/lucknow_build_guild/"
            className="border border-[#FACC15]/50 text-[#FACC15] font-bold text-base px-7 py-3.5 rounded hover:bg-[#FACC15]/10 transition-colors">
            Instagram
          </a>
        </div>

        <div className="flex flex-col xl:flex-row xl:items-center bg-white/5 border border-[#657795]/20 p-6 md:p-8 rounded-2xl max-w-fit backdrop-blur-sm">

          <div className="w-full xl:w-auto pb-8 xl:pb-0 xl:pr-8 border-b xl:border-b-0 xl:border-r border-[#657795]/30">
            <p className="text-white/40 text-xs uppercase tracking-widest mb-3">The event has ended</p>
            <p className="text-[#FACC15] font-extrabold text-2xl sm:text-3xl">
              It was a success 🎉
            </p>
            <p className="text-white/50 text-sm mt-1">
              See you at the next one!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 w-full xl:w-auto pt-8 xl:pt-0 xl:pl-8">

            <div className="flex flex-col">
              <span className="text-[#FACC15] text-xs uppercase tracking-widest mb-1 font-bold">
                When & where
              </span>
              <span className="text-white font-bold text-lg">
                April 19, 2026
              </span>
              <span className="text-white/60 font-medium">
                Lucknow, UP
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-[#FACC15] text-xs uppercase tracking-widest mb-1 font-bold">
                Venue
              </span>
              <a href="https://maps.app.goo.gl/XbxCHNpcfV8uET5N8" target="_blank" rel="noreferrer" className="text-white font-bold text-lg hover:text-[#FACC15] transition-colors flex flex-col group">
                <span>SureStay By Best Western</span>
                <span className="text-sm text-white/50 group-hover:text-[#FACC15]/80 transition-colors">
                  View on Map ↗
                </span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Herosec