import React from 'react'
import Landscape from '../components/Landscape'
import Patti from '../components/Patti'
import Workshops from '../components/Workshops'
import Timeline from '../components/Timeline'
import Robo from '../components/Robo'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div className='relative overflow-x-hidden'>
      <Landscape />
      <Patti />
      <Workshops />
      <Timeline />
      <Robo />
      <Contact />
    </div>
  )
}

export default Home