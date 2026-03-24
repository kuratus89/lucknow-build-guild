import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "HOME", path: "/" },
    { label: "ABOUT US", path: "/about" },
    { label: "HELP US", path: "/helpus" },
    { label: "FAQs", path: "/faqs" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled
        ? "bg-[#15294D]/60 backdrop-blur-xl border-b border-[#657795]/40 shadow-lg shadow-black/20"
        : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo — bigger, no text beside it */}
        <Link to="/">
          <img
            src="/img/homepage_logo-3585630b.webp"
            alt="Blueprint Lucknow Guild"
            className="h-12 w-auto object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {links.map((item) => (
            <Link key={item.label} to={item.path}
              className="text-white/80 font-semibold text-sm tracking-wide hover:text-[#FACC15] transition-colors">
              {item.label}
            </Link>
          ))}
          <a href="https://blueprint.hackclub.com/guilds/invite/lucknow"
            className="bg-[#FACC15] text-[#15294D] font-bold px-5 py-2 rounded text-sm hover:bg-yellow-300 transition-colors">
            JOIN US
          </a>
        </div>

        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setOpen(!open)}>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#15294D]/80 backdrop-blur-xl border-t border-[#657795]/30 px-6 py-4 flex flex-col gap-4">
          {links.map((item) => (
            <Link key={item.label} to={item.path} onClick={() => setOpen(false)}
              className="text-white/80 font-semibold text-sm tracking-wide hover:text-[#FACC15] transition-colors">
              {item.label}
            </Link>
          ))}
          <a href="https://blueprint.hackclub.com/guilds/invite/lucknow"
            className="bg-[#FACC15] text-[#15294D] font-bold px-4 py-2 rounded text-sm text-center">
            JOIN US
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;