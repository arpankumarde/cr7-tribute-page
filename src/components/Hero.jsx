import React from 'react'

const Hero = () => {
  return (
    <section id='about' className='bg-[url("https://wallpapercave.com/wp/wp2382367.jpg")] text-secondary2 h-[30rem] lg:h-[32rem] bg-cover bg-top bg-no-repeat p-4'>
      <div className='w-1/2 h-full flex items-start md:pt-16 lg:pt-0 lg:items-center ml-auto text-xl'>
        <p className='text-slate-100'>
          <span className='text-2xl text-white'>Cristiano Ronaldo,</span>
          <br />
          a name that instills fear in the hearts of defenders and goalkeepers alike. The ultimate goal machine, Ronaldo has been breaking records and making history ever since he stepped onto the pitch.
        </p>
      </div>
      {/* <div className='h-96'>
        <img src="https://wallpapercave.com/wp/wp2382367.jpg" className='bg-green-300' referrerPolicy='no-referrer' />
      </div> */}
    </section>
  )
}

export default Hero