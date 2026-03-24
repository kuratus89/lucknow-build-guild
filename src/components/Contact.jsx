import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMicrosoft, faYahoo, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSlack } from "@fortawesome/free-brands-svg-icons";





const Contact = () => {
  return (
    <div className="w-full h-[25vw] bg-[#0F172A] rounded-tl-4xl">
      <h1 className="text-[4vw] font-bold text-white pt-10">CONTACT US</h1>
      <div className='w-full border-t-2 border-white flex flex-col justify-between' >
         
       <div className='pl-5 pt-5'>
          
         <h1 className='text-white'>OTHER</h1>
         
          <a
          href="https://instagram.com/lucknow_build_guild"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-white hover:text-[#FACC15]"
        >
          <FontAwesomeIcon icon={faInstagram} />
          <span>Instagram</span>
        </a>
           <a
          href="https://app.slack.com/client/E09V59WQY1E/C0AM3G39X3M"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-white hover:text-[#FACC15]"
        >
          <FontAwesomeIcon icon={faSlack} />
          <span>Slack Channel</span>
        </a>
       </div>
    <div className="top-0 left-0 flex flex-col items-end justify-end pr-5">
            <h1 className='text-white'>EMAIL</h1>
         <a
          href="mailto:lucknowguild@gmail.com"
          className="flex items-center space-x-2 text-white hover:text-[#FACC15]"
        >

          <FontAwesomeIcon icon={faEnvelope} />
          <span>lucknowguild@gmail.com</span>
        </a>
          <a
          href="mailto:lucknowguild@gmail.com"
          className="flex items-center space-x-2 text-white hover:text-[#FACC15]"
        >
          <FontAwesomeIcon icon={faEnvelope} />
          <span>lucknowguild@gmail.com</span>
        </a>
           <a
          href="mailto:kuratus89@gmail.com"
          className="flex items-center space-x-2 text-white hover:text-[#FACC15]"
        >
          <FontAwesomeIcon icon={faEnvelope} />
          <span>kuratus89@gmail.com</span>
        </a>
           <a
          href="mailto:atharvshukla466@gmail.com"
          className="flex items-center space-x-2 text-white hover:text-[#FACC15]"
        >
          <FontAwesomeIcon icon={faEnvelope} />
          <span>atharvshukla466@gmail.com</span>
        </a>
         </div>
      </div>
    </div>
  )
}

export default Contact
