import React from 'react'

// 9am  -> opening session
// 10am -> introduction to electronics and soldering workshop
// 11am -> blinky workshop
// 1pm  -> lunch and break
// 1:45pm  -> fun activities
// 3pm  -> console workshop
// 5pm  -> snacks and reward/gifts distribution
// 6pm  -> closing

const slots = [
  { time: "9:00 AM",  label: "Opening Session",},
  {time :"10:00 AM" , label:"Introduction To Electronics and Soldering Sorkshop" },
  {time :"11:00 AM" , label:"Blinky Workshop" , highlight:true},
  {time :"1:00 PM" , label:"Lunch and Break"},
  {time :"1:45 PM" , label:"Fun Activities"},
  {time :"3:00 PM" , label :"Console Workshop" , highlight:true},
  {time :"5:00 PM" , label :"Snacks and Rewards Distribution"},
  {time :"6:00 PM" , label :"Closing"}
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