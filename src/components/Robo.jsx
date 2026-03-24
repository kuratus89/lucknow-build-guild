import React, { useEffect, useState } from 'react';

const Robo = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let x = e.clientX;
      let y = e.clientY;
      let deltax = x - window.innerWidth / 2;
      let deltay = y - window.innerHeight / 2;
      let angle = Math.atan2(deltay, deltax) * 180 / Math.PI;
      setRotate(angle);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className='w-full h-screen'>
      <div className='relative w-full h-full bg-[#0A365D] text-white'>
       
        <div className="flex flex-col items-center">
  <h1 className="font-extrabold text-[7vw] leading-none pt-5 text-center">
    Worry about travel?
  </h1>
   <div className='w-full h-[10vw]'></div>
  <h1 className="font-extrabold text-[7vw] leading-none pt-5 text-center">
    Don't worry, we got you covered!
  </h1>
   <button className="bg-[#FACC15] text-white  font-bold w-45 h-20 px-4 rounded  mt-14"> 
        {/* Button now flows directly below the headings */}
        <a
          href="http://blueprint.hackclub.com/guilds/invite/lucknow"
         className='font-bold text-3xl hover:text-gray-300 '
        >
         Gas Fund..
        </a>
        </button>
</div>


        <div className='absolute flex gap-10 justify-between top-1/3 left-1/2 h-1/3 -translate-x-[50%] -translate-y-[50%]'>
          
          {/* Eye 1 */}
          <div className="eye1 flex items-center justify-center rounded-full bg-zinc-100 h-full w-55">
            <div  className='h-1/2 w-1/2 flex items-center justify-center rounded-full bg-zinc-900'>
              <div style={{ transform: `rotate(${rotate}deg)` }} className='line w-full h-1/4'>
                <div className='h-full w-1/4 rounded-full bg-zinc-100'></div>
              </div>
            </div>
          </div>

          {/* Eye 2 */}
          <div className="eye2 flex items-center justify-center rounded-full bg-zinc-100 h-full w-55">
            <div className='h-1/2 w-1/2 flex items-center justify-center rounded-full bg-zinc-900'>
              <div style={{ transform: `rotate(${rotate}deg)` }} className='line w-full h-1/4'>
                <div className='h-full w-1/4 rounded-full bg-zinc-100'></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Robo;