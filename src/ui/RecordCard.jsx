import React from 'react'

const RecordCard = ({ count, title }) => {
    return (
        <div className='flex items-baseline gap-2 w-1/2'>
            <p className='text-5xl text-slate-100'>{count}x</p>
            <p className='text-lg'>{title}</p>
        </div>
    )
}

export default RecordCard