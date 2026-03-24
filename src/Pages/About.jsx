import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const About = () => {


  const imgDivRef = useRef(null)
  const imgRef = useRef(null)
  const imgArray = [ '/img/pic1.jpg',
  '/img/pic2.jpg',
  '/img/pic3.jpg',
 ]
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(function(){
    gsap.to(
      imgDivRef.current,{
        scrollTrigger:{
          trigger:imgDivRef.current,
         
          start:'top 22% ',
          end:'top -200%',
          scrub:true,
          pin:true,
          onUpdate:function(elem){
         var imageindex = Math.floor(elem.progress*imgArray.length)
         console.log(imageindex )
         imgRef.current.src = imgArray[imageindex]
          }
        }
      }
    )
  })  
  return (
    <div>
     <div className="overflow-hidden text-[#FACC15]">
       <div   ref={imgDivRef}
        className='absolute h-[75vh] w-[30vw] bg-red-900  top-5 right-5 overflow-hidden rounded-3xl '>
        <img ref={imgRef} className='h-full w-full object-cover' src='/img/pic1.jpg'/>
      </div>
      <div className="sec1 w-full bg-[#0A365D] h-screen">
        <h1 className='text-[#FACC15] text-[12vh] pt-6 '>MEET OUR ORGANISERS</h1>
        <h1 className='text-[#FACC15] text-[10vh]'>ATHARV SHUKLA</h1>
        <p className=' text-[#FACC15] text-[5vh]'>WEB DEV</p>
      </div>
      <div className="sec2 w-full bg-[#0A365D] h-screen"></div>
      <div className="sec3 w-full bg-[#0A365D] h-screen"></div>
     </div>
    </div>
  )
}

export default About
