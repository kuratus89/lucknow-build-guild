import React from 'react'

const slots = [
  { time: "9:00 AM",  label: "Opening Session",            desc: "Welcome, introductions, and what to expect from the day.", icon: "🎉" },
  { time: "10:00 AM", label: "Introduction to Electronics", desc: "Basics of circuits, components, and how everything connects.", icon: "⚡" },
  { time: "11:00 AM", label: "Workshop One",                desc: "Hands-on build session — get your hands dirty.", icon: "🔧", highlight: true },
  { time: "1:00 PM",  label: "Lunch & Break",               desc: "Free lunch, snacks, and time to chill with fellow makers.", icon: "🍕" },
  { time: "2:00 PM",  label: "Workshop Two",                desc: "Second build session — take it further.", icon: "🛠️", highlight: true },
  { time: "4:00 PM",  label: "Electronics Discussion",      desc: "Open floor — talk projects, ideas, and future builds.", icon: "💬" },
  { time: "5:00 PM",  label: "Snacks & Closing",            desc: "Wrap up, collect your projects and surprise gifts, say goodbye.", icon: "🎁" },
]

const Timeline = () => {
  return (
    <section className="w-full px-6 md:px-12 py-20 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-extrabold text-[#FACC15] mb-2">Day Schedule</h2>
      <p className="text-white/50 text-sm mb-12">April 19, 2026 · Full day event</p>

      <div className="relative">
        {/* vertical line */}
        <div className="absolute left-[72px] top-0 bottom-0 w-px bg-[#657795]/40 hidden sm:block" />

        <div className="flex flex-col gap-0">
          {slots.map((slot, i) => (
            <div key={i} className={`relative flex gap-6 group`}>
              {/* Time */}
              <div className="w-[72px] shrink-0 pt-5 text-right">
                <span className="text-[#657795] text-xs font-mono">{slot.time}</span>
              </div>

              {/* Dot */}
              <div className="relative shrink-0 flex flex-col items-center hidden sm:flex">
                <div className={`w-3 h-3 rounded-full mt-6 border-2 z-10 transition-all duration-300
                  ${slot.highlight
                    ? 'bg-[#FACC15] border-[#FACC15]'
                    : 'bg-[#15294D] border-[#657795] group-hover:border-[#FACC15]'
                  }`}
                />
              </div>

              {/* Content */}
              <div className={`flex-1 mb-2 p-4 rounded-xl border transition-all duration-300 cursor-default
                ${slot.highlight
                  ? 'border-[#FACC15]/30 bg-[#FACC15]/5'
                  : 'border-[#657795]/20 hover:border-[#657795]/50 hover:bg-white/3'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-base">{slot.icon}</span>
                  <h3 className={`font-bold text-sm md:text-base ${slot.highlight ? 'text-[#FACC15]' : 'text-white'}`}>
                    {slot.label}
                  </h3>
                  {slot.highlight && (
                    <span className="bg-[#FACC15] text-[#15294D] text-[10px] font-bold px-2 py-0.5 rounded-full ml-1">
                      WORKSHOP
                    </span>
                  )}
                </div>
                <p className="text-white/50 text-xs md:text-sm leading-relaxed">{slot.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline