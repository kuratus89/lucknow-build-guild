import React from 'react'

const Herosec = () => {
  return (
    <div className="w-full h-full bg-[#0A365D] text-[#FACC15] pl-10 flex items-center">
      <div className="text-left w-2/3 flex flex-col">
      <div>
       
        <h1 className="text-[3.5vw] font-extrabold mb-1.5">
          Wanna hangout with awesome guys?
        </h1>
      
        <h1 className="text-[3vw] font-bold mb-1.5">
          Come to Build-Guild Lucknow <br/>
          Learn hardware and get food
        </h1>
        <h1 className="text-[4vw] font-extrabold mb-1.5">
          For free!
        </h1>
      </div>
      
        <button className="bg-[#FACC15] text-white  font-bold w-45 h-20 px-4 rounded  mt-14"> 
        {/* Button now flows directly below the headings */}
        <a
          href="http://blueprint.hackclub.com/guilds/invite/lucknow"
         className='font-bold text-3xl hover:text-gray-300 '
        >
          Join Us
        </a>
        </button>
      </div>
    </div>
  )
}

export default Herosec