import React, { useEffect, useState } from 'react'

const TARGET = new Date("2026-04-19T09:00:00")

const Countdown = () => {
  const [time, setTime] = useState({ days: 0, hours: 0, mins: 0, secs: 0 })

  useEffect(() => {
    const tick = () => {
      const diff = TARGET - new Date()
      if (diff <= 0) return
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        mins: Math.floor((diff % 3600000) / 60000),
        secs: Math.floor((diff % 60000) / 1000),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  const boxes = [
    { val: time.days,  label: "Days" },
    { val: time.hours, label: "Hours" },
    { val: time.mins,  label: "Mins" },
    { val: time.secs,  label: "Secs" },
  ]

  return (
    <div className="flex gap-3 sm:gap-4">
      {boxes.map(({ val, label }) => (
        <div key={label} className="flex flex-col items-center bg-white/5 border border-[#657795]/30 rounded-xl px-3 py-2 sm:px-4 sm:py-3 min-w-[56px]">
          <span className="text-[#FACC15] font-extrabold text-xl sm:text-2xl md:text-3xl tabular-nums leading-none">
            {String(val).padStart(2, "0")}
          </span>
          <span className="text-white/40 text-[10px] sm:text-xs mt-1 uppercase tracking-widest">{label}</span>
        </div>
      ))}
    </div>
  )
}

const Herosec = () => {
  return (
    <div className="w-full h-full text-[#FACC15] px-6 md:px-12 flex items-center">
      <div className="w-full md:w-3/5 flex flex-col pt-20">

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 leading-[1.1]">
          Wanna hangout<br />with awesome guys?
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white/80 mb-1 leading-snug">
          Come to Build-Guild Lucknow
        </h2>
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white/80 mb-4 leading-snug">
          Learn hardware, build projects, get food
        </h2>
        <p className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#FACC15] mb-8">
          For free!
        </p>

        <div className="flex flex-wrap gap-4 mb-10">
          <a href="https://blueprint.hackclub.com/guilds/invite/lucknow"
            className="bg-[#FACC15] text-[#15294D] font-bold text-base md:text-lg px-8 py-4 rounded hover:bg-yellow-300 transition-colors">
            Join Us →
          </a>
          <a href="/faqs"
            className="border border-[#FACC15]/50 text-[#FACC15] font-bold text-base md:text-lg px-8 py-4 rounded hover:bg-[#FACC15]/10 transition-colors">
            Learn More
          </a>
        </div>

        {/* Countdown */}
        <div className="mb-6">
          <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Event starts in</p>
          <Countdown />
        </div>

        {/* Event info at bottom */}
        <div className="flex flex-wrap gap-4 pt-6 border-t border-[#657795]/30">
          {[
            { icon: "", text: "April 19, 2026" },
            { icon: "", text: "Lucknow" },
            { icon: "", text: "Venue: TBA" },
          ].map(({ icon, text }) => (
            <span key={text} className="text-white/50 text-sm flex items-center gap-1.5">
              <span>{icon}</span> {text}
            </span>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Herosec