import React from 'react'

const Herosec = () => {
  return (
    <div className="w-full h-full text-[#FACC15] px-6 md:px-12 flex items-center">
      <div className="w-full md:w-3/5 flex flex-col pt-16">
        
        {/* Event badge */}
        <div className="flex flex-wrap gap-2 mb-6">
          {["April 19 ,Lucknow","Venue: TBA"].map(tag => (
            <span key={tag} className="bg-[#657795]/30 border border-[#657795]/50 text-white/70 text-xs font-semibold px-3 py-1 rounded-full tracking-wide">
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 leading-[1.1]">
          Wanna hangout<br />with awesome guys?
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white/80 mb-2 leading-snug">
          Come to Build-Guild Lucknow
        </h2>
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white/80 mb-4 leading-snug">
          Learn hardware, build projects, get food
        </h2>
        <p className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#FACC15]">
          For free!
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <a href="https://blueprint.hackclub.com/guilds/invite/lucknow"
            className="bg-[#FACC15] text-[#15294D] font-bold text-base md:text-lg px-8 py-4 rounded hover:bg-yellow-300 transition-colors">
            Join Us →
          </a>
        </div>

        {/* Stats row */}
        <div className="flex gap-8 mt-10 pt-8 border-t border-[#657795]/30">
          {[["Free", "No hidden costs"], ["2", "Workshops"], ["1 Day", "April 19"]].map(([val, label]) => (
            <div key={label}>
              <p className="text-[#FACC15] font-extrabold text-xl md:text-2xl">{val}</p>
              <p className="text-white/50 text-xs">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Herosec