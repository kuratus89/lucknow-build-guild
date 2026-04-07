import React from 'react'

const sponsors = [
  { name: "EasyEDA", logo: "/img/EasyEDA_Vert_W_Trans.png", url: "https://easyeda.com/" },
  { name: "JLCPCB", logo: "/img/JLCPCB-logo-white-Trans.png", url: "https://jlcpcb.com/" },
  { name: "OSHWLab", logo: "/img/OSHWLab_Vert_W_Trans.png", url: "https://oshwlab.com/" },
  {name : ".XYZ" , logo :"img/xyz-logo-white.png" , url:"https://gen.xyz/a/146690"},
  {name : "CodeCrafters" , logo:"img/White.svg" , url:"https://codecrafters.io/"}
]

const Sponsors = () => {
  return (
    <section className="w-full border-t border-[#657795]/20 px-6 md:px-12 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-1">Our Sponsors</h2>
            <p className="text-white/40 text-sm">Made possible by organizations who believe in teen makers.</p>
          </div>
          <a href="/helpus"
            className="text-[#FACC15] border border-[#FACC15]/40 hover:bg-[#FACC15]/10 transition-colors text-sm font-semibold px-5 py-2.5 rounded w-fit">
            Become a Sponsor →
          </a>
        </div>

        <div className="flex flex-wrap justify-center md:justify-center gap-4">
          {sponsors.map((s) => (
            <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto flex-1 min-w-[200px] max-w-[320px] bg-white/5 border border-[#657795]/20 rounded-xl p-6 flex items-center justify-center hover:border-[#657795]/50 hover:bg-white/8 transition-all group min-h-[100px]">
              <img src={s.logo} alt={s.name} className="max-h-12 max-w-full object-contain opacity-60 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0" />
            </a>
          ))}
        </div>
        

        {/* Hack Club always shown */}
        <div className="mt-8 pt-8 border-t border-[#657795]/15 flex items-center gap-4">
          <span className="text-white/30 text-xs uppercase tracking-widest">Powered by</span>
          <a href="https://hackclub.com" target="_blank" rel="noopener noreferrer"
            className="text-white/50 hover:text-white text-sm font-bold transition-colors flex items-center gap-2">
            🔴 Hack Club
          </a>
        </div>
      </div>
    </section>
  )
}

export default Sponsors