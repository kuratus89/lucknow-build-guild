import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faSlack  , faDiscord , faWhatsapp} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <footer className="w-full bg-[#0A1628] border-t border-[#657795]/20 px-6 md:px-16 pt-16 pb-8">
      <div className="max-w-6xl mx-auto">

        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between gap-12 pb-12 border-b border-[#657795]/20">

          {/* Brand */}
          <div className="max-w-xs">
            <img src="/img/homepage_logo-3585630b.webp" alt="Blueprint Lucknow Guild" className="h-12 mb-4 object-contain" />
            <p className="text-white/40 text-sm leading-relaxed">
              A free, one-day hardware workshop for teens aged 13–18 in Lucknow. Sponsored by Hack Club.
            </p>
            <p className="text-white/25 text-xs mt-4">April 19, 2026</p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-12">
            <div>
              <h3 className="text-[#FACC15] text-xs font-bold tracking-widest uppercase mb-5">Social</h3>
              <div className="flex flex-col gap-3">
                <a href="https://instagram.com/lucknow_build_guild" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm">
                  <FontAwesomeIcon icon={faInstagram} className="w-4" />
                  @lucknow_build_guild
                </a>
                <a href="https://app.slack.com/client/E09V59WQY1E/C0AM3G39X3M" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm">
                  <FontAwesomeIcon icon={faSlack} className="w-4" />
                  #build-guild-lucknow
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-[#FACC15] text-xs font-bold tracking-widest uppercase mb-5">Contact</h3>
              <a href="mailto:lucknowguild@gmail.com"
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm">
                <FontAwesomeIcon icon={faEnvelope} className="w-4" />
                lucknowguild@gmail.com
              </a>
              
            </div>

            <div>
              <h3 className="text-[#FACC15] text-xs font-bold tracking-widest uppercase mb-5">Pages</h3>
              <div className="flex flex-col gap-3">
                {[["About Us", "/about"], ["Help Us", "/helpus"], ["FAQs", "/faqs"]].map(([label, href]) => (
                  <a key={label} href={href} className="text-white/60 hover:text-white transition-colors text-sm">{label}</a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-white/25 text-xs">© 2026 Blueprint Lucknow Guild · Sponsored by Hack Club</p>
          <a href="https://blueprint.hackclub.com" target="_blank" rel="noopener noreferrer"
            className="text-white/25 hover:text-white/50 text-xs transition-colors">
            Part of Hack Club Blueprint →
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Contact