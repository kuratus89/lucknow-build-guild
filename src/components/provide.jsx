import React from 'react'

const Provide = () => {
    return (
        <section className = "w-full px-6 md:px-12 pt-20 max-w-6xl mx-auto">
            <h2 className = "text-3xl md:text-5xl  font-extrabold text-[#FACC15] mb-8">
                What will we provide?
            </h2>
            <div className = "grid grid-cols-2 md:grid-cols-2 gap-6">

                <div className= "bg-white/5 border border-[#657795]30 rounded-2xl p-6 hover:border-[#FACC15]/50 transition-colors">
                <span className = "text-4xl mb-4 block">
                    🛠️
                </span>

                <h3 className = "text-white font-bold text-xl mb-2">
                    Hardware & Tools
                </h3>

                <p className = "text-white/60 text-sm leading-relaxed">
                From soldering iron to micro-controller , everything will be provided . just bring your laptop (if possible) and start building!
                </p>                
                </div>

                <div className = "bg-white/5 border border-[#657795]/30 rounded-2xl p-6 hover:border-[#FACC15]/50 transition-colors">
                <span className = "text-4xl mb-4 block">
                🍕
                </span>
                <h3 className = "text-white font-bold text-xl mb-2">
                    Food & Drinks
                </h3>

                <p className = "text-white/60 text-sm leading-relaxed">
                Enjoy a delicious lunch , tasty snacks , and plenty of caffine to keep your creativity flowing all day long!
                </p>
                </div>

                <div className = "bg-white/5 border border-[#657795]/30 rounded-2xl p-6 hover:border-[#FACC15]/50 transition-colors">
                <span className = "text-4xl mb-4 block">
                🌐
                </span>
                <h3 className = "text-white font-bold text-xl mb-2">
                    Free .XYZ Domain
                </h3>
                <p className = "text-white/60 text-sm leading-relaxed">
                Every participant will receive a free .XYZ domain for an entire year , thanks to gen.xyz
                </p>
                </div>

                <div className = "bg-white/5 border border-[#657795]/30 rounded-2xl p-6 hover:border-[#FACC15]/50 transition-colors">
                <span className = "text-4xl mb-4 block">
                    🎁
                </span>
                <h3 className  ="text-white font-bold text-xl mb-2">
                    Gifts!
                </h3>
                <p className = "text-white/60 text-sm leading-relaxed">
                ahh , i cant tell you about this! its a secret!
                </p>
                </div>
                
                <div className = "bg-white/5 border border-[#657795]/30 rounded-2xl p-6 hover:border-[#FACC15]/50 transition-colors">
                <span className = "text-white font-bold text-xl mb-2">
                    🧰
                </span>
                <h3 className = "text-white font-bold text-xl mb-2">
                    Free 15$ coupon
                </h3>
                <p className = "text-white/60 text-sm leading-relaxed">
                Every participant will receive a 15$ jlcpcb coupon , from which you can order your own custom pcb 
                </p>
                </div>
            </div>
        </section>
    )
}

export default Provide