import React from 'react'
import { records } from '../data'
import { RecordCard } from '../ui'

const Records = () => {
  return (
    <section className='bg-primary text-slate-300 flex flex-col gap-4 p-4 md:p-8 md:py-4'>
      <h2 className='text-white text-4xl font-monoton -mb-2'>Records</h2>
      <div>
        <h3 className='text-slate-100 text-2xl'>World Records</h3>
        <div className='flex flex-wrap'>
          {records.filter((val) => val.type == 'World Records').map((region, key) => {
            return (
              <RecordCard key={key} count={region.records.length} title={region.title} />
            )
          })}
        </div>
      </div>
      <div>
        <h3 className='text-slate-100 text-2xl'>Club Records</h3>
        <div className='flex flex-wrap'>
          {records.filter((val) => val.type == 'Club Records').map((region, key) => {
            return (
              <RecordCard key={key} count={region.records.length} title={region.title} />
            )
          })}
        </div>
      </div>
      <div>
        <h3 className='text-slate-100 text-2xl'>National Team Records</h3>
        <div className='flex flex-wrap'>
          {records.filter((val) => val.type == 'Country Records').map((region, key) => {
            return (
              <RecordCard key={key} count={region.records.length} title={region.title} />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Records