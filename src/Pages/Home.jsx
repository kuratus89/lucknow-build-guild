import React from 'react'
import Landscape from '../components/Landscape'
import Patti from '../components/Patti'
import Perks from '../components/Perks'
import Workshops from '../components/Workshops'
import Timeline from '../components/Timeline'
import Robo from '../components/Robo'
import Sponsors from '../components/Sponsors'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div className='relative overflow-x-hidden'>
      <Landscape />
      <Patti />
      <Perks />
      <Workshops />
      <Timeline />
      <Robo />
      <Sponsors />
      <Contact />
    </div>
  )
}

export default Home