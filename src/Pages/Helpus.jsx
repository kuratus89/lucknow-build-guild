import React from 'react'
import Contact from '../components/Contact'

const ways = [
  { title: "Sponsor Us", desc: "Cover venue, food, or component costs. Your logo goes on all our posters, merch, and the website.", icon: "💰" },
  { title: "Mentor a Workshop", desc: "Have hardware or software skills? Come spend a day teaching teens. We handle everything else.", icon: "🛠️" },
  { title: "Spread the Word", desc: "Share our event with schools, colleges, and maker communities in Lucknow.", icon: "📢" },
  { title: "Donate Components", desc: "Have spare electronics, PCBs, or tools gathering dust? Donate them for the workshops.", icon: "📦" },
]

const Helpus = () => (
  <div className="w-full min-h-screen bg-transparent flex flex-col">
    <div className="pt-24 pb-16 px-6 md:px-16 max-w-6xl mx-auto w-full flex-1">
      <h1 className="text-4xl md:text-7xl font-extrabold text-[#FACC15] mb-4">HELP US</h1>
      <p className="text-white/60 text-base md:text-lg mb-16 max-w-2xl">
        Blueprint Lucknow Guild runs entirely on community support. Here's how you can be part of it.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        {ways.map((w) => (
          <div key={w.title} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#FACC15]/40 transition-colors">
            <span className="text-4xl mb-4 block">{w.icon}</span>
            <h2 className="text-white font-bold text-xl mb-2">{w.title}</h2>
            <p className="text-white/60 text-sm leading-relaxed">{w.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#FACC15] rounded-2xl p-8 md:p-12 text-center max-w-2xl mx-auto">
        <h2 className="text-[#0A365D] font-extrabold text-2xl md:text-3xl mb-3">Get in touch</h2>
        <p className="text-[#0A365D]/70 mb-6">Reach out to us and we'll figure out the best way you can help.</p>
        <a href="mailto:lucknowguild@gmail.com"
          className="inline-block bg-[#0A365D] text-white font-bold px-8 py-3 rounded hover:bg-[#0c4a8a] transition-colors">
          lucknowguild@gmail.com
        </a>
      </div>
    </div>
    <Contact />
  </div>
)

export default Helpus