import React from 'react'

const Hero = () => {
    return (
        <div className='flex flex-col justify-center items-center bg-[#f5f5f5] w-full border-[2px] border-black md:h-[240px] h-[300px]'>
            <h4 className='text-xl my-[2vh]'>Lorem ipsum dolor sit amet.</h4>
            <div className='flex flex-row justify-center align-center w-full border-[2px] border-blue-500 my-[2vw]'>
                <div className='px-[3vw]'>
                    logo1
                </div>
                <div className='px-[3vw]'>
                    logo2
                </div>
                <div className='px-[3vw]'>
                    logo3
                </div>
                <div className='px-[3vw]'>
                    logo4
                </div>
                <div className='px-[3vw]'>
                    logo5
                </div>
            </div>
        </div>
    )
}

export default Hero
