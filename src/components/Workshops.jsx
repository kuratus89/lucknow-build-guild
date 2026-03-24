import React, { useState } from 'react'

const workshops = [
  {
    number: "01",
    title: "Electronics & Soldering",
    time: "11:00 AM – 1:00 PM",
    tags: ["Beginner Friendly", "Hands-on", "Take Home"],
    color: "#FACC15",
    desc: "Learn the fundamentals of electronics from scratch. Understand circuits, components, and PCB basics — then actually solder something real.",
    details: [
      "No prior experience needed",
      "All tools and components provided",
      "You keep what you build",
      "Safety briefing included",
    ],
    software: ["EasyEDA", "TinkerCAD"],
  },
  {
    number: "02",
    title: "Build a Gaming Console",
    time: "2:00 PM – 4:00 PM",
    tags: ["Arduino", "PCB Design", "3D Modeling"],
    color: "#38BDF8",
    desc: "Program a handheld gaming console using Arduino IDE. Design its PCB on EasyEDA and model a case in TinkerCAD — full stack hardware.",
    details: [
      "Arduino IDE setup walkthrough",
      "EasyEDA for PCB schematic",
      "TinkerCAD for the enclosure",
      "Save project to GitHub",
    ],
    software: ["Arduino IDE", "EasyEDA", "TinkerCAD", "GitHub"],
  },
]

const WorkshopCard = ({ w }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative flex-1 min-w-0 rounded-2xl border p-6 md:p-8 cursor-default
        transition-all duration-500 ease-in-out overflow-hidden
        ${hovered ? 'border-opacity-80 scale-[1.02]' : 'border-[#657795]/30'}
      `}
      style={{
        borderColor: hovered ? w.color : undefined,
        background: hovered
          ? `linear-gradient(135deg, #1a3560 0%, #15294D 100%)`
          : 'rgba(255,255,255,0.03)',
        boxShadow: hovered ? `0 0 40px ${w.color}20` : 'none',
      }}
    >
      {/* Number */}
      <span className="text-6xl md:text-8xl font-extrabold absolute top-4 right-6 select-none transition-all duration-500"
        style={{ color: hovered ? `${w.color}20` : 'rgba(101,119,149,0.1)' }}>
        {w.number}
      </span>

      <div className="relative z-10">
        <div className="flex flex-wrap gap-2 mb-4">
          {w.tags.map(t => (
            <span key={t} className="text-[10px] font-bold px-2 py-1 rounded-full border"
              style={{ borderColor: `${w.color}50`, color: w.color }}>
              {t}
            </span>
          ))}
        </div>

        <h3 className="text-white font-extrabold text-xl md:text-3xl mb-1">{w.title}</h3>
        <p className="text-white/40 text-xs mb-4 font-mono">⏰ {w.time}</p>
        <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6">{w.desc}</p>

        {/* Details - show on hover */}
        <div className={`transition-all duration-500 overflow-hidden ${hovered ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <ul className="mb-4 space-y-2">
            {w.details.map(d => (
              <li key={d} className="flex items-center gap-2 text-sm text-white/70">
                <span style={{ color: w.color }}>✓</span> {d}
              </li>
            ))}
          </ul>
          <div>
            <p className="text-white/40 text-xs mb-2 uppercase tracking-widest">Tools Used</p>
            <div className="flex flex-wrap gap-2">
              {w.software.map(s => (
                <span key={s} className="bg-white/10 text-white text-xs px-3 py-1 rounded-full">{s}</span>
              ))}
            </div>
          </div>
        </div>

        <div className={`mt-4 text-xs font-semibold transition-all duration-300 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          style={{ color: w.color }}>
          Hover to see details →
        </div>
      </div>
    </div>
  )
}

const Workshops = () => (
  <section className="w-full px-6 md:px-12 py-20 max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-5xl font-extrabold text-[#FACC15] mb-2">The Workshops</h2>
    <p className="text-white/50 text-sm mb-10">Two sessions. Both free. You keep everything you build.</p>
    <div className="flex flex-col md:flex-row gap-6">
      {workshops.map(w => <WorkshopCard key={w.number} w={w} />)}
    </div>
  </section>
)

export default Workshops