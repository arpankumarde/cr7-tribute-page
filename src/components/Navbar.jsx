import React from 'react'
import { playerData } from '../data'

const Navbar = () => {
    return (
        <nav className='flex flex-col md:flex-row justify-between items-center px-4 lg:px-8 py-4 bg-primary text-secondary2' id='home'>
            <div className='text-2xl'>{playerData.name}</div>
            <ul className='inline-flex items-center gap-4'>
                <li className='px-4 py-1 rounded-lg'><a href='#home'>Home</a></li>
                <li className='px-4 py-1 rounded-lg'><a href='#about'>About</a></li>
                <li className='px-4 py-1 rounded-lg'><a href='#achievements'>Records</a></li>
                <li className='px-4 py-1 rounded-lg'><a href='#gallery'>Gallery</a></li>
            </ul>
        </nav>
    )
}

export default Navbar