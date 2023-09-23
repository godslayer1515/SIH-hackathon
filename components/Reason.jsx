import React from 'react';
import { dataPoints } from '@/components/dependency.js';

const Reason = () => {
  return (
    <div className='bg-[#f5f5f5] w-full py-12 pt-[15vh]' id='cull'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h1 className='text-2xl sm:text-3xl font-bold my-4 cursor-pointer hover:shalow-lg'>Our Enthusiasm towards the Problem Statement:</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {dataPoints.map((item) => (
            <div key={item.id} className='bg-white shadow-md p-4 rounded-lg'>
              <span className='bg-[#8674f0] text-white rounded p-2 hover:cursor-pointer flex w-[40px] justify-center hover:w-[45px] transition-all ease-in 2s'>{item.id}</span>
              <h2 className='text-lg font-semibold my-2'>{item.heading}</h2>
              <p className='text-gray-700'>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reason;
