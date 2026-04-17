import React from 'react'
import Contact from '../components/Contact'

const organizers = [
  { name: "Shaurya Ashu", role: "Lead Organizer", img: "/img/pic1.jpg" },
  { name: "Atharv Shukla", role: "Organizer & Web Dev", img: "/img/osho.jpg" },
  { name: "Krishna Singh", role: "Organizer", img: "/img/kura.png" },
  { name: "Saurabh", role: "Volunteer", img: "/img/WhatsApp Image 2026-04-17 at 4.57.19 PM.jpeg" },
  
]

const About = () => (
  <div className="w-full min-h-screen bg-transparent flex flex-col">
    <div className="pt-24 pb-16 px-6 md:px-16 max-w-6xl mx-auto w-full flex-1">
      <h1 className="text-4xl md:text-7xl font-extrabold text-[#FACC15] mb-4">MEET THE TEAM</h1>
      <p className="text-white/60 text-base md:text-lg mb-16 max-w-2xl">
        Blueprint Lucknow Guild is organized by three teen makers from Lucknow, backed by Hack Club.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-20">
        {organizers.map((o) => (
          <div key={o.name} className="flex flex-col items-center text-center">
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-2xl overflow-hidden mb-4 border-2 border-[#FACC15]/30">
              <img src={o.img} alt={o.name} className="w-full h-full object-cover" />
            </div>
            <h2 className="text-white font-bold text-xl">{o.name}</h2>
            <p className="text-[#FACC15] text-sm font-medium mt-1">{o.role}</p>
          </div>
        ))}
      </div>

      <div className="bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10 max-w-3xl">
        <h2 className="text-[#FACC15] font-extrabold text-2xl md:text-4xl mb-4">About the Event</h2>
        <p className="text-white/80 text-base md:text-lg leading-relaxed">
          Blueprint Lucknow Guild is a free, one-day hardware workshop and meetup for teens aged 13–18, 
          organized in Lucknow and sponsored by Hack Club. Attendees build real electronics from scratch, 
          meet fellow makers, and leave with two projects they built themselves — plus surprise gifts.
        </p>
        <a href="https://blueprint.hackclub.com/guilds/invite/lucknow"
          className="inline-block mt-6 bg-[#FACC15] text-[#0A365D] font-bold px-6 py-3 rounded hover:bg-yellow-300 transition-colors">
          Register for April 19 →
        </a>
      </div>
    </div>
    <Contact />
  </div>
)

export default About