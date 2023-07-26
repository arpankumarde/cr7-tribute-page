import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-primary text-slate-300 p-4'>
      <section className='flex'>
        <div className='flex flex-col h-40 w-1/2'>
          <div className='h-36'>
            <img className='h-full rounded-full aspect-square object-cover' src="https://wallpapercave.com/wp/wp11239789.jpg" alt="" referrerPolicy='no-referrer' />
          </div>
          <div>CR7</div>
        </div>
        <div>Contact</div>
      </section>
      <hr className='my-2' />
      <secttion className="flex justify-between">
        <span>CR7 Fans</span>
        <span>All rights reserved</span>
      </secttion>
    </footer>
  )
}

export default Footer