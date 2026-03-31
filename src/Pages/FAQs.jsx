import React, { useState } from "react";
import Contact from "../components/Contact";

const faqs = [
  { q: "What is Blueprint Lucknow Guild?", a: "It's a free, one-day hardware workshop and meetup for teens aged 13–18, organized in Lucknow and sponsored by Hack Club. You'll get hands-on experience building real electronics from scratch, meet fellow makers, and go home with two projects you built yourself." },
  { q: "When and where is it?", a: "The event is on April 19, 2026. The venue is being finalized — keep an eye on our updates or your registration confirmation for the latest details." },
  { q: "Do I need any prior experience?", a: "None at all. Both workshops are designed to be beginner-friendly. If you've never touched a soldering iron, written a line of code, or opened a circuit diagram — you're exactly who this event is for." },
  { q: "How many workshops are there and can I attend both?", a: "There are two workshops and yes you can attend both! They're designed to complement each other, starting from fundamentals and building up to a full hardware project." },
  { q: "Will there be food and drinks?", a: "Yes, free lunch, snacks and plenty of caffeine to keep you going through the day." },
  { q: "What do I need to bring?", a: "A laptop, a charger, and a USB-C cable. Everything else — components, tools, PCBs, and materials — is provided." },
  { q: "What software will we use?", a: "Arduino IDE for programming the gaming console, EasyEDA (web) for schematic and PCB design, TinkerCAD (web) for 3D modeling, and GitHub for saving your project files. It's recommended to set up accounts on all three and install Arduino IDE before the event." },
  { q: "Are there any gifts?", a: "Yes! Surprise gifts on top of the two projects you're already taking home." },
  { q: "What else happens besides the workshops?", a: "Open discussions, fun activities, and time to meet and network with other teen makers and tinkerers from Lucknow. It's as much a community meetup as it is a workshop." },
  { q: "Is it really free?", a: "100%. No registration fee, no material fee, no hidden charges. Sponsored by Hack Club." },
  { q: "How do I sign up?", a: "Scan the QR code on the event poster or visit: blueprint.hackclub.com/guilds/invite/lucknow" },
  { q: "Who are the organizers?", a: "The event is organized by Shaurya Ashu, Atharv Shukla, and Krishna Singh from Hack Club. Reach them at lucknow@blueprint.hackclub.com." },
  { q: "Is this event safe for my child?", a: "Yes. The event is organized specifically for teens aged 13–18 in a structured, mentor-supervised workshop environment. Safety instructions — particularly around soldering — will be given before any hands-on work begins, and organizers will be present throughout the day." },
  { q: "How do I reach the organizers?", a: "Email lucknow@blueprint.hackclub.com or reach out on Slack at #build-guild-lucknow." },
];

const FAQItem = ({ q, a, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button className="w-full flex items-center justify-between py-5 text-left gap-4" onClick={() => setOpen(!open)}>
        <span className="text-[#FACC15] font-bold text-base shrink-0">{index}.</span>
        <span className="flex-1 text-white font-semibold text-base md:text-lg">{q}</span>
        <span className="text-[#FACC15] text-2xl font-light shrink-0">{open ? '−' : '+'}</span>
      </button>
      {open && <p className="text-white/75 pb-5 pl-7 pr-4 text-sm md:text-base leading-relaxed">{a}</p>}
    </div>
  );
};

const FAQs = () => (
  <div className="w-full min-h-screen bg-transparent flex flex-col">
    <div className="pt-24 pb-16 px-6 md:px-12 max-w-4xl mx-auto w-full flex-1">
      <h1 className="text-6xl md:text-8xl font-extrabold text-[#FACC15] mb-2">FAQ</h1>
      <p className="text-white/50 mb-12 text-sm">Everything you need to know about the event.</p>
      {faqs.map((item, i) => <FAQItem key={i} q={item.q} a={item.a} index={i + 1} />)}
    </div>
    <Contact />
  </div>
);

export default FAQs;