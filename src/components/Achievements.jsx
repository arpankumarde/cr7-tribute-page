import React from 'react';
import { achievements } from '../data';
import { RecordCard } from '../ui';

const Achievements = () => {
  return (
    <section className='bg-primary text-slate-200 flex flex-col gap-4 p-4 md:p-8 md:py-4' id='achievements'>
      <h2 className='text-white text-4xl font-monoton -mb-2'>Achievements</h2>
      <div>
        <h3 className='text-slate-100 text-2xl'>Individual Achievements</h3>
        <div className='flex flex-wrap'>
          {achievements.filter((val) => val.type == 'individual').map((acc, key) => {
            return (
              <RecordCard key={key} count={acc.count} title={acc.name} />
            )
          })}
        </div>
      </div>
      <div>
        <h3 className='text-slate-100 text-2xl'>Sporting CP</h3>
        <div className='flex flex-wrap'>
          {achievements.filter((val) => val.type == 'club' && val.club == 'Sporting CP').map((acc, key) => {
            return (
              <RecordCard key={key} count={acc.count} title={acc.name} />
            )
          })}
        </div>
      </div>
      <div>
        <h3 className='text-slate-100 text-2xl'>Manchestar United</h3>
        <div className='flex flex-wrap'>
          {achievements.filter((val) => val.type == 'club' && val.club == 'Manchestar United').map((acc, key) => {
            return (
              <RecordCard key={key} count={acc.count} title={acc.name} />
            )
          })}
        </div>
      </div>
      <div>
        <h3 className='text-slate-100 text-2xl'>Real Madrid</h3>
        <div className='flex flex-wrap'>
          {achievements.filter((val) => val.type == 'club' && val.club == 'Real Madrid').map((acc, key) => {
            return (
              <RecordCard key={key} count={acc.count} title={acc.name} />
            )
          })}
        </div>
      </div>
      <div>
        <h3 className='text-slate-100 text-2xl'>Juventus</h3>
        <div className='flex flex-wrap'>
          {achievements.filter((val) => val.type == 'club' && val.club == 'Juventus').map((acc, key) => {
            return (
              <RecordCard key={key} count={acc.count} title={acc.name} />
            )
          })}
        </div>
      </div>
      <div>
        <h3 className='text-slate-100 text-2xl'>National Team</h3>
        <div className='flex flex-wrap'>
          {achievements.filter((val) => val.type == 'club' && val.club == 'Portugal').map((acc, key) => {
            return (
              <RecordCard key={key} count={acc.count} title={acc.name} />
            )
          })}
        </div>
      </div>
      <div>

      </div>
    </section>
  )
}

export default Achievements