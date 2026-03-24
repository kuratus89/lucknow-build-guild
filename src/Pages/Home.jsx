import React from 'react'
import Navbar from '../components/Navbar'
import Landscape from '../components/Landscape'
import Patti from '../components/Patti'
import Contact from '../components/Contact'
import Robo from '../components/Robo'
const Home = () => {
  return (
    <div className='relative overflow-x-hidden bg-[#0A365D] '>
         <Navbar className='relative z-10'/>
     <Landscape/>
     <Patti/>
     
     <Robo/>
     <Contact/>
    </div>
  )
}

export default Home