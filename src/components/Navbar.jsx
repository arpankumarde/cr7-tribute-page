import React from 'react'
import { playerData } from '../data'

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center px-4 py-2 bg-primary text-secondary2'>
            <div>{playerData.name}</div>
            <ul className='inline-flex items-center gap-4'>
                <li className='px-4 py-1 rounded-lg'><a>Home</a></li>
                <li className='px-4 py-1 rounded-lg'><a>About</a></li>
                <li className='px-4 py-1 rounded-lg'><a>Records</a></li>
                <li className='px-4 py-1 rounded-lg'><a>Gallery</a></li>

            </ul>
        </nav>
    )
}

export default Navbar