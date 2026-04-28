import React from 'react'

// ✅ Add or remove perks here easily
const perks = [
  {
    icon: "🔧",
    title: "Hardware & Tools",
    desc: "From soldering iron to microcontroller — everything provided. Just bring your laptop and start building.",
    tag: "All provided",
    tagColor: "#FACC15",
  },
  {
    icon: "🍕",
    title: "Food & Drinks",
    desc: "Free lunch, tasty snacks, and plenty of caffeine to keep your creativity flowing all day long.",
    tag: "Free lunch",
    tagColor: "#FACC15",
  },
  {
    icon: "🌐",
    title: "Free .XYZ Domain",
    desc: "Every participant gets a free .XYZ domain for an entire year, thanks to gen.xyz.",
    tag: "Worth $12",
    tagColor: "#FACC15",
  },
  {
    icon: "🎁",
    title: "Surprise Gifts",
    desc: "We can't tell you what it is — but trust us, you'll want to show up just for this.",
    tag: "Secret 🤫",
    tagColor: "#FACC15",
  },
  {
    icon: "🛒",
    title: "Free $15 JLCPCB Coupon",
    desc: "Every participant gets a $15 JLCPCB coupon to order your very own custom PCB after the event.",
    tag: "Worth $15",
    tagColor: "#FACC15",
  },
  {
    icon: "🤝",
    title: "Community",
    desc: "Meet teen makers and tinkerers from Lucknow. Build your network and find future collaborators.",
    tag: "Hack Club",
    tagColor: "#FACC15",
  },
]

const Perks = () => {
  return (
    <section className="w-full px-6 md:px-12 py-20 max-w-6xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-2">
          What will we <span className="text-[#FACC15]">provide?</span>
        </h2>
        <p className="text-white/40 text-sm md:text-base max-w-xl">
          Everything is free. No hidden costs. Just show up with your laptop, leave with projects, swag, and new friends.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {perks.map((p) => (
          <div key={p.title}
            className="group bg-white/3 border border-[#657795]/20 rounded-2xl p-6
              hover:border-[#657795]/50 hover:bg-white/6 transition-all duration-300">

            <div className="flex items-start justify-between mb-4">
              <span className="text-3xl">{p.icon}</span>
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full border"
                style={{ color: p.tagColor, borderColor: `${p.tagColor}40`, backgroundColor: `${p.tagColor}10` }}>
                {p.tag}
              </span>
            </div>

            <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#FACC15] transition-colors">
              {p.title}
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA strip */}
      <div className="mt-12 bg-[#FACC15]/5 border border-[#FACC15]/20 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-white font-bold text-lg md:text-xl">All of this, completely free.</p>
          <p className="text-white/40 text-sm">Sponsored by Hack Club. April 19, Lucknow.</p>
        </div>
      </div>
    </section>
  )
}

export default Perks