import React from 'react'
import {motion} from 'framer-motion'

const Patti = () => {
  return (
    <div className='w-full h-[25vw] py-10 rounded-tl-4xl  text-white font-semibold font-sans bg-[#FACC15] '>
      <div className="text  border-t-2 border-b-2 flex overflow-hidden whitespace-nowrap">
        <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear",repeat : Infinity, duration: 7 }} className='text-[18vw] leading-none pt-5 '>Learn Hardware And Make New Friends.. </motion.h1>

          <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear",repeat : Infinity, duration: 7}} className='text-[18vw] leading-none pt-5 '>Learn Hardware And Make New Friends..</motion.h1>

          <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear",repeat : Infinity, duration: 7}} className='text-[18vw] leading-none pt-5 '>Learn Hardware And Make New Friends.. </motion.h1>

        
      </div>
    </div>
  )
}

export default Patti
