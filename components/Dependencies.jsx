import React from 'react'
import { dependencies } from '@/components/dependency.js'
const Dependencies = () => {
    return (
        <div className='flex flex-col justify-center items-center py-[80px]'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-2xl py-[1vh]'>Dependencies</h1>
            </div>
            <div className='grid md:grid-cols-3 gap-5 p-10 pl-40 pr-40'>
                {dependencies.map((item) => {
                    return (
                        <div key={item.id}>
                            <span className=' bg-blue-300  rounded-full p-2 '>{item.id}</span>
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Dependencies
